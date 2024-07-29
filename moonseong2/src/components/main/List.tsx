import { Link } from "react-router-dom";
import Paragraph from "../common/Paragraph";
import { Country } from "../../types/country.type";

interface ItemProps extends Country {

}

const Item = ({ id, name, population, region, capital, flag }: ItemProps) => {
  return (
    <Link to={`/${id}`} className="h-[332px] rounded-md bg-dark-mode-100 overflow-hidden shadow-md">
      <div className="h-40 overflow-hidden">
        <img className="w-full h-full object-cover" src={flag} />
      </div>
      <div className="px-6 pt-8">
        <h3 className="text-white text-base mb-4 font-semibold">{name}</h3>
        <div className="flex flex-col gap-1">
          <Paragraph label="Population">{population.toLocaleString()}</Paragraph>
          <Paragraph label="Region">{region}</Paragraph>
          <Paragraph label="Captial">{capital}</Paragraph>
        </div>
      </div>
    </Link>
  )
};

interface ListProps {
  data: Country[];
}
 
const List = ({ data }: ListProps) => {
  return (
    <div className="grid grid-cols-4 gap-20">
      {data.map((country) => (
        <Item key={country.id} {...country} />
      ))}
    </div>
  );
}
 
export default List;