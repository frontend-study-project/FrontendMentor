import { Link } from 'react-router-dom';

export default function CountryList() {
  return (
    <>
      <strong className="screen_out">country list</strong>
      <ul className="flex flex-wrap">
        {Array.from({ length: 16 }).map((_, idx) => (
          <li
            key={`country${idx}`}
            className={`${idx % 4 === 0 ? '' : 'ml-[75px]'} mt-[70px] rounded-[10px] shadow-md`}
          >
            <Link
              to={'/'}
              className="overflow-hidden block w-[254px] rounded-[10px]"
            >
              <img src="" alt="" className="h-[160px] bg-l-very-dark-blue" />
              <div className="p-[25px]">
                <strong className="block pb-[15px] font-bold text-[18px]">
                  나라이름
                </strong>
                <div>
                  <span className="block pb-[10px] font-semibold">
                    Population:
                  </span>
                </div>
                <div>
                  <span className="block pb-[10px] font-semibold">Region:</span>
                </div>
                <div>
                  <span className="block pb-[10px] font-semibold">
                    Captial:
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
