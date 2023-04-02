import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";

import "./style/global.css";
import Video from "./pages/Video";
import db from "./config/firebase.js";

export default function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="h-screen grid place-items-center">
      <div className="relative h-[90%] w-11/12 max-w-[500px] overflow-scroll rounded-2xl snap-y snap-mandatory app_Video">
        {video.map((item) => {
          return (
            <Video
              key={item.url}
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}
