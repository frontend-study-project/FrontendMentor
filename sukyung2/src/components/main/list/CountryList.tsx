import { Link } from 'react-router-dom';

export default function CountryList({ countries, isLoading }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <strong className="screen_out">country list</strong>
      <ul className="flex flex-wrap justify-between gap-[75px]">
        {countries.map((item) => (
          <li
            key={item.cca2}
            className={`mt-[70px] rounded-[10px] shadow-md dark:bg-dark-blue dark:text-very-light-gray`}
          >
            <Link
              to={`/detail/${item.name.official}`}
              className="overflow-hidden block w-[264px] rounded-[10px]"
            >
              <img src={item.flags.png} alt="" className="w-full h-[160px]" />
              <div className="p-[25px]">
                <strong className="block pb-[15px] font-bold text-[18px]">
                  {item.name.official}
                </strong>
                <div>
                  <span className="inline-block pb-[10px] font-semibold">
                    Population: {item.population}
                  </span>
                </div>
                <div>
                  <span className="inline-block pb-[10px] font-semibold">
                    Region:
                  </span>{' '}
                  {item.region}
                </div>
                <div>
                  <span className="inline-block pb-[10px] font-semibold">
                    Captial:
                  </span>{' '}
                  {item.capital}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
