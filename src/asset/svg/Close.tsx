import { OnClick } from "../../interface";

export default function Close({
  onClick,
  className,
}: {
  onClick: OnClick;
  className?: string;
}) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        d="M16 14.6669L20.6669 10L22 11.3331L17.3331 16L22 20.6669L20.6669 22L16 17.3331L11.3331 22L10 20.6669L14.6669 16L10 11.3331L11.3331 10L16 14.6669Z"
        fill="#2D3748"
      />
    </svg>
  );
}
