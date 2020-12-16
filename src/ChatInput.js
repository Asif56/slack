// import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import "./ChatInput.css";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
import axios from './axios';

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();

        if (channelId) {
            // db.collection("rooms").doc(channelId).collection("messages").add({
            //     message: input,
            //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //     user: user.displayName,
            //     userImage: user.photoURL,
            // });
            axios.post(`/new/message?id=${channelId}`,{
                 message: input,
                 timestamp: Date.now(),
                 user: user.displayName,
                 userImage: user.photoURL,
            })
        }
        setInput("");
    };
    return (
        <div className="chatInput">
            <form>
                {/* <div className="chatInput_input"> */}
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                />
                <button type="sumbit" onClick={sendMessage}>SEND</button>
                {/* </div> */}
            </form>
        </div>
    )
}

export default ChatInput