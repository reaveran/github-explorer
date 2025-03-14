import { PropsWithChildren, useMemo } from "react";

type TypographyVariant = "paragraph" | "h1" | "h2" | "small";

type TypographyProps = PropsWithChildren & {
  className?: string;
  variant?: TypographyVariant;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "paragraph",
  className = "",
}) => {
  // style for each variant
  const style = useMemo(() => {
    switch (variant) {
      case "h1":
        return "text-xl font-bold";
      case "h2":
        return "text-l font-semibold";
      case "small":
        return "text-sm";
      default:
        return "text-base text-gray-700";
    }
  }, [variant]);

  return <p className={`${style} ${className}`}>{children}</p>;
};

export default Typography;
