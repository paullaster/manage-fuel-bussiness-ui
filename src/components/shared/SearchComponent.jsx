const SearchComponent = ({placeholder, ...other}) => {
  return (
    <input 
    type='search' 
    name='q' 
    spellCheck='true' 
    aria-label="Search through site content" 
    placeholder={placeholder}
    {...other}
    />
  )
}

export default SearchComponent