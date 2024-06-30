import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const AuthButton = ({ children, ...props }: Props) => 
  <button className="font-bold text-main-color h-10 w-28 hover:text-white hover:bg-sub-color-over transition-all rounded-full" 
    {...props}>{children}</button>

export default AuthButton;