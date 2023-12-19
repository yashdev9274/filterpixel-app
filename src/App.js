import { useState, createContext } from "react";
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import Images from "./components/Images";
import useAxios from "./hooks/useAxios";

// using Context provider here

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");

  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
