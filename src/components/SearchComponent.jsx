const SearchComponent = ({ setIp }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIp(event.target.value);
    }
  };
  return (
    <input
      className='search-container'
      placeholder='Search an IP'
      onKeyUp={(event) => handleKeyPress(event)}
    />
  );
};

export default SearchComponent;
