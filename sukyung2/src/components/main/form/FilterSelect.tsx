import { useEffect, useRef, useState } from 'react';

export default function FilterSelect({
  countries,
  setFilterSelect,
  setSearchInput,
}) {
  const [optionList, setOptionList] = useState(new Set(['Filter By Region']));
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current && countries) {
      setOptionList((prev) => {
        const newSet = new Set(prev);
        countries.forEach((country) => {
          newSet.add(country.region);
        });
        return newSet;
      });
      isInitialMount.current = false;
    }
  }, [countries]);

  const handleFilterOptionClick = (event) => {
    setFilterSelect(event.target.value);
    setSearchInput('');
  };
  return (
    <div className="md:max-w-[248px] max-h-[54px] md:mt-[50px] px-[20px] py-[15px] rounded-[5px] shadow-md bg-white dark:bg-dark-blue dark:text-very-light-gray">
      <label htmlFor="filterRegion" className="screen_out">
        select region
      </label>
      <select
        name="region"
        id="filterRegion"
        onChange={handleFilterOptionClick}
        className="dark:bg-dark-blue"
      >
        {[...optionList].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
