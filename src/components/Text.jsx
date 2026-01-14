export default function Text({ children, className = "", variant = "default", as = "p" }) {
  const Component = as;
  
  const variants = {
    default: "text-[var(--color-text-primary)]",
    muted: "text-[var(--color-text-secondary)]",
  };

  return (
    <Component 
      className={`leading-relaxed ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </Component>
  );
}
