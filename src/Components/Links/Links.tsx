import medikea from "../../assets/medikea.svg";
export default function Links() {
  return (
    <div>
      <img className="mb-4" src={medikea} alt="medikea logo" />
      <div className="flex justify-between items-center customSm:flex-col customSm:gap-y-6">
        <h2 className="text-[32px] w-[30%] font-semibold customSm:w-full customSm:text-2xl">
          All your healthcare, in one place.
        </h2>
        <div className="customSm:flex">
          <button className="py-4 px-7 bg-footerBtn rounded-[32px] text-white mr-8 customSm:text-sm customSm:mr-4 customSm:px-4">
            Get the App
          </button>
          <button className="py-4 px-7 bg-footerBtn rounded-[32px] text-white customSm:text-sm customSm:px-4">
            Find Clinic
          </button>
        </div>
      </div>
    </div>
  );
}
