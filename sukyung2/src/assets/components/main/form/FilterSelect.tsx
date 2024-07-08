interface Props {
  id: string;
  name: string;
  optionList: string[];
}

export default function FilterSelect({ id, name, optionList }: Props) {
  return (
    <div>
      <label htmlFor={id} className="screen_out"></label>
      <select name={name} id={id}>
        {optionList.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
