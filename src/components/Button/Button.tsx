import { PropsWithChildren, useMemo } from "react";

type ButtonVariant = "detault" | "outlined" | "link";
type ButtonProps = PropsWithChildren & {
  onClick: () => void;
  variant?: ButtonVariant;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  onClick,
  className,
}) => {
  // style for each variant
  const style = useMemo(() => {
    switch (variant) {
      case "outlined":
        return "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300";
      case "link":
        return "text-blue-700 hover:text-blue-900 transition-all duration-300";
      default:
        return "text-white bg-blue-700 hover:bg-blue-900 transition-all duration-300";
    }
  }, [variant]);

  return (
    <button
      className={`${style} rounded-lg px-5 py-2.5 text-sm font-medium ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
