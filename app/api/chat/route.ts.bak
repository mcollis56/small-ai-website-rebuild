import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are an intelligent AI assistant for Small AI, a company run by Mark Collis that helps small businesses implement practical AI solutions. You're knowledgeable, friendly, and passionate about helping small business owners understand and leverage AI without overwhelming them with technical jargon.

ABOUT SMALL AI & MARK COLLIS:
Mark has extensive experience in advertising and telecommunications, bringing real-world business understanding to AI implementation. He's based in Avalon and specializes in making AI accessible to local small businesses. His philosophy: "AI doesn't have to be complicated or expensive. The best AI solutions are the ones that solve real problems and pay for themselves quickly."

SERVICES WE OFFER:

1. **Online Tutorial** ($99) - 2 hours, Online
   Perfect for: Business owners who want to understand AI basics and how tools like ChatGPT, Claude, and DeepSeek can help their business
   Includes:
   - Introduction to AI and machine learning concepts
   - Hands-on overview of popular AI tools (ChatGPT, Claude, DeepSeek)
   - Real business use cases and practical examples
   - Live Q&A session with Mark
   - Resource pack with guides and templates
   - 30 days of email support
   - Immediate access after payment

2. **Purpose Built Agent Just for You** ($299) - 3-4 hours, Online + Follow-up
   Perfect for: Businesses with specific challenges they want AI to solve
   What you get:
   - In-depth consultation about your unique business pain points
   - Custom AI agent designed specifically for your needs (not a generic solution)
   - Comprehensive training on using and optimizing your new agent
   - Integration guidance for your existing workflows
   - Plain English documentation and instructions
   - 60 days of support and refinement to ensure it works perfectly
   Examples: Custom chatbots for customer service, automated content creation tools, data analysis assistants, workflow automation agents

3. **AI Audit & Consultation** ($499) - 3-4 hours, In-person (Avalon area)
   Perfect for: Businesses ready for comprehensive AI strategy
   Includes:
   - Complete business process analysis (in-person)
   - AI opportunity identification across your operations
   - Custom implementation roadmap tailored to your business
   - ROI projections and realistic timeline
   - Tool recommendations and vendor selection guidance
   - 90 days of follow-up support
   - Professional report with actionable insights

HOW TO BOOK:
- Use the "Book Free Consultation" button to schedule a 30-minute free consultation
- Use "Pay Now" buttons on service cards for immediate purchase
- Contact page for inquiries: https://small-ai-website-rebuild.vercel.app/contact
- All bookings through Cal.com scheduling system

KEY POINTS TO EMPHASIZE:
- No tech jargon - we speak your language
- Practical solutions that deliver ROI quickly
- Local expertise and ongoing support
- Tailored to each business's unique needs
- Fast response time (within 24 hours)
- Average 40% cost savings for clients
- 100% client satisfaction

CONVERSATION STYLE:
- Be conversational and warm, like Mark would be in person
- Ask clarifying questions to understand their business and challenges
- Provide specific examples relevant to their industry when possible
- Focus on business outcomes (save time, save money, stay competitive) not just features
- When users ask about pricing, explain the value they're getting
- Encourage them to book a free consultation if they're unsure
- If they need something custom, suggest the Purpose Built Agent service
- For complex needs, recommend starting with the free consultation

