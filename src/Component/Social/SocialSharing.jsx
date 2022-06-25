import React from "react";
import "./SocialSharing.css";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

export default function SocialSharing() {
  return (
    <div className="social">
      <TwitterShareButton
        className="twitter"
        title={"amazing website"}
        url={"https://peing.net/ja/"}
        hashtags={["#GoodFood", "#Tasty", "#Yummy"]}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <FacebookShareButton
        className="facebook"
        url={"https://github.com/"}
        quote={"amazing website, go to watch it"}
        hashtag={["#GoodFood", "#Tasty", "#Yummy"]}
        description={"amazing website, go to watch it"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
}
