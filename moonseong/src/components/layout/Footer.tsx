import GetSarted from "../main/GetSarted";
import FooterNav from "./FooterNav";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer>
      <div className="font-bold bg-[url('/images/bg-boost-desktop.svg')] bg-no-repeat bg-center py-[60px] bg-purple-1 flex flex-col items-center gap-4">
        <h2 className="text-white text-[44px]">Boost your links todday</h2>
        <GetSarted />
      </div>
      <div className="bg-black-100 py-20">
        <div className="w-[1100px] flex mx-auto">
          <div className="w-4/12 text-white font-[600] text-3xl">Shortly</div>
          <div className="flex w-8/12 justify-between">
            <FooterNav />
            <div className="icons flex gap-5">
              {['facebook', 'twitter', 'pinterest', 'instagram'].map((name) => (
                <Icon key={name} src={`/images/icon-${name}.svg`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;