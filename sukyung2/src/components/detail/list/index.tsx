import ShadowBox from './ShadowBox';
import BoldText from './BoldText';

export default function DetailContent() {
  return (
    <div className="flex items-center">
      <img
        src=""
        alt=""
        width={560}
        height={400}
        className="mr-[120px] bg-dark-blue"
      />
      <div className="inline-block flex-grow">
        <strong className="block pb-[40px] font-extrabold text-[25px]">
          country
        </strong>
        <ul className="flex flex-col flex-wrap w-full h-[160px]">
          <BoldText>Native Name:</BoldText>
          <BoldText>Population:</BoldText>
          <BoldText>Region:</BoldText>
          <BoldText>Sub Region:</BoldText>
          <BoldText>Capital:</BoldText>
          <BoldText>Top Level Domain:</BoldText>
          <BoldText>Currencies:</BoldText>
          <BoldText>Languages:</BoldText>
        </ul>
        <div>
          <strong className="mr-[15px] font-semibold text-[16px]">
            Border Countries:
          </strong>
          <ul className="inline-block">
            <ShadowBox>Country</ShadowBox>
            <ShadowBox>Country1</ShadowBox>
            <ShadowBox>Country1</ShadowBox>
          </ul>
        </div>
      </div>
    </div>
  );
}
