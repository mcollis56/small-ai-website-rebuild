import Image from 'next/image';
import ChatInterface from '@/app/components/chat-interface';

export const metadata = {
  title: 'AI Chat Assistant | small-ai',
  description: 'Chat with our AI assistant to learn about our services and get quotes for your business.',
};

export default function ChatPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] py-20 overflow-hidden">
      {/* Decorative Chat Icon - top left */}
      <div className="absolute -left-8 top-12 opacity-20 pointer-events-none hidden lg:block">
        <div className="relative w-[333px] h-[333px]">
          <Image
            src="/images/icon_chat.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 333px"
            className="object-contain"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>

      {/* Decorative Chat Icon - bottom right */}
      <div className="absolute -right-4 bottom-8 opacity-15 pointer-events-none hidden lg:block">
        <div className="relative w-[250px] h-[250px]">
          <Image
            src="/images/icon_chat.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 250px"
            className="object-contain"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>

      <div className="relative z-10 container-custom max-w-4xl">
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
