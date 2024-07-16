interface Props {
  id: string;
  name: string;
  optionList: string[];
}

export default function FilterSelect({ id, name, optionList }: Props) {
  return (
    <div className="px-[20px] py-[15px] rounded-[5px] shadow-md bg-white">
      <label htmlFor={id} className="screen_out">
        select region
      </label>
      <select name={name} id={id}>
        {optionList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
