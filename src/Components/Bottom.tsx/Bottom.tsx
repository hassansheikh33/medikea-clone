import medikea from "../../assets/medikea.svg";
import lang from "../../assets/lang.svg";
import upArrow from "../../assets/upArrow.svg";

export default function Bottom() {
  return (
    <div className="bg-bottomBg text-greyDesc h-20 customSm:h-36">
      <div className="w-3/4 m-auto flex justify-between items-center h-full customSm:w-[95%] customSm:flex-col customSm:justify-evenly">
        <div className="flex items-center gap-x-8 customSm:gap-x-2 customSm:flex-col customSm: gap-y-1">
          <p className="cursor-pointer">
            <img
              className="w-6 h-6 inline mr-2"
              src={medikea}
              alt="medikea logo"
            />
            Terms and Conditions
          </p>
          <div className="flex justify-between">
            <p className="cursor-pointer mr-6">Privacy Policy</p>
            <p className="cursor-pointer">Cookie Policy</p>
          </div>
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
