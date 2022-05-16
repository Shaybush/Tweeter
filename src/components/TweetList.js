import Tweet from "./Tweet";
import React from "react";
const TweetList = ({ name, tweets, setTweets }) => {
  return (
    <div className="tweet-list">
      {/* use that alot!! in react */}
      {tweets.map((tweet) => (
        <Tweet
          setTweets={setTweets}
          tweets={tweets}
          tweet={tweet}
          name={name}
          key={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetList;
