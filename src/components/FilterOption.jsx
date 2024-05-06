export default function FilterOption({ setFilter, option, name, filter }) {
  const handleClick = () => {
    if (filter === option) {
      setFilter("");
    } else {
      setFilter(option);
    }
  };

  return (
    <button
      className="flex flex-row my-1 hover:bg-cyan-200"
      onClick={handleClick}
    >
      <div className="w-2/3">
        <p className="text-center text-LightBlue">{name}</p>
      </div>
      <div className="w-1/3 my-auto">
        <div
          className={`border-LightBlue border-8 w-3 h-3 mx-auto ${
            filter === option ? "bg-white" : ""
          }`}
        ></div>
      </div>
    </button>
  );
}
