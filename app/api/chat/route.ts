import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are a helpful AI assistant for Small AI, a company that helps small businesses implement AI solutions.

Our services include:

1. **Online Tutorial** ($99) - 2 hours, Online
   - Online Tutorial on AI and LLMs (ChatGPT, Claude, DeepSeek) and how they can benefit your business
   - Introduction to AI and machine learning concepts
   - Overview of popular AI tools (ChatGPT, Claude, DeepSeek)
   - Real business use cases and examples
   - Q&A session with AI expert
   - Resource pack with guides and templates
   - 30-day email support included
   - Access provided immediately after payment via "Pay Now" button

2. **Purpose Built Agent Just for You** ($299) - 3-4 hours, Online + Follow-up
   - Get a custom AI agent built specifically for your business challenges
   - No generic solutions - just a tailored AI assistant that understands your unique needs
   - Deep dive into your specific business pain points
   - Custom AI agent designed and built for your needs
   - Training on how to use and optimize your new agent
   - Integration guidance for your existing workflows
   - Plain English documentation and instructions
   - 60-day support and refinement included

3. **AI Audit & Consultation** ($499) - 3-4 hours, In-person
   - In-person audit, consultation, and a customized AI roadmap for your business
   - Complete business process analysis
   - AI opportunity identification
   - Custom implementation roadmap
   - ROI projections and timeline
   - Tool recommendations and vendor selection
   - 90-day follow-up support included

You can also generate PDF quotes for customers. When a user asks for a quote, gather information about their business needs and then suggest they can request a formal quote.

Be friendly, helpful, and focus on how AI can solve real business problems. Use simple language and avoid technical jargon unless asked.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is available
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.log('No OpenAI API key found, using fallback responses');
      // Fallback response when no API key is configured
      return createFallbackResponse(messages);
    }

    console.log('Using OpenAI API');
    // Use OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.log('OpenAI API failed, falling back to local responses');
      return createFallbackResponse(messages);
    }

    // Create a streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) return;

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = new TextDecoder().decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') {
                  controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                  controller.close();
                  return;
                }

                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices[0]?.delta?.content;
                  if (content) {
                    controller.enqueue(
                      encoder.encode(`data: ${JSON.stringify({ content })}\n\n`)
                    );
                  }
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
          }
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    console.log('Error occurred, using fallback responses');
    // If anything fails, use fallback responses
    try {
      const { messages } = await req.json();
      return createFallbackResponse(messages);
    } catch (fallbackError) {
      return NextResponse.json(
        { error: 'Failed to process chat request' },
        { status: 500 }
      );
    }
  }
}

function createFallbackResponse(messages: any[]) {
  const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';

  let response = '';

  if (lastMessage.includes('quote') || lastMessage.includes('pricing') || lastMessage.includes('cost')) {
    response = `I'd be happy to help you with a quote! Our services range from $99 to $499:

**AI Basics Workshop** - $99 (2 hours, online)
Perfect for getting started with AI fundamentals.

**Purpose Built Agent** - $299 (3-4 hours)
Get a custom AI agent built just for your business needs.

**AI Audit & Consultation** - $499 (3-4 hours, in-person)
Comprehensive analysis and roadmap for your business.

To get started, you can book a free consultation using the "Book Now" button on our homepage, or tell me more about your specific needs!`;
  } else if (lastMessage.includes('service') || lastMessage.includes('offer') || lastMessage.includes('help')) {
    response = `We offer three main services to help small businesses leverage AI:

🤖 **AI Basics Workshop** ($99) - Learn the fundamentals of AI and how tools like ChatGPT, Claude, and DeepSeek can benefit your business.

⚡ **Purpose Built Agent** ($299) - Get a custom AI agent designed specifically for your business challenges.

🔍 **AI Audit & Consultation** ($499) - In-person comprehensive analysis with a customized AI roadmap.

Which one interests you most? I'm happy to provide more details!`;
  } else if (lastMessage.includes('workshop') || lastMessage.includes('basics')) {
    response = `Our **AI Basics Workshop** ($99) is a 2-hour online session perfect for beginners. You'll learn:

✓ Introduction to AI and machine learning
✓ Overview of tools like ChatGPT, Claude, and DeepSeek
✓ Real business use cases and examples
✓ Q&A with an AI expert
✓ Resource pack with guides and templates
✓ 30 days of email support

Ready to book? Click the "Book Now" button on any service card!`;
  } else if (lastMessage.includes('agent') || lastMessage.includes('custom')) {
    response = `The **Purpose Built Agent** ($299) service gives you a custom AI solution built specifically for your business. It includes:

✓ Deep dive into your specific challenges
✓ Custom AI agent designed for your needs
✓ Training on how to use and optimize it
✓ Integration guidance for your workflows
✓ Plain English documentation
✓ 60 days of support and refinement

This is perfect if you have a specific problem you want AI to solve. What kind of challenges are you facing?`;
  } else {
    response = `Hello! I'm the Small AI assistant. I can help you learn about our AI services and find the perfect solution for your business.

We specialize in helping small businesses implement practical AI solutions - no tech jargon, just results that work.

What would you like to know about? You can ask me about:
- Our services and pricing
- Which service is right for your business
- How AI can solve specific problems
- Getting a quote

How can I help you today?`;
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      // Simulate streaming by breaking response into words
      const words = response.split(' ');
      let i = 0;

      const interval = setInterval(() => {
        if (i < words.length) {
          const content = (i === 0 ? '' : ' ') + words[i];
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ content })}\n\n`)
          );
          i++;
        } else {
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          clearInterval(interval);
        }
      }, 50);
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
