import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Vinil from "../../assets/Vinil.png";

export default function Footer({ name, description, music }) {
  return (
    <div className="relative bottom-[20%] ml-5">
      <div>
        <h1 className="text-xl font-bold pb-3">{name}</h1>
        <p className="pb-5">{description}</p>
        <div className="flex gap-2 pb-2">
          <MusicNoteIcon className="" />
          <div className="w-3/4 md:w-[82%] overflow-hidden">
            <p className="text-sm translate-x-96  animate-slide">{music}</p>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 right-4 h-10 invert animate-spin"
        alt="Imagem de um vinil girando"
        src={Vinil}
      />
    </div>
  );
}
