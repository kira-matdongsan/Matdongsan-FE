export interface Iconprops {
  size: "small" | "medium" | "large";
  img?: string;
  onClick?: () => void;
}

export const Icon = ({ size = "medium", img, ...props }: Iconprops) => {
  const sizeStyles = {
    small: "w-[16px] h-[16px]",
    medium: "w-[24px] h-[24px]",
    large: "w-[32px] h-[32px]"
  };

  return (
    <button
      type="button"
      {...props}
      className="flex items-center justify-center"
    >
      {img && <img src={img} alt="icon" className={`${sizeStyles[size]}`} />}
    </button>
  );
};
