import SearchIcon from '../../icons/search';

export default function SearchInput() {
  return (
    <div className="flex w-full max-w-[480px] px-[30px] py-[15px] rounded-[5px] shadow-md bg-white">
      <label htmlFor="country" className="mr-[18px]">
        <SearchIcon color="hsl(0, 0%, 52%)" />
      </label>
      <input
        id="country"
        className="grow"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
