import { useState } from "react";
import { useFetchLink } from "../../hooks/useLink";

interface Props {
  url: string;
}

const Result = ({ url }: Props) => {
  const [copied, setCopyied] = useState(false);
  const { data, isLoading } = useFetchLink(url);

  if (isLoading || !data) return null;

  const handleClick = () => {
    setCopyied(true);
    navigator.clipboard.writeText(data.shortedUrl);
  };

  return (
    <div className="mt-8 flex flex-col gap-7">
      <div className="flex justify-between items-center bg-white rounded-md py-4 px-8">
        <span className="flex items-center ">{url}</span>
        <div className="flex gap-5">
          <span className="flex items-center text-sub-color">{data.shortedUrl}</span>
          <button 
            className={`w-24 h-10 text-[14px] text-white rounded-md transition-all ${copied ? 'bg-slate-600 hover:bg-slate-600' : 'bg-sub-color hover:bg-sub-color-over'}`}
            onClick={handleClick}
          >{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  )
};

export default Result;