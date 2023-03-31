import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Vinil from "../../assets/Vinil.png";

export default function Footer() {
  return (
    <div className="relative bottom-[20%] ml-5">
      <div>
        <h1 className="text-xl font-bold pb-3">@DiovaneAlves</h1>
        <p className="pb-5">Descrição do Video</p>
        <div className="flex gap-2 pb-2">
          <MusicNoteIcon className="" />
          <div className="w-4/5 overflow-hidden">
            <p className="translate-x-96  animate-slide">Titulo da Musica</p>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 right-3 h-10 invert animate-spin"
        alt="Imagem de um vinil girando"
        src={Vinil}
      />
    </div>
  );
}
