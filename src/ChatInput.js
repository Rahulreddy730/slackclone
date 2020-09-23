import React, { useState} from "react";
import "./ChatInput.css";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";

function ChatInput({ channelName, channelId}) {
    const [input, setInput] = useState ("");
    const [{ user }] = useStateValue();


    const sendMessage = (e) => {
        e.preeventDefault();

        if (channelId){
            db.collection("rooms").doc(channelId).collection("message").add ({
                message: input,
                timpstamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.dispalyName,
                userImage: user.photoURL
            });
        }

        setInput("")
    };

    return (
        <div className="chatInput">
            <form>
                <input
                    placeholder={`Message #${channelName}`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>

        </div>
    )
}


export default ChatInput;