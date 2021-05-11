import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/913093763106529280/NQr9jJUN_400x400.jpg" />
          <input placeholder="What's happening?" type="text"/>
        </div>
        <input placeholder="Optional: Eneter image URL" type="text"/>
        <Button className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div>;
}

export default TweetBox