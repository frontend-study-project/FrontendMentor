import { Link } from 'react-router-dom';

const Item = ({ data }) => {
  return (
    <ul>
      {data?.map((c) => (
        <li key={c.cca2}>
          <img src={c.flags.png} alt={c.flags.alt} />
          <h2>{c.name.common}</h2>
          <div>
            <p>Population: {c.population}</p>
            <p>Region: {c.region}</p>
            <p>Capital: {c.capital}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Item;
