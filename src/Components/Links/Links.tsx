import medikea from "../../assets/medikea.svg";
export default function Links() {
  return (
    <div>
      <img className="mb-4" src={medikea} alt="medikea logo" />
      <div className="flex justify-between items-center">
        <h2 className="text-[32px] w-[30%] font-semibold">
          All your healthcare, in one place.
        </h2>
        <div>
          <button className="py-4 px-7 bg-footerBtn rounded-[32px] text-white mr-8">
            Get the App
          </button>
          <button className="py-4 px-7 bg-footerBtn rounded-[32px] text-white">
            Find Clinic
          </button>
        </div>
      </div>
    </div>
  );
}
