import { createContext, useState } from "react";



export const PlaylistContext = createContext();


export const PlaylistContextProvider = ({ children }) => {

    const[closeInputBox,setCloseInputBox] = useState(false);
    const [playListProps,setPlayListProps] = useState();


    const ShowInput = () =>{
        setCloseInputBox(!closeInputBox)
    
      }

      const passSong=(index)=>{
        setPlayListProps()
      }
    
    



  return (
    <PlaylistContext.Provider value={{ closeInputBox,ShowInput,setCloseInputBox }} >
      {children}
    </PlaylistContext.Provider>
  );
};
