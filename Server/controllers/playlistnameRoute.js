    const mongoose = require('mongoose');
    const { playlistnameDetails } = require('../model/playlistnamemodel')


    const playlistName = async (req, res) => {
        try {
            const { playlistname,user  } = req.body;
            console.log(playlistname);

            // const existingPlaylist = await playlistnameDetails.findById({ playlistname });
            // console.log(existingPlaylist,"macha")

            // if (existingPlaylist) {
            //     return res.status(400).json({
            //         message: "Playlist already exists",
            //     });
            // }
        
            const playlist = new playlistnameDetails({
                
                playlistname:playlistname,
                user: user,
            });

            console.log(playlist)

            await playlist.save();
            return res.status(200).json({
                message: "Playlist created successfully"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error"
            });
        }
    };


    const getplayListData = async(req,res)=>{
        try{
            const {userId } = req.params;
            const playListnames = await playlistnameDetails.find({user:userId});
            return res.status(200).json({
                message:"playlist names added successfully",playListnames
                
            })
        }catch(error){
            return res.status(404).json({
                message:"error fetching the data",error
            })

        }
    }

    module.exports = { playlistName,getplayListData };
