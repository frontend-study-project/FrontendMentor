type Props = React.ImgHTMLAttributes<HTMLImageElement>;

const Icon = ({ ...props }: Props) => 
  <span className="w-6 h-6 flex items-center">
    <img className="block" {...props} />
  </span>

export default Icon;