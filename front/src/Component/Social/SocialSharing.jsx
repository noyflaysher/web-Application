import React from "react";
import "./SocialSharing.css";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

export default function SocialSharing() {
  return (
    <div className="social">
      <TwitterShareButton
        className="twitter"
        title={"come to see "}
        url={"https://peing.net/ja/"}
        hashtags={["#GoodFood", "#Tasty", "#Yummy"]}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <FacebookShareButton
        className="facebook"
        url={"https://github.com/"}
        quote={"good website"}
        hashtag={["#GoodFood", "#Tasty", "#Yummy"]}
        description={"amazing website, go to watch it"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
}
