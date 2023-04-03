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
      <div className="relative w-full h-screen md:h-[90%] md:w-full md:max-w-[500px] md:rounded-2xl overflow-scroll  snap-y snap-mandatory app_Video">
        {video.map((item, index) => {
          return (
            <Video
              key={index}
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
