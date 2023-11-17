const StepCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className="bg-default mt-10 rounded-md p-4 shadow-xl sm:p-8">{props.children}</div>;
};

export { StepCard };
