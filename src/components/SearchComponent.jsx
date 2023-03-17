const SearchComponent = ({ setIp }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (
        event.target.value.split(".").filter((number) => {
          return number > 0 && number <= 255;
        }).length == 4
      ) {
        setIp(event.target.value);
      } else {
        alert("Please enter a proper IPv4 address");
      }
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
