import { useState } from "react";

interface Props {
  onSubmit: (search: string) => void;
}

const Search = ({ onSubmit }: Props) => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);

  const handleChange: React.ChangeEventHandler = (e) => {
    const { value } = (e.target as HTMLInputElement);
    setSearch(value);
    setError(!value);
  };

  const handleClick = () => {
    setError(!search);

    if (!search) return;

    onSubmit(search);
  };

  return (
    <div className={`relative w-[1100px] h-[165px] mx-auto rounded-lg bg-[url('/images/bg-shorten-desktop.svg')] bg-no-repeat flex items-center justify-center flex-col px-16 bg-purple-1`}>
      <div className="w-full h-[65px] flex gap-6">
        <div className={`h-full bg-white flex-1 rounded-lg flex items-center py-5 px-7 transition-colors ${error ? 'border-red-600 border-solid border-2' : undefined}`}>
          <input 
            className="w-full text-xl text-gray-500 placeholder:text-gray-400 outline-none" 
            placeholder="Shorten a link here..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <button 
          className="w-[187px] h-full bg-sub-color hover:bg-sub-color-over text-white rounded-lg text-xl font-semibold transition-colors"
          onClick={handleClick}
        >Shorten It!</button>
      </div>
      {error && <div className="w-full italic text-red-600 text-[14px] absolute bottom-6 left-16">Please add a link</div>}
    </div>
  )
};

export default Search;