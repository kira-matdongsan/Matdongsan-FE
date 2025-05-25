export interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "small" | "large";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  variant = "primary",
  label,
  size = "large",
  ...props
}: ButtonProps) => {
  const baseStyles = "w-[345px] h-[48px] py-12 px-8 rounded-lg";

  const variants = {
    primary: "bg-[#47B7E5] text-white",
    secondary: "bg-gray-200 text-gray-500 hover:bg-gray-700"
  };

  const sizeStyles = {
    small: "h-[40px] py-[10px] text-sm",
    large: "h-[56px] py-[16px] text-base"
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant]} ${sizeStyles[size]}`}
      {...props}
    >
      {label}
    </button>
  );
};
