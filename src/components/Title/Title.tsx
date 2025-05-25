export interface TitleProps {
  size: "small" | "medium" | "large";
  label?: string;
}
export const Title = ({ size = "medium", label, ...props }: TitleProps) => {
  const baseStyle = "color-[#343A3F]";

  const sizeStyles = {
    small: "w-[16px] h-[16px]", // 추가 수정 필요
    medium: "w-[37px] h-[20px] text-[14px]",
    large: "w-[32px] h-[32px]" // 추가 수정 필요
  };

  return (
    <p className={`${baseStyle} ${sizeStyles[size]}`} {...props}>
      {label}
    </p>
  );
};
