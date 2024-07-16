import BorderCountriesItem from './BorderCountriesItem';
import DetailListItem from './DetailListItem';

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
          <DetailListItem>Native Name:</DetailListItem>
          <DetailListItem>Population:</DetailListItem>
          <DetailListItem>Region:</DetailListItem>
          <DetailListItem>Sub Region:</DetailListItem>
          <DetailListItem>Capital:</DetailListItem>
          <DetailListItem>Top Level Domain:</DetailListItem>
          <DetailListItem>Currencies:</DetailListItem>
          <DetailListItem>Languages:</DetailListItem>
        </ul>
        <div>
          <strong className="mr-[15px] font-semibold text-[16px]">
            Border Countries:
          </strong>
          <ul className="inline-block">
            <BorderCountriesItem>Country</BorderCountriesItem>
            <BorderCountriesItem>Country1</BorderCountriesItem>
            <BorderCountriesItem>Country1</BorderCountriesItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
