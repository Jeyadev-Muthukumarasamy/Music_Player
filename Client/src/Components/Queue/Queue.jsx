import React, { useState } from 'react'
import "./Queue.css"

const Queue = () => {
    const [queueDetails,setQueueDetails] = useState("")
  return (
    <>
    
    <div id="yourqueue">
            <p id="queueheadingone">Queue</p>
            <div id="queueseeall">See All</div>
        </div> 
        
         <div id="queuecontainer">
        <div id="queuesongscontainer">
            <div id="queueimagecontainer">
            <img src="../public/loginpage.jpg" alt="" id="queueimage" />

            </div>
           
            <div id="queuesongs">
                <p id="queuesongname">
                    adada mazhada

                </p>
                <div id="queuesingername">
                    Yuvan Shankar Raja


                </div>

            </div>
        </div>
    </div>
    </>
   
  )
}

export default Queue
