import Link from "next/link";

export default function TopRightArrow({
  href = "",
  className = "",
  asDiv,
}: {
  href?: string;
  className?: string;
  asDiv?: boolean;
}) {
  return !asDiv ? (
    <Link
      href={href}
      className={`bg-wheat bg-opacity-5 size-[46px] rounded-full flex items-center justify-center border border-wheat/15 transition hover:bg-opacity-15 ${className}`}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.92188 0.5V7.8125C9.92188 7.92439 9.87743 8.03169 9.79831 8.11081C9.7192 8.18993 9.61189 8.23438 9.5 8.23438C9.38811 8.23438 9.28081 8.18993 9.20169 8.11081C9.12257 8.03169 9.07813 7.92439 9.07813 7.8125V1.51953L0.795314 9.79531C0.716992 9.87363 0.610766 9.91763 0.500002 9.91763C0.389238 9.91763 0.283011 9.87363 0.204689 9.79531C0.126368 9.71699 0.0823669 9.61076 0.0823669 9.5C0.0823669 9.38924 0.126368 9.28301 0.204689 9.20469L8.48047 0.921875H2.1875C2.07561 0.921875 1.96831 0.877427 1.88919 0.79831C1.81007 0.719194 1.76563 0.611888 1.76563 0.5C1.76563 0.388112 1.81007 0.280806 1.88919 0.201689C1.96831 0.122572 2.07561 0.078125 2.1875 0.078125H9.5C9.61189 0.078125 9.7192 0.122572 9.79831 0.201689C9.87743 0.280806 9.92188 0.388112 9.92188 0.5Z"
          fill="#DAC5A7"
        />
      </svg>
    </Link>
  ) : (
    <div
      className={`bg-wheat bg-opacity-5 size-[46px] rounded-full flex items-center justify-center border border-wheat/15 transition hover:bg-opacity-15 ${className}`}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.92188 0.5V7.8125C9.92188 7.92439 9.87743 8.03169 9.79831 8.11081C9.7192 8.18993 9.61189 8.23438 9.5 8.23438C9.38811 8.23438 9.28081 8.18993 9.20169 8.11081C9.12257 8.03169 9.07813 7.92439 9.07813 7.8125V1.51953L0.795314 9.79531C0.716992 9.87363 0.610766 9.91763 0.500002 9.91763C0.389238 9.91763 0.283011 9.87363 0.204689 9.79531C0.126368 9.71699 0.0823669 9.61076 0.0823669 9.5C0.0823669 9.38924 0.126368 9.28301 0.204689 9.20469L8.48047 0.921875H2.1875C2.07561 0.921875 1.96831 0.877427 1.88919 0.79831C1.81007 0.719194 1.76563 0.611888 1.76563 0.5C1.76563 0.388112 1.81007 0.280806 1.88919 0.201689C1.96831 0.122572 2.07561 0.078125 2.1875 0.078125H9.5C9.61189 0.078125 9.7192 0.122572 9.79831 0.201689C9.87743 0.280806 9.92188 0.388112 9.92188 0.5Z"
          fill="#DAC5A7"
        />
      </svg>
    </div>
  );
}
