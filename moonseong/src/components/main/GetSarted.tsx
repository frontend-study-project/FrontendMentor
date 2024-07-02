import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const GetSarted = (props: Props) => 
  <button 
    className={`text-white bg-sub-color hover:bg-sub-color-over px-7 py-3 rounded-full transition-colors`}
    {...props}>Get Started</button>

export default GetSarted;