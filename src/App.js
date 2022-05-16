import React, { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
function App() {
  const [name, setName] = useState("Noga Bushary");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  return (
    <div align="center">
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList setTweets={setTweets} name={name} tweets={tweets} />
    </div>
  );
}

export default App;
