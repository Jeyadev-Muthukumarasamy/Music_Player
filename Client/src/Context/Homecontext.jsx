import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const HomeContext = createContext();


export const HomeContextProvider = ({ children }) => {
    const API_URL ="http://localhost:3005/api/musicdata";
    const [musicData, setmusicData] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const fetchDetails = async () => {
  setIsLoading(true);
 

  try {
    console.log(API_URL,"apiurl");
    const response = await axios(API_URL);
    
 
    setmusicData(response.data);
    
  } catch (error) {
    console.log("error fetching the data", error);
  } finally {
    setIsLoading(false);
  }
};

useEffect(() => {
  fetchDetails();
}, []);

if (isLoading) {
  console.log("Loading...");
} else if (musicData) {
  console.log(musicData, "response");
} else {
  console.log("No data found");
}



  return (
    <HomeContext.Provider value={{ musicData:musicData }} >
      {children}
    </HomeContext.Provider>
  );
};
