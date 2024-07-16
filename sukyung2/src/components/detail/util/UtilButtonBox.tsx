import { Link } from 'react-router-dom';

import LeftArrowIcon from '../../icons/leftArrow';

export default function UtilButtonBox() {
  return (
    <Link
      to={'/'}
      className="inline-block my-[80px] px-[30px] py-[12px] shadow-md rounded-[5px] bg-white leading-[30px]"
    >
      <span className="inline-block mr-[6px] align-middle">
        <LeftArrowIcon />
      </span>
      Back
    </Link>
  );
}
