import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';




function Chat() {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon /> 
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true &&
        "chat__receiver"}`}>
        <span className="chat__name">Mike Torres</span>
        Hey Guys
        <span
          className="chat__timestamp">3:52pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
          <form>
            <input type="text" />
            <button>Send a message</button>
          </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
