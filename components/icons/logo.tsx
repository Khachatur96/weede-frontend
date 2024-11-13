import { IconSvgProps } from "@/types";

export const Logo = ({ size = 36, width, height, ...props }: IconSvgProps) => (
  <svg
    className="!lg:w-[59px] !lg:h-[152px]  !w-[40px] !h-[103px] bg-red-500"
    fill="none"
    // height={size || height}
    viewBox="0 0 32 32"
    // width={size || width}
    {...props}
  >
    <path
      d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25.2c-6.188 0-11.2-5.012-11.2-11.2S9.812 4.8 16 4.8 27.2 9.812 27.2 16 22.188 27.2 16 27.2z"
      fill="currentColor"
    />
  </svg>
);
