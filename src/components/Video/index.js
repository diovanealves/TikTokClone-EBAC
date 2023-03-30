import { useRef, useState } from "react";
import videoTest from "../../assets/videoTest.mp4";

export default function Video() {
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
        src={videoTest}
      ></video>
    </div>
  );
}
