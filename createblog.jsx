import React from "react";
import { useState } from "react";
import {addDoc,collection} from "firebase/firestore";
import {db,auth} from '../firebase-config';
import {useNavigate} from 'react-router-dom';

function CreateBlog(){
    const [title,settitle]=useState("");
    const [posttext,setposttext]=useState("");
    let navigate=useNavigate();
    const postsCollectionRef=collection(db,"post")
    const createpost=async () =>{
        await addDoc(postsCollectionRef,{title:title,posttext:posttext,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}});
        navigate("/");
    }
    
    return(
        <div className="postpage">
            <div className="container">
                <h1> Create a post</h1>

                <div className="ror">
                    <label> Title:</label>
                    <input type="text" placeholder="enter title here .." onChange={(event) => {settitle(event.target.value);
                    }}
                />
                </div>
                <div className="ror">
                    <label> Content:</label>
                    <br />
                    <textarea placeholder="enter your content here .." onChange={(event) => {setposttext(event.target.value);
                    }}/>
                </div>
                <br />
                <button className="bt" onClick={createpost}>Upload Post</button>

            </div>
            
        </div>
    )
}

export default CreateBlog;