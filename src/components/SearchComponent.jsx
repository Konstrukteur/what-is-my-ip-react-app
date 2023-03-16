const SearchComponent = ({ setIp }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      setIp(event.target.value);
    }
  };
  //   const handleKeyPress = (event) => {
  //     if (event.key === "Enter") {
  //       // Trying to use useRef for query input
  //       setIsLoading(true);
  //       setCurrentPage(0);
  //       navigate("/search");
  //     }
  //   };
  return (
    <input
      className='search-container'
      placeholder='Search an IP'
      onKeyUp={(event) => handleKeyPress(event)}
    />
  );
};

export default SearchComponent;
