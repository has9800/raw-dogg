import "../styles/globals.css";
import SearchContextWrapper from "../context/SearchContext";

function MyApp({ Component, pageProps }) {
  return (
    <SearchContextWrapper>
      <Component {...pageProps} />
    </SearchContextWrapper>
  );
}

export default MyApp;
