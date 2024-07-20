import { useEffect, useRef, useState } from 'react';

export default function FilterSelect({ countries }) {
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
  console.log(optionList);
  return (
    <div className="px-[20px] py-[15px] rounded-[5px] shadow-md bg-white">
      <label htmlFor="filterRegion" className="screen_out">
        select region
      </label>
      <select name="region" id="filterRegion">
        {[...optionList].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
