function H1({ children }) {
  return (
    <div className="py-2">
      <div className="text-center border-b-[1px] dark:border-b-secondary-dark border-b-secondary-light">
        <h1 className="text-3xl">{children}</h1>
      </div>
    </div>
  );
}

export default H1;
