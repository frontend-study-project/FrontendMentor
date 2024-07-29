import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "../type";
import { useState } from "react";

const Links = () => {
  const links: Link[] = useSelector((state: RootState) => state.data.links);
  const [copied, setCopied] = useState<number>(-1);

  const handleCopy = (idx: number) => {
    navigator.clipboard.writeText(links[idx].shortUrl);
    setCopied(idx);
  };

  return (
    <section className="pt-7 bg-cl-grayish-violet-light">
      <div className="container flex flex-col gap-5 mx-auto">
        {
          links.map((link, key) => (
            <div key={key} className="flex items-center justify-between gap-6 py-6 bg-white rounded-lg px-7">
              <span className="text-xl">{link.longUrl}</span>
              <div className="flex items-center gap-6">
                <span className="text-xl text-cl-cyan">{link.shortUrl}</span>
                <button className={`w-32 py-4 font-bold text-white rounded-lg ${copied === key ? "bg-cl-dark-violet" : "bg-cl-cyan hover:bg-cl-cyan-hover"}`} onClick={() => handleCopy(key)}>
                  {copied === key ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Links;
