import Button from '../common/Button';
import LeftArrowIcon from '../icons/leftArrow';

export default function UtilButtonBox() {
  return (
    <Button addClass="flex items-center my-[80px]">
      <span className="mr-[6px]">
        <LeftArrowIcon />
      </span>
      Back
    </Button>
  );
}
