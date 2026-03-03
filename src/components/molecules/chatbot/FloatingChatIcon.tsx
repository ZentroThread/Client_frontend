import { MessageCircle } from "lucide-react";
import { createPortal } from "react-dom";

interface FloatingChatIconProps {
  onClick: () => void;
  isVisible: boolean;
}

function FloatingChatIcon({ onClick, isVisible }: FloatingChatIconProps) {
  if (!isVisible) return null;

  return createPortal(
    <button
      onClick={onClick}
      className="
        fixed bottom-6 right-6 z-[9997]
        w-16 h-16
        bg-[var(--brand-primary)]
        hover:bg-[var(--brand-secondary)]
        text-white
        rounded-full
        shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110
        group
      "
      aria-label="Open AI Chat Assistant"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />

      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[var(--brand-primary)] animate-ping opacity-20"></span>
    </button>,
    document.body
  );
}

export default FloatingChatIcon;