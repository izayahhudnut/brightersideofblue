import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

interface ButtonProps {
  text?: string; // Optional for cases with children
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  as?: "button" | "a"; // Allows rendering as a link
  href?: string; // Link URL for 'a'
  target?: string; // Target for external links
  rel?: string; // Rel for external links
  className?: string; // To accept custom styles
  disabled?: boolean; // Optional for buttons
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>; // Add onClick prop
}

export default function Button({
  text,
  children,
  size = "medium",
  as = "button",
  href,
  target,
  rel,
  className = "",
  disabled,
  onClick,
}: ButtonProps) {
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  const commonClasses = `${plusJakartaSans.className} ${sizeClasses[size]} bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 hover:-translate-y-0.5 active:translate-y-0.5 ${className}`;

  if (as === "a") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick} // Forward onClick here if needed
        className={commonClasses}
        role="button"
      >
        {text || children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses} disabled={disabled}>
      {text || children}
    </button>
  );
}
