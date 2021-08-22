import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import React, { useState } from 'react';
import './Chat.css';
function Chat() {
    const [input, setInput] = useState("");
    const sendMess = (e) => {
        e.preventDefault();
        //console.log("tjsvwee",input);
        setInput("");
    }
    return (
        <div className="chat">

            <div className="chat_header">

                {<div className="chat_headerRight">
                    <div className="chat-headers-icon">
                        <LocalHospitalRoundedIcon />
                        <p className="chat-headers-text">  Doctor </p>
                    </div>

                    <div className="chat-headers-icon">
                        <QueryBuilderIcon />
                        <p className="chat-headers-text"> Appionments</p>
                    </div>

                    <div className="chat-headers-icon">
                        <ChatBubbleOutlineRoundedIcon />
                        <p className="chat-headers-text"> Chat with Doctor</p>
                    </div>


                </div>}

            </div>
            <div className="sidebarchat">
                <h4> Dr. Shilpa M</h4>
            </div>
            <div className="chat_body">
                <p className="chat_reciever ">
                    {/* <span className="chat_name"> rupesh kumar</span> */}
                    Hello
                    <span className="chat_time"> 3.24pm </span>

                </p>
                <p className="chat_messege">
                    {/* <span className="chat_name"> rupesh kumar</span> */}
                    Hello
                    <span className="chat_time"> 3.24pm </span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="type a messege" value={input} onChange={(e) =>
                        setInput(e.target.value)} />
                    <button onClick={sendMess} type="submit"> Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}
export default Chat;