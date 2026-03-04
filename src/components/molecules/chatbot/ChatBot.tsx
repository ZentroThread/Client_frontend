import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Send, Bot, Loader2 } from "lucide-react";
import { RAG_BASE_URL } from "@/constants/constdata";
import { API_ENDPOINTS } from "@/constants/api.constants";

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

const CHAT_STORAGE_KEY = "fabriq_chat_messages";

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
  } catch (error) {
    console.error("Failed to load chat history:", error);
  }

  return [
    {
      id: "welcome",
      text: "Hello! I'm your Fabriq AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ];
};

function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>(getInitialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const user = useState("dummyUser")[0];

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (!user) {
      localStorage.removeItem(CHAT_STORAGE_KEY);
      setMessages([
        {
          id: "welcome",
          text: "Hello! I'm your Fabriq AI assistant. How can I help you today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(`${RAG_BASE_URL}${API_ENDPOINTS.RAG.CHAT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.answer,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please make sure the AI service is running and try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Chat Window */}
      <div
        className="
          fixed right-0 top-0 h-full w-full sm:w-[450px]
          bg-[var(--surface)]
          shadow-2xl
          z-[9999]
          flex flex-col
          border-l border-[var(--border-soft)]
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-soft)] bg-[var(--surface-elevated)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)] flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                Fabriq AI Assistant
              </h2>
              <p className="text-xs text-[var(--text-secondary)]">
                Always here to help
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-[var(--bg-muted)] rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--bg-muted)]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-[var(--brand-primary)] text-white"
                    : "bg-[var(--surface-elevated)] border border-[var(--border-soft)] text-[var(--text-primary)]"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap break-words">
                  {message.text}
                </p>

                <p
                  className={`text-xs mt-1 ${
                    message.sender === "user"
                      ? "text-white opacity-70"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-soft)] rounded-2xl px-4 py-3">
                <Loader2 className="w-5 h-5 text-[var(--brand-primary)] animate-spin" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[var(--border-soft)] bg-[var(--surface-elevated)]">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="
                flex-1 px-4 py-3 rounded-xl
                border border-[var(--border-soft)]
                bg-[var(--bg-primary)]
                text-[var(--text-primary)]
                placeholder:text-[var(--text-secondary)]
                focus:outline-none
                focus:border-[var(--brand-primary)]
                transition-colors
                disabled:opacity-50
              "
            />

            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className="
                px-4 py-3
                bg-[var(--brand-primary)]
                hover:bg-[var(--brand-secondary)]
                text-white
                rounded-xl
                transition-colors
                disabled:opacity-50
                disabled:cursor-not-allowed
                flex items-center justify-center
                min-w-[50px]
              "
              aria-label="Send message"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

export default ChatBot;