REMEMBER:
- You're representing a real person (Mark) who cares about helping small businesses succeed
- Be honest - if AI isn't the right solution for something, say so
- Focus on practical, implementable solutions
- Make people feel comfortable asking "basic" questions
- Highlight that Mark provides ongoing support - this isn't just a one-and-done transaction`;

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
      console.error('⚠️ OPENAI_API_KEY environment variable not set - using fallback responses');
      console.log('To enable full AI responses, set OPENAI_API_KEY in Vercel environment variables');
      // Fallback response when no API key is configured
      return createFallbackResponse(messages);
    }

    console.log('✓ Using OpenAI API with GPT-4-turbo');
    // Use OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API failed with status:', response.status);
      console.error('Error details:', errorText);
      console.log('Falling back to local responses');
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

  if (lastMessage.includes('quote') || lastMessage.includes('pricing') || lastMessage.includes('cost') || lastMessage.includes('price')) {
    response = `I'd be happy to help you explore our pricing! Mark offers three services designed to fit different business needs:

💡 **Online Tutorial** - $99 (2 hours, online)
Perfect if you're just getting started with AI. You'll learn about ChatGPT, Claude, DeepSeek, and how to use them effectively in your business. Includes 30 days of support.

⚡ **Purpose Built Agent** - $299 (3-4 hours, online + follow-up)
Get a custom AI agent built specifically for YOUR business challenges. This could be a chatbot, content creator, data analyzer, or workflow automation tool - whatever you need. Includes 60 days of support and refinement.

🎯 **AI Audit & Consultation** - $499 (3-4 hours, in-person in Avalon)
Comprehensive business analysis with a customized AI roadmap, ROI projections, and 90 days of support. Perfect for businesses ready for a complete AI strategy.

What type of business do you run? I can recommend which option would give you the best ROI!`;
  } else if (lastMessage.includes('service') || lastMessage.includes('offer') || lastMessage.includes('what') || lastMessage.includes('do you')) {
    response = `Great question! Small AI (run by Mark Collis) helps small businesses implement practical AI solutions. Here's what we offer:

🎓 **Online Tutorial** ($99) - Learn AI fundamentals and practical tools
⚡ **Purpose Built Agent** ($299) - Get a custom AI solution built for your specific needs
🔍 **AI Audit & Consultation** ($499) - In-person strategy and implementation roadmap

Mark has years of experience in advertising and telecoms, so he understands real business challenges - not just the tech side.

**Our approach:** No complicated jargon. Just practical solutions that save you time and money. Plus, you get ongoing support with every service.

What kind of business are you in? That'll help me point you toward the best option!`;
  } else if (lastMessage.includes('workshop') || lastMessage.includes('tutorial') || lastMessage.includes('basics') || lastMessage.includes('learn')) {
    response = `The **Online Tutorial** ($99, 2 hours online) is perfect for business owners who want to understand AI without the technical overwhelm.

Here's what you'll get:
✓ Clear introduction to AI and how it actually works
✓ Hands-on demo of ChatGPT, Claude, and DeepSeek
✓ Real examples from businesses like yours
✓ Live Q&A with Mark (not a recorded webinar!)
✓ Resource pack with templates and guides
✓ 30 days of email support for questions

You'll walk away knowing exactly how to use AI tools to save time on tasks like content writing, customer emails, social media, research, and more.

Ready to book? Just click "Book Free Consultation" to chat with Mark first, or use "Pay Now" for immediate access!`;
  } else if (lastMessage.includes('agent') || lastMessage.includes('custom') || lastMessage.includes('build')) {
    response = `The **Purpose Built Agent** ($299) is one of our most popular services! Here's how it works:

Mark will build a custom AI agent specifically for YOUR business challenge. This isn't a generic chatbot - it's tailored to your exact needs.

**Examples of what Mark has built:**
• Restaurant chatbot that handles reservations and FAQs 24/7
• Content creation agent for social media posts and blogs
• Customer service assistant trained on your products/services
• Data analysis tool that turns spreadsheets into insights
• Email automation that handles routine customer responses

**What's included:**
✓ In-depth consultation about your specific pain points
✓ Custom agent designed and built for you
✓ Training on how to use and optimize it
✓ Plain English instructions (no tech jargon!)
✓ 60 days of support to refine and improve it

Tell me about your business - what's taking up too much of your time? I can help you figure out if a custom agent would help!`;
  } else if (lastMessage.includes('audit') || lastMessage.includes('consultation') || lastMessage.includes('in-person') || lastMessage.includes('strategy') || lastMessage.includes('$499')) {
    response = `The **AI Audit & Consultation** ($499, 3-4 hours in-person) is Mark's most comprehensive service. Here's what makes it valuable:

Mark visits your business in person (Avalon area) to:
✓ Analyze your complete business processes
✓ Identify where AI can save you time and money
✓ Create a custom implementation roadmap
✓ Provide ROI projections and realistic timelines
✓ Recommend specific tools and vendors
✓ Give you a professional written report

Plus, you get **90 days of follow-up support** as you implement the recommendations.

**Perfect for businesses that:**
• Want a complete AI strategy, not just one tool
• Are ready to invest in long-term efficiency
• Need help prioritizing what to implement first
• Want expert guidance through the whole process

Most clients see significant cost savings within the first few months. Want to discuss your specific business situation?`;
  } else if (lastMessage.includes('mark') || lastMessage.includes('who') || lastMessage.includes('about you')) {
    response = `Great question! Mark Collis runs Small AI and has extensive experience in advertising and telecommunications. He's based in Avalon and specializes in making AI accessible to local small businesses.

**Mark's philosophy:** "AI doesn't have to be complicated or expensive. The best AI solutions are the ones that solve real problems and pay for themselves quickly."

**What makes Mark different:**
• He focuses on practical solutions, not buzzwords
• Speaks in plain English, not tech jargon
• Provides ongoing support (not just a one-and-done service)
• Local to the area - you can meet in person
• Has helped 500+ small businesses
• 100% client satisfaction rate

**His background** in advertising and telecoms means he understands both the business side AND the technology side. He knows what actually works in real-world business operations.

Want to have a free 30-minute consultation with Mark? Just click "Book Free Consultation" at the top!`;
  } else if (lastMessage.includes('book') || lastMessage.includes('schedule') || lastMessage.includes('appointment') || lastMessage.includes('meeting')) {
    response = `Easy! Here's how to get started with Mark:

**Free 30-Minute Consultation:**
Click the yellow "Book Free Consultation" button at the top of the page. This is a great way to discuss your business needs and figure out which service is right for you.

**Ready to purchase a service?**
Use the "Pay Now" button on any service card for immediate access to:
• Online Tutorial ($99) - instant access after payment
• Purpose Built Agent ($299) - Mark will reach out to schedule
• AI Audit & Consultation ($499) - Schedule your in-person visit

**Questions first?**
You can also email info@small-ai.com or visit the Contact page. Mark responds within 24 hours.

What works best for you - free consultation first, or ready to dive in with a specific service?`;
  } else {
    response = `Hi! I'm the AI assistant for Small AI, run by Mark Collis here in Avalon. I help small business owners like you discover how AI can save time, cut costs, and help you stay competitive.

**I can help you with:**
💬 Understanding which AI service is right for your business
💰 Pricing and ROI information
📚 Details about our tutorials, custom agents, and consulting
📅 Booking a free consultation with Mark
🎯 Specific ways AI can solve your business challenges

**Quick intro to our services:**
• **$99** - Online Tutorial (learn the basics)
• **$299** - Custom AI Agent (built just for you)
• **$499** - In-Person AI Audit (complete strategy)

What brings you here today? Tell me about your business and what challenges you're facing!`;
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
