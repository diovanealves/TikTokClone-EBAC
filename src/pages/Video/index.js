import { useRef, useState } from "react";
import Footer from "../../components/Footer";
import VideoSideBar from "../../components/SidebarBar";

export default function Video({
  likes,
  messages,
  shares,
  name,
  description,
  music,
  url,
}) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const volume = 0.5;

  function handleStartVideo() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      videoRef.current.volume = volume;
      setPlay(true);
    }
  }

  return (
    <div className="relative h-full w-full snap-start">
      <video
        className="h-full w-full object-fill"
        ref={videoRef}
        onClick={handleStartVideo}
        loop
        src={url}
      ></video>
      <VideoSideBar likes={likes} messages={messages} shares={shares} />
      <Footer name={name} description={description} music={music} />
    </div>
  );
}
