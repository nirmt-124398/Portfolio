export default function Button({ children, href, onClick, className = "" }) {
  const baseStyles = "btn btn-primary";
  
  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
}
