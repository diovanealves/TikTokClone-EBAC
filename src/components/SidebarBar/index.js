import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

export default function VideoSideBar() {
  const [like, setLike] = useState(false);
  function handdleLike() {
    setLike(!like);
  }

  return (
    <div className="absolute top-[50%] right-0 text-white">
      <div className="p-5 text-center" onClick={handdleLike}>
        {like ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{like ? 300 + 1 : 300}</p>
      </div>
      <div className="p-5 text-center">
        <ChatIcon fontSize="large" />
        <p>10</p>
      </div>
      <div className="p-5 text-center">
        <ShareIcon fontSize="large" />
        <p>32</p>
      </div>
    </div>
  );
}
