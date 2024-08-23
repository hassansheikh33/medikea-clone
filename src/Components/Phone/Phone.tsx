import phone from "../../assets/phone.svg";
import appleStore from "../../assets/appleStore.svg";
import playStore from "../../assets/playStore.svg";

export default function Phone() {
  return (
    <div className="flex mt-32 bg-phonetextBg justify-center">
      <div className="w-[30%] bg-phonepicBg relative overflow-hidden">
        <img
          className="w-full h-full inset-0 absolute object-contain"
          src={phone}
          alt="phone"
        />
      </div>
      <div className="w-1/2 p-16">
        <h2 className="font-semibold text-[52px] w-[80%]">
          Get treated right from your phone.
        </h2>
        <div className="mt-12">
          <div className="mb-8">
            <h3 className="text-2xl font-medium mb-4">Care Chat</h3>
            <p className="text-xl leading-8">
              Have a question about a rash? Have a follow-up question after your
              visit? Connect with a clinician over chat to answer your
              questions.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-4">Video Chat</h3>
            <p className="text-xl leading-8">
              When you need to see someone face-to-face for medical advice,
              coaching or diagnosis, you can connect with a clinician for a
              video visit.
            </p>
          </div>
          <div className="flex gap-x-6 justify-center mt-12">
            <img
              className="cursor-pointer"
              src={appleStore}
              alt="apple store"
            />
            <img className="cursor-pointer" src={playStore} alt="play store" />
          </div>
        </div>
      </div>
    </div>
  );
}
