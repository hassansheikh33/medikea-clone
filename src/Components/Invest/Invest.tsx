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
    <div className="mt-32 customSm:mt-16">
      <div className="text-center mb-8 customSm:w-[85%] m-auto">
        <h2 className=" font-semibold text-[52px] mb-4 customSm:text-2xl">
          It’s time to invest in your people
        </h2>
        <p className="w-2/5 m-auto customSm:w-full customSm:text-xl">
          River Health provides quality and comprehensive primary and mental
          healthcare directly to your employees.
        </p>
      </div>
      <div className="flex customSm:flex-col customSm:mt-12">
        <div className="bg-blue-300 w-2/4 p-8 customSm:rounded-xl customSm:pb-4 customSm:text-center customSm:px-2 customSm:w-[90%] customSm:mx-auto  customSm:shadow-2xl customSm:shadow-[rgba(0,0,0,0.6)]">
          {blues.map((item) => (
            <p
              key={item}
              className="text-navBtn text-5xl font-semibold mb-8 customSm:text-2xl customSm:mb-4"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="w-3/4 pt-40 pl-20 bg-creamBg flex customSm:justify-center customSm:p-8 customSm:mt-16 customSm:w-[90%] customSm:mx-auto customSm:shadow-2xl customSm:shadow-[rgba(0,0,0,0.6)">
          <div className="bg-navBtn rounded-full p-2 h-2 mt-2 mr-6 customSm:mr-0"></div>
          <div>
            <div className="customSm:flex customSm:flex-col customSm:items-center">
              <h3 className="text-3xl font-medium mb-2 customSm:text-2xl">
                Primary Care
              </h3>
              <p className="text-lg text-greyDesc mb-4">
                Ideal for prevent care
              </p>
              <button className="bg-navBtn px-4 py-3 rounded-[2rem] text-white mr-4 mb-2">
                Book an appoinment
              </button>
              <button className="py-3 px-4 rounded-[2rem] border border-black customSm:hidden">
                Learn More
              </button>
              <p className="text-sm ml-4 text-greyDesc customSm:m-0">
                Next Today 4 40pm
              </p>
              <p className="hidden customSm:block text-xl font-medium mt-4">
                Learn More
              </p>
            </div>
            <div className="mt-28 customSm:mt-12 customSm:text-center">
              {greys.map((item) => (
                <p
                  key={item}
                  className="font-medium text-4xl mb-12 customSm:text-2xl customSm:mb-6"
                >
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
