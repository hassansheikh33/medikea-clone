import map from "../../assets/map.png";
import locationIcon from "../../assets/location.svg";
import rightArror from "../../assets/rightArrow.svg";

const locations = [
  {
    title: "Harlem",
    desc: {
      line1: "2298 Frederick Douglass",
      line2: "New York, NY 10027",
    },
  },
  {
    title: "Harlem",
    desc: {
      line1: "2298 Frederick Douglass",
      line2: "New York, NY 10027",
    },
  },
  {
    title: "Harlem",
    desc: {
      line1: "2298 Frederick Douglass",
      line2: "New York, NY 10027",
    },
  },
  {
    title: "Harlem",
    desc: {
      line1: "2298 Frederick Douglass",
      line2: "New York, NY 10027",
    },
  },
];

export default function Locations() {
  return (
    <div className="mt-32">
      <h3 className="text-navBtn text-center text-3xl font-medium customSm:text-base">
        OUR LOCATIONS
      </h3>
      <h2 className="text-center text-[52px] font-semibold w-1/2 mx-auto my-14 customSm:text-2xl customSm:w-[90%]">
        Bring the best quality care to your neighborhood
      </h2>
      <div
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="flex justify-evenly w-[95%] m-auto customSm:w-full customSm:px-4 customSm:overflow-x-scroll customSm:gap-x-6"
      >
        {locations.map((item, index) => (
          <div
            key={index}
            className="w-1/5 bg-cardBg customSm:w-[70%] customSm:flex-shrink-0"
          >
            <img className="w-full h-auto" src={map} alt="Location" />
            <div className="p-4">
              <h3 className="flex items-center text-2xl mb-2 customSm:text-xl">
                <img
                  className="inline mr-3"
                  src={locationIcon}
                  alt="location icon"
                />
                {item.title}
              </h3>
              <div className="customSm:text-xs">
                <p className="mb-2">{item.desc.line1}</p>
                <p>{item.desc.line2}</p>
              </div>
              <p className="text-sm text-navBtn mt-8 customSm:mt-4">
                Find out more
                <img
                  className="inline w-1.5 h-auto ml-4"
                  src={rightArror}
                  alt="arrow"
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
