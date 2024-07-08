import SearchIcon from '../../icons/search';

export default function SearchInput() {
  return (
    <div className="w-[480px]">
      <label htmlFor="country">
        <SearchIcon color="hsl(0, 0%, 52%)" />
      </label>
      <input id="country" type="text" placeholder="Search for a country..." />
    </div>
  );
}
