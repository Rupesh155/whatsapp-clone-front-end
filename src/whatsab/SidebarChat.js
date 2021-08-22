import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
function SidebarChat({id,  addNewChat }) {
    const [seet1, setSeet1] = useState('');
    useEffect(() => {
        setSeet1(Math.floor(Math.random() * 100))

    }, [])
    const createChat=()=>{
      const roomName=prompt("Please enter name");
    };

    return  !addNewChat ? (
        <>
        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seet1}.svg`} />
            <div className="sidebarchat_info">
                <h4> Dr. Rajesh M</h4>
                <p> When was your last consultation?</p>
            </div>
        </div>
        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seet1}.svg`} />
            <div className="sidebarchat_info">
                <h4> Namrata</h4>
                <p> Did you eat your medicines as...</p>
            </div>
        </div>
        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seet1}.svg`} />
            <div className="sidebarchat_info">
                <h4> Rupesh</h4>
                <p> When was your last consultation?</p>
            </div>
        </div>
        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seet1}.svg`} />
            <div className="sidebarchat_info">
                <h5> Dr. Rajesh M</h5>
                <p> When was your last consultation?</p>
            </div>
        </div>
        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seet1}.svg`} />
            <div className="sidebarchat_info">
                <h5> Dr. Rajesh M</h5>
                <p> When was your last consultation?</p>
            </div>
        </div>
        </>
        
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2> Add New Chat</h2>
        </div>
    );
}
export default SidebarChat;
