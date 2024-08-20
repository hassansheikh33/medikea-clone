import DocImageHome from "../../assets/docImageHome.png";
import pauseBtn from "../../assets/pauseBtn.svg";
import chatWithUs from "../../assets/chat.svg";

export default function DocImage() {
  return (
    <div className="w-full relative">
      <img
        src={DocImageHome}
        alt="a Doctor"
        className=" bg-docImageBg w-full h-auto"
      />
      <div className="bg-filter inset-0 absolute"></div>
      <div className="absolute z-20 w-[35%] top-1/4 left-[12%] flex flex-col justify-between h-[35%]">
        <h1 className="font-semibold text-white text-6xl">
          Bringing care closer.
        </h1>
        <p className="text-white text-2xl">
          We bring the best doctors to you: at home, in your community, and on
          your mobile device.
        </p>
        <button className="bg-navBtn rounded-[2rem] w-1/2 px-8 py-4 text-lg text-white">
          Activate/Sign in
        </button>
      </div>
      <div className="absolute top-[83%] right-[1%]">
        <img className="mb-4" src={pauseBtn} alt="pause" />
        <img src={chatWithUs} alt="chat with use" />
      </div>
    </div>
  );
}
