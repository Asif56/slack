import React,{useState,useEffect} from 'react'
import './Chat.css'
import {useParams} from 'react-router-dom'
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import db from './firebase'
import Message from './Message'
import ChatInput from './ChatInput'
import axios from './axios'

function Chat() {
    const {roomId}=useParams()
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    const getConvo =()=>{
        axios.get(`/get/conversation?id=${roomId}`).then((res)=>{
            setRoomDetails(res.data[0].channelName)
            setRoomMessages(res.data[0].conversation)
        })
    }

    useEffect(() => {
        if (roomId) {
            // db.collection("rooms")
            //     .doc(roomId)
            //     .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));

            getConvo()
        }

        // db.collection("rooms")
        //     .doc(roomId)
        //     .collection("messages")
        //     .orderBy("timestamp", "asc")
        //     .onSnapshot((snapshot) =>
        //         setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        //     );
    }, [roomId])
    return (
        <div className='chat'>
            {/* <h1>you are in {roomId}</h1> */}
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong> # {roomDetails} </strong>
                        {/* <strong>#general</strong> */}
                        <StarBorderOutlined />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p><InfoOutlined /> Details</p>

                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
            <ChatInput channelName={roomDetails} channelId={roomId} />

            {/* <div className='non' style={{bottom:"0px",background:"red",heitgh:"20px"}}>
             
            </div> */}
        </div>
    )
}

export default Chat
