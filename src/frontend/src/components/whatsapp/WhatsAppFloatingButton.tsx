import { SiWhatsapp } from 'react-icons/si';

export default function WhatsAppFloatingButton() {
  const handleClick = () => {
    window.open('https://wa.me/918999844337', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-soft-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="h-7 w-7" />
    </button>
  );
}
