import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core/';
import DonutLargeIcon from '@material-ui/icons/DonutLarge/';
import ChatIcon from '@material-ui/icons/Chat/';
import MoreVerIcon from '@material-ui/icons/MoreVert/';
import { SearchOutlined } from "@material-ui/icons"
import SidebarChat from './SidebarChat';
// import db from './Firebase';
function Sidebar() {
    const [rooms, setRooms] = useState([{ id: 'id', room: 'room' }]);
    // useEffect(() => {

    //     db.collection("rooms").onSnapshot(async (snap) => {
    //         // console.log(snap);
    //         snap.docs.map((doc) => {
    //             console.log(doc.data());
    //             let data = doc.data();
    //             setRooms(...rooms, { id: data.id, room: data.room });
    //         });
    //     });

    //     // db.collection("rooms").onSnapshot((snapshot)
    //     //     =>
    //     //      setRooms(
    //     //          snapshot.docs.map((doc) => ({
    //     //            id: doc.id,
    //     //           data: doc.data(),
    //     //          }))

    //     //      )
    //     //  );
    // }, []);

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                {/* <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVerIcon />
                    </IconButton>
                </div> */}
            </div>
            <div className="sidebar_search">
                <div className="sidebar_Container">
                    {/* <SearchOutlined /> */}
                    {/* <input placeholder="Search or new chat" type="chat" /> */}
                </div>

            </div>
            <div className="sidebar_chats">
                {/* <SidebarChat id='id' room='room'  /> */}

                {
                    rooms.map((room) => {
                        return <SidebarChat id={rooms.id} room={room.name} />
                    }
                    )
                }

            </div>


        </div>
    )
}
export default Sidebar;