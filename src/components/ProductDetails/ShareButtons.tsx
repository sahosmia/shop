import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

const ShareButtons = ({ productId }: { productId: number }) => {
  const siteUrl = window.location.origin; 

  const url = `${siteUrl}/products/${productId}`;

  return (
    <div className="flex gap-1 items-center pt-2">
      <span className="font-semibold">Share By : </span>
      <FacebookShareButton url={url}>
        <FacebookIcon size={25} className="bg-red-200 rounded" />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <XIcon size={25} className="bg-red-200 rounded" />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={25} className="bg-red-200 rounded" />
      </LinkedinShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={25} className="bg-red-200 rounded" />
      </RedditShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={25} className="bg-red-200 rounded" />
      </TelegramShareButton>
    </div>
  );
};

export default ShareButtons;
