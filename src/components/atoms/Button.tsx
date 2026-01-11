type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
    >
      {children}
    </button>
  );
}
