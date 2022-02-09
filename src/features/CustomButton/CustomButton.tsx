import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant: "primary" | "secondary";
  children:string
}

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`${variant}-btn`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
