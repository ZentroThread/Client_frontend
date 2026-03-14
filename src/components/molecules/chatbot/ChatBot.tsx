import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Send, Bot, Loader2, MessageCircle } from "lucide-react";
import { API_BASE_URL } from "@/constants/constdata";
import { API_ENDPOINTS } from "@/constants/api.constants";


const WHATSAPP_NUMBER = "94XXXXXXXXX"; 
const WHATSAPP_DEFAULT_MSG = "Hi! I need help with Fabriq.";
const CHAT_STORAGE_KEY = "fabriq_chat_messages";

type Channel = "ai" | "whatsapp";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}


const getInitialMessages = (): Message[] => {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.map((msg: Message) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      }));
    }
  } catch {
    
  }
  return [
    {
      id: "welcome",
      text: "Hi there! 👋 Welcome to Fabriq. I'm your AI assistant — ask me anything about our products, orders, or services.",
      sender: "bot",
      timestamp: new Date(),
    },
  ];
};

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function WhatsAppIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-(--surface-elevated) border border-(--border-soft) rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 bg-(--text-secondary) rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s`, animationDuration: "1s" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function WhatsAppPanel({ onBack }: { onBack: () => void }) {
  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center gap-5 px-5 py-6 bg-(--bg-muted)">
      <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center">
        <WhatsAppIcon size={34} className="text-white" />
      </div>

      <div className="text-center">
        <h3 className="text-[15px] font-semibold text-(--text-primary) mb-1">
          Chat on WhatsApp
        </h3>
        <p className="text-sm text-(--text-secondary) leading-relaxed">
          Get real-time support from our team directly on WhatsApp.
        </p>
      </div>

      <div className="w-full grid grid-cols-2 gap-2">
        {[
          { label: "Typical reply time", value: "Under 5 mins ⚡" },
          { label: "Available hours", value: "Mon–Sat, 9–7 PM" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-(--surface-elevated) border border-(--border-soft) rounded-xl p-3"
          >
            <p className="text-xs text-(--text-secondary) mb-1">{label}</p>
            <p className="text-sm font-medium text-(--text-primary)">{value}</p>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col gap-2">
        <button
          onClick={openWhatsApp}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-white font-medium text-sm transition-colors"
        >
          <WhatsAppIcon size={17} />
          Open WhatsApp
        </button>
        <button
          onClick={onBack}
          className="w-full py-2.5 px-4 rounded-xl border border-(--border-soft) text-(--text-secondary) hover:bg-(--surface-elevated) text-sm transition-colors"
        >
          ← Back to AI Chat
        </button>
      </div>
    </div>
  );
}

function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [channel, setChannel] = useState<Channel>("ai");
  const [messages, setMessages] = useState<Message[]>(getInitialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && channel === "ai") {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, channel]);

  const addMessage = (text: string, sender: "user" | "bot") => {
    const msg: Message = {
      id: Date.now().toString() + Math.random(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, msg]);
  };

  const sendToApi = async (question: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.RAG.BACKEND_CHAT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) throw new Error("API error");
      const data = await response.json();
      addMessage(data.answer, "bot");
    } catch {
      addMessage(
        "Sorry, I encountered an error. Please try again or switch to WhatsApp for immediate support.",
        "bot"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (text?: string) => {
    const messageText = (text ?? inputValue).trim();
    if (!messageText || isLoading) return;
    addMessage(messageText, "user");
    setInputValue("");
    await sendToApi(messageText);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-9998 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="
          fixed bottom-6 right-6
          w-100 max-w-[calc(120vw-3rem)]
          bg-(--surface)
          rounded-2xl shadow-2xl
          z-9999
          flex flex-col
          overflow-hidden
          border border-(--border-soft)
        "
        style={{ maxHeight: "calc(100vh - 6rem)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a2e] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-(--brand-primary) flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white leading-tight">Fabriq Support</h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                <p className="text-[11px] text-white/60">Online · Replies instantly</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5 text-white/70" />
          </button>
        </div>

        {/* Channel Tab Bar */}
        <div className="flex gap-2 px-3 py-2 bg-(--surface-elevated) border-b border-(--border-soft) shrink-0">
          <button
            onClick={() => setChannel("ai")}
            className={`
              flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-colors
              ${channel === "ai"
                ? "bg-(--brand-primary) text-white"
                : "border border-(--border-soft) text-(--text-secondary) hover:bg-(--bg-muted)"
              }
            `}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            AI Chat
          </button>
          <button
            onClick={() => setChannel("whatsapp")}
            className={`
              flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-colors
              ${channel === "whatsapp"
                ? "bg-[#25D366] text-white"
                : "border border-[#25D366] text-[#25D366] hover:bg-[#f0faf8]"
              }
            `}
          >
            <WhatsAppIcon size={13} />
            WhatsApp
          </button>
        </div>

        {/* Panels */}
        {channel === "whatsapp" ? (
          <div className="overflow-y-auto">
            <WhatsAppPanel onBack={() => setChannel("ai")} />
          </div>
        ) : (
          <>
            {/* Messages — scrollable, bounded height */}
            <div
              className="overflow-y-auto px-4 py-3 space-y-3 bg-(--bg-muted)"
              style={{ minHeight: "200px", maxHeight: "320px" }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-(--brand-primary) flex items-center justify-center shrink-0 mr-2 mt-1">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div className="max-w-[78%]">
                    <div
                      className={`
                        rounded-2xl px-3.5 py-2 text-sm leading-relaxed
                        ${msg.sender === "user"
                          ? "bg-(--brand-primary) text-white rounded-br-sm"
                          : "bg-(--surface-elevated) border border-(--border-soft) text-(--text-primary) rounded-bl-sm"
                        }
                      `}
                    >
                      {msg.text}
                    </div>
                    <p
                      className={`text-[10px] mt-0.5 text-(--text-secondary) ${
                        msg.sender === "user" ? "text-right pr-1" : "pl-1"
                      }`}
                    >
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            

            {/* Input */}
            <div className="px-3 py-3 border-t border-(--border-soft) bg-(--surface-elevated) shrink-0">
              <div className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message…"
                  disabled={isLoading}
                  className="
                    flex-1 px-3.5 py-2 rounded-full text-sm
                    border border-(--border-soft)
                    bg-(--bg-primary)
                    text-(--text-primary)
                    placeholder:text-(--text-secondary)
                    focus:outline-none focus:border-(--brand-primary)
                    disabled:opacity-50
                    transition-colors
                  "
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim() || isLoading}
                  aria-label="Send"
                  className="
                    w-9 h-9 rounded-full shrink-0
                    bg-(--brand-primary) hover:bg-(--brand-secondary)
                    disabled:opacity-40 disabled:cursor-not-allowed
                    flex items-center justify-center
                    transition-colors
                  "
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 text-white animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>,
    document.body
  );
}

export default ChatBot;