import "./style/global.css";
import Video from "./pages/Video";

export default function App() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="relative h-5/6 md:h-screen max-h-[800px] w-4/5 max-w-[500px] overflow-scroll rounded-2xl snap-y snap-mandatory app_Video">
        <Video
          likes={100}
          messages={30}
          shares={150}
          name="Diovane"
          description="Bro, is this serious?"
          music="Rick Astley - Never Gonna Give You Up"
          url="https://dqyeyfehqynepruesbzg.supabase.co/storage/v1/object/sign/videos/Never%20gonna%20give%20you%20up.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlb3MvTmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAubXA0IiwiaWF0IjoxNjgwMzYzNzI2LCJleHAiOjE3MTE4OTk3MjZ9.83NyYnvmW4o8ZFWprDt6cdV2HJq2gM9pMuVQ93y6qcU&t=2023-04-01T15%3A42%3A06.620Z"
        />
      </div>
    </div>
  );
}
