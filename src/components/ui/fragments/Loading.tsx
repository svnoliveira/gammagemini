export const Loading = () => {
  return (
    <div className="relative inline-block w-20 h-20">
      <div className="absolute left-2 w-4 bg-current animate-facebook [animation-delay:-0.24s]"></div>
      <div className="absolute left-8 w-4 bg-current animate-facebook [animation-delay:-0.12s]"></div>
      <div className="absolute left-14 w-4 bg-current animate-facebook"></div>
    </div>
  );
};
