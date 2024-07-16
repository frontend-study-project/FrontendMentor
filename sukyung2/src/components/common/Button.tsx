interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string;
}

export default function Button({ children, addClass, ...rest }: Props) {
  return (
    <button
      className={`px-[30px] py-[12px] shadow-md rounded-[5px] bg-white ${addClass}`}
      style={{ padding: '12px 30px' }}
      {...rest}
    >
      {children}
    </button>
  );
}
