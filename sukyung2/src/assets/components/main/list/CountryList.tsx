import { Link } from 'react-router-dom';

export default function CountryList() {
  return (
    <>
      <strong className="screen_out">country list</strong>
      <ul>
        <li>
          <Link to={'/'}>
            <img src="" alt="" />
            <strong>나라이름</strong>
            <div>
              <span>Population:</span>
            </div>
            <div>
              <span>Region:</span>
            </div>
            <div>
              <span>Captial:</span>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}
