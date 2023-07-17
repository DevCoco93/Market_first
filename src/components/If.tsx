type PropsType = {
  children: JSX.Element;
  condition: any;
};

const If: React.FC<PropsType> = ({ children, condition }: PropsType): JSX.Element | null => {
  return condition ? children : null;
};

export default If;
