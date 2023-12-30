import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
  const [message, setMessage] = useState();
  const sendMessage = (e) => {
    //再ロードしない
    e.preventDefault();
    //uidとphotoURLを取得
    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <SendIcon />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
