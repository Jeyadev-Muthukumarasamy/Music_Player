import React from "react";
import "./Admin.css"
import { useState } from "react";
import axios from "axios";


const Admin = () => {

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
    console.log(fields.languagecategory)
    formData.append('songCategory', fields.languagecategory);
    formData.append('songLanguage', fields.language);
    console.log(fields.language)
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
  
  
  return (
    <div id="admincontainer">
      <form action="submit" onSubmit={handleSubmit}>
      <div id="adminsongnameid">
        <label for="adminsongnamelabel">Song Name</label>
        <input type="text" id="adminsonginput" name="songname" onChange={handleChange} placeholder="Enter the song name" />
      </div>
      <div id="adminsingername">
        <label for="adminsingernamelabel" id="adminsingernamelabel">Singer Name</label>
        <input type="text" id="adminsingernameinput" placeholder="Enter the singer name" name="singername" onChange={handleChange}/>
      
    </div>
    <div id="adminsongcategory">
      <label for="adminsongcategoryselect">What's the Category of the song</label>
      <select  id="adminsongcategoryselect"  name="languagecategory" onChange={handleChange} >
        <option value="Love">Love</option>
        <option value="Philosophical">Philosophical</option>
        <option value="Romance">Romance</option>
        <option value="Sad Songs">Happy Songs</option>
        
      </select>
    </div>
    <div id="adminsonglanguage">
      <label for="adminsonglanguageselect">What's the language of the song</label>
      <select name="language" id="adminsonglanguageselect" onChange={handleChange}>
        <option value="tamil" name="lang">Tamil</option>
        <option value="english" name="lang">English</option>
        <option value="malayalam" name="lang">Malayalam</option>
        <option value="Telugu" name="lang">Telugu</option>
        <option value="Hindi" name="lang">Hindi</option>
      </select>
    </div>
    
   
     
    <div id="adminsongimage">
      
        <div id="songimageform">
          <label for="adminsongimage" id="adminsongimagelabel">Upload the Image here</label>
          <input type="file" name="songImage" />
        </div>
        <label htmlFor="song" id="adminsongslabel">Upload the Song</label>
        <input type="file" id="song" name="songFile"/>
        <input type="submit"   onSubmit={handleSubmit}/>
     
    </div>
    </form>
  </div>
  
  );
};

export default Admin;
