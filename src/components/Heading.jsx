export default function Heading({ children, level = 2, className = "" }) {
  const baseStyles = "text-[var(--color-text-primary)] tracking-tight";
  
  const variants = {
    1: "text-4xl font-bold mb-6",
    2: "text-2xl font-semibold mb-4",
    3: "text-xl font-medium mb-3",
  };

  const Tag = `h${level}`;
  const variantStyles = variants[level] || variants[2];

  return (
    <Tag className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Tag>
  );
}
