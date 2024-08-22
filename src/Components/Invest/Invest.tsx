const blues = [
  "Allergy Symptoms",
  "Back Pain",
  "Cold or Flu",
  "Red Eye",
  "Birth Control",
  "Hypertension",
  "Specialist Referral",
  "Diabetes",
  "Medication Refill",
  "Skin Rash",
];

const greys = [
  "Child Health",
  "Mental Health",
  "Women’s Health",
  "Diet & Fitness",
];
export default function Invest() {
  return (
    <div className="mt-32">
      <div className="text-center mb-8">
        <h2 className=" font-semibold text-[52px] mb-4">
          It’s time to invest in your people
        </h2>
        <p className="w-2/5 m-auto">
          River Health provides quality and comprehensive primary and mental
          healthcare directly to your employees.
        </p>
      </div>
      <div className="flex sm:flex-col">
        <div className="bg-blue-300 w-2/4 p-8 sm:w-full">
          {blues.map((item) => (
            <p key={item} className="text-navBtn text-5xl font-semibold mb-8">
              {item}
            </p>
          ))}
        </div>
        <div className="w-3/4 pt-40 pl-20 sm:w-full bg-creamBg flex">
          <div className="bg-navBtn rounded-full p-2 h-2 mt-2 mr-6"></div>
          <div>
            <div>
              <h3 className="text-3xl font-medium mb-2">Book an appoinment</h3>
              <p className="text-lg text-greyDesc mb-4">
                Ideal for prevent care
              </p>
              <button className="bg-navBtn px-4 py-3 rounded-[2rem] text-white mr-4 mb-2">
                Book an appoinment
              </button>
              <button className="py-3 px-4 rounded-[2rem] border border-black">
                Learn More
              </button>
              <p className="text-sm ml-4 text-greyDesc">Next Today 4 40pm</p>
            </div>
            <div className="mt-28">
              {greys.map((item) => (
                <p key={item} className="font-medium text-4xl mb-12">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
