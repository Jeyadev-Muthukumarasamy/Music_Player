import { createContext,useState } from "react";

export const AdminContext = createContext();


export const AdminContextProvider = ({children}) =>{
    const [fields,setFields] = useState({
        songname:"",
        singername:"",  
        languagecategory:"",
        language:"",
      
      })
    
    
      const API_URL = "http://localhost:3005/api/upload";
    
    
    
      const handleChange = (event)=>{
        // console.log(event.target.value)
        setFields((prev)=>({
          ...prev,
          [event.target.name]:event.target.value,
          
        }))
    
    
      }
      console.log(fields)
      const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("data entered")
      
        const formData = new FormData();
        
        formData.append('songName', fields.songname);
        formData.append('singerName', fields.singername);
        
        formData.append('songCategory', fields.languagecategory);
        formData.append('songLanguage', fields.language);
        console.log(fields.language,"lg")
        const songImage = document.querySelector('input[name="songImage"]').files[0];
        formData.append('songImage', songImage);
        console.log(songImage)
        const songFile = document.querySelector('input[name="songFile"]').files[0]
        formData.append('songFile', songFile);
        console.log(songFile)
        console.log()
      
        try {
          const response = await axios.post(API_URL, formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data for file uploads
            },
          });
      
      
          console.log('Form data sent successfully', response.data);
        } catch (error) {
        
          console.error('Failed to send form data', error);
        }
      };
      
    

    




    
    return <AdminContext.Provider value={{ fields,handleChange,handleSubmit }}>{children}</AdminContext.Provider>


}