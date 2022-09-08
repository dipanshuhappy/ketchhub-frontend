import * as React from "react";
import { SVGProps } from "react";

const PostIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 0v2H0V0h18Zm-6 6h6V4h-6v2Zm0 4h6V8h-6v2Zm0 4h6v-2h-6v2ZM0 18h18v-2H0v2ZM10 4H0v10h10V4Z"
      fill="#F5987E"
    />
  </svg>
);

export default PostIcon;
