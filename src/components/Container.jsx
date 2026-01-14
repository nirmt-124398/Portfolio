export default function Container({ children, className = "" }) {
  return (
    <div className={`container-main mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}