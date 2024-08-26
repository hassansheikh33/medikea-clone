import phone from "../../assets/phone.svg";
import appleStore from "../../assets/appleStore.svg";
import playStore from "../../assets/playStore.svg";

export default function Phone() {
  return (
    <div className="flex mt-32 bg-phonetextBg justify-center customSm:flex-col customSm:gap-y-6 customSm:bg-transparent">
      <div className="w-[30%] bg-phonepicBg relative overflow-hidden customSm:w-full">
        <img className="w-full h-full" src={phone} alt="phone" />
      </div>
      <div className="w-1/2 p-16 customSm:w-full customSm:p-4">
        <h2 className="font-semibold text-[52px] w-[80%] customSm:text-2xl customSm:p-2 customSm:w-full">
          Get treated right from your phone.
        </h2>
        <div className="mt-12">
          <div className="mb-8">
            <h3 className="text-2xl font-medium mb-4 customSm:text-xl">
              Care Chat
            </h3>
            <p className="text-xl leading-8 customSm:text-base">
              Have a question about a rash? Have a follow-up question after your
              visit? Connect with a clinician over chat to answer your
              questions.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-4 customSm:text-xl">
              Video Chat
            </h3>
            <p className="text-xl leading-8 customSm:text-base">
              When you need to see someone face-to-face for medical advice,
              coaching or diagnosis, you can connect with a clinician for a
              video visit.
            </p>
          </div>
          <div className="flex gap-x-5 justify-center mt-12">
            <img
              className="cursor-pointer customSm:min-w-[120px] customSm:h-auto"
              src={appleStore}
              alt="apple store"
            />
            <img
              className="cursor-pointer customSm:min-w-[120px] customSm:h-auto"
              src={playStore}
              alt="play store"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
