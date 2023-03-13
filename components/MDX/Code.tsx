type Props = {
  children: React.ReactNode;
};

const Code = (props: Props) => {
  return <code>{props.children}</code>;
};

export default Code;
