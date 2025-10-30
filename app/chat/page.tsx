import ChatInterface from '@/app/components/chat-interface';

export const metadata = {
  title: 'AI Chat Assistant | small-ai',
  description: 'Chat with our AI assistant to learn about our services and get quotes for your business.',
};

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] py-20">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Chat <span style={{ color: '#c96a3b' }}>Assistant</span>
          </h1>
          <p className="text-xl text-[#BDBDBD]">
            Ask me anything about AI services, get personalized recommendations, or request a quote for your business.
          </p>
        </div>

        <ChatInterface />
      </div>
    </div>
  );
}
