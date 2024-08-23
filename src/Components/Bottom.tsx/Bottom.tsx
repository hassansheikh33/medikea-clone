import medikea from "../../assets/medikea.svg";
import lang from "../../assets/lang.svg";
import upArrow from "../../assets/upArrow.svg";

export default function Bottom() {
  return (
    <div className="bg-bottomBg text-greyDesc h-20">
      <div className="w-3/4 m-auto flex justify-between items-center h-full">
        <div className="flex items-center gap-x-8">
          <img className="w-6 h-6 inline" src={medikea} alt="medikea logo" />
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="flex items-center m-0 text-black font-medium cursor-pointer">
          <img src={lang} className="inline mr-2" />
          <p>English</p>
          <img className="inline ml-2 w-4 h-4" src={upArrow} />
        </div>
      </div>
    </div>
  );
}
