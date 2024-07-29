import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-assets-icons'
import { useState } from "react";

interface FilterProps {
  filter: string;
  onFilter: (region: string) => void;
}
 
const Filter= ({ filter, onFilter }: FilterProps) => {
  const [visible, setVisible] = useState(false);

  const handleClick = (region: string) => {
    onFilter(region);
    setVisible(false);
  };

  return (
    <div className="h-full w-52 bg-dark-mode-100 rounded-md shadow-md text-gray-300">
      <div 
        className="flex items-center justify-between px-6 cursor-pointer w-full h-full"
        onClick={() => setVisible((prev) => !prev)}
      >
        <span>
          {filter || 'Filter by Region'}
        </span>
        {visible ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        
      </div>
      {visible && (
        <ul className="mt-1 text-sm bg-dark-mode-100 rounded-md shadow-md py-3">
          {['Africa', 'America', 'Asia', 'Europe', 'Oceania'].map((region) => (
            <li 
              className="cursor-pointer px-6 py-1 transition-colors hover:bg-dark-mode-900"
              key={region} 
              onClick={() => handleClick(region)}
            >{region}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
 
export default Filter;