import React from "react";
import Username from "./Username";
import Icon from "./Icon";
import Avatar from "./Avatar";
import Hashtag from "./Hashtag";
import Profile from "./Profile";

const Meow = ({ user, text, hashtags, replies, likes }) => (
    <div className="Meow">
      <div className="top-section">
        <Profile user={user} />
        <Username username={user.username} />
      </div>

      <div className="mid-section">
        <p>{text}</p>
        <div className="hashtags">
          {hashtags.map((hashtag, index) => (
            <Hashtag key={index} children={hashtag} />
          ))}
        </div>
      </div>
      <div className="bottom-section">
        <Icon type="replies" number={replies} />
        <Icon type="likes" number={likes} />
      </div>
    </div>
  );


export default Meow;
