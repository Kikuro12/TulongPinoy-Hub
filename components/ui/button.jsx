export function Button({ children, className, size }) {
  return (
    <button className={`px-4 py-2 rounded-xl ${className}`}>
      {children}
    </button>
  );
}