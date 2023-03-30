import "./style/global.css";
import Video from "./components/Video";

export default function App() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="h-screen max-h-[800px] w-4/5 max-w-[500px] rounded-2xl">
        <Video />
      </div>
    </div>
  );
}
