import DocImageHome from "../../assets/docImageHome.png";
import pauseBtn from "../../assets/pauseBtn.svg";
import chatWithUs from "../../assets/chat.svg";

export default function DocImage() {
  return (
    <div className="w-full h-[59rem] relative bg-docImageBg customSm:h-[40rem]">
      <div
        style={{ backgroundImage: `url(${DocImageHome})` }}
        className={`bg-center bg-cover bg-no-repeat w-full h-full`}
      ></div>
      <div className="bg-filter inset-0 absolute"></div>
      <div className="absolute z-20 w-[35%] top-1/4 left-[12%] flex flex-col justify-between h-[35%] customSm:w-[90%] customSm:top-[12%] customSm:left-[7%] customSm:justify-start customSm:items-center customSm:text-center">
        <h1 className="font-semibold text-white text-6xl customSm:text-[32px] customSm:mb-8">
          Bringing care closer.
        </h1>
        <p className="text-white text-2xl customSm:text-sm customSm:mb-8">
          We bring the best doctors to you: at home, in your community, and on
          your mobile device.
        </p>
        <button className="bg-navBtn rounded-[2rem] w-1/2 px-8 py-4 text-lg text-white customSm:text-sm customSm:px-5">
          Activate/Sign in
        </button>
      </div>
      <div className="absolute top-[83%] right-[1%]">
        <img className="mb-4 customSm:hidden" src={pauseBtn} alt="pause" />
        <img className="customSm:hidden" src={chatWithUs} alt="chat with use" />
      </div>
    </div>
  );
}
