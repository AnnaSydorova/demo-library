declare module "@anna_sydorova/demo-icon" {
  import React from "react";

  interface IconProps {
    name: string;
    size?: number;
    color?: string;
  }

  const Icon: React.FC<IconProps>;

  export default Icon;
}
