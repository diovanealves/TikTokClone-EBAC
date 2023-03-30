import "./style/global.css";
import Video from "./components/Video";

export default function App() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="relative h-screen max-h-[800px] w-4/5 max-w-[500px] overflow-scroll rounded-2xl snap-y snap-mandatory app_Video">
        <Video />
      </div>
    </div>
  );
}
