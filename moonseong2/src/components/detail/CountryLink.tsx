import { Link } from "react-router-dom";

interface CountryLinkProps {
  to: string;
  children: React.ReactNode
}
 
const CountryLink = ({ to, children }: CountryLinkProps) => {
  return (
    <div className="bg-dark-mode-100 shadow-sm w-24 h-7 rounded-[4px] text-[12px] cursor-pointer">
      <Link className="w-full h-full flex items-center justify-center" to={to}>{children}</Link>
    </div>
  )
}
 
export default CountryLink;