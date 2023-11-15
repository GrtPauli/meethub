const StepCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="bg-default shadow-xl mt-10 p-4 rounded-md sm:p-8">
      {props.children}
    </div>
  );
};

export { StepCard };
