import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

function SearchContextWrappert({ children }) {
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextWrappert;
export const useQuery = () => useContext(SearchContext); // export & use context here to use like a hook in component
