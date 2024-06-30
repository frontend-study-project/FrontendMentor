import Search from "./Search";
import Brand from '../../assets/icon-brand-recognition.svg';
import Detailed from '../../assets/icon-detailed-records.svg';
import Fully from '../../assets/icon-fully-customizable.svg';
import Result from "./Result";
import { Suspense, useState } from "react";
import Loading from "./Loading";

interface StatisticsItem {
  title: string;
  src: string;
  children: React.ReactNode;
}

const StatisticsItem = ({ title, children, src }: StatisticsItem) => 
  <div className="px-7 pb-11">
    <div className="w-[88px] h-[88px] bg-purple-1 flex justify-center items-center rounded-full translate-y-[-44px]">
      <img className="block" src={src} />
    </div>
    <h3 className="text-xl font-bold mb-6">{title}</h3>
    <p className="font-[14px] text-main-color leading-6">{children}</p>
  </div>

const Statistics = () => {
  const [url, setUrl] = useState('');

  return (
    <div className="bg-gray-200 pb-60">
      <div className="w-[1100px] mx-auto relative">
        <div className="translate-y-[-82px]">
          <Search onSubmit={(search) => setUrl(search)} />
          <Suspense fallback={<Loading />}>
            <Result url={url} />
          </Suspense>
        </div>

        <div className="mt-10">
          <h3 className="text-4xl font-bold mb-8 text-center">Advanced Statistics</h3>
          <p className="text-main-color text-[18px] leading-8 text-center">
            Track how your links are performing acroos the web with<br />
            our advanced statistics dashboard.
          </p>

          <div className="flex justify-between gap-8 mt-20 before:content-[''] before:h-[8px] before:w-full before:bg-sub-color before:absolute before:translate-y-[160px]">
            <div className="translate-y-0 bg-white rounded-md">
              <StatisticsItem title="Brand Recognition" src={Brand}>
                Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
              </StatisticsItem>
            </div>
            <div className="translate-y-11 bg-white rounded-md">
              <StatisticsItem title="Detailed Records" src={Detailed}>
                Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
              </StatisticsItem>
            </div>
            <div className="translate-y-[88px] bg-white rounded-md">
              <StatisticsItem title="Fully Customizable" src={Fully}>
                Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
              </StatisticsItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Statistics;