import docImage from "../../assets/doc.svg";

const doctors = [
  {
    name: "Vikas Jayadeva, MD",
    desc: "Primary Care, Family Medicine",
    loc: "Pasadena, CAs",
  },
  {
    name: "Vikas Jayadeva, MD",
    desc: "Primary Care, Family Medicine",
    loc: "Pasadena, CAs",
  },
  {
    name: "Vikas Jayadeva, MD",
    desc: "Primary Care, Family Medicine",
    loc: "Pasadena, CAs",
  },
  {
    name: "Vikas Jayadeva, MD",
    desc: "Primary Care, Family Medicine",
    loc: "Pasadena, CAs",
  },
  {
    name: "Vikas Jayadeva, MD",
    desc: "Primary Care, Family Medicine",
    loc: "Pasadena, CAs",
  },
  {
    name: "Vikas Jayadeva, MD",
    desc: "Primary Care, Family Medicine",
    loc: "Pasadena, CAs",
  },
  {
    name: "Vikas Jayadeva, MD",
    desc: "Primary Care, Family Medicine",
    loc: "Pasadena, CAs",
  },
  {
    name: "Vikas Jayadeva, MD",
    desc: "Primary Care, Family Medicine",
    loc: "Pasadena, CAs",
  },
];

export default function Team() {
  return (
    <div className="mt-24 pl-24 max-w-full customSm:pl-0 customSm:text-center">
      <p className="text-navBtn text-2xl mb-6 customSm:text-base">
        OUR PRIMARY CARE PROVIDERS
      </p>
      <h2 className="font-semibold text-[52px] customSm:text-2xl customSm:px-2">
        A medical team that really
        <br className="customSm:hidden" />
        <span className="text-navBtn"> cares about you.</span>
      </h2>
      <div
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="flex gap-x-16 mt-20 overflow-x-scroll customSm:px-6 customSm:gap-x-12"
      >
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="min-w-[20%] customSm:w-[70%] customSm:flex-shrink-0"
          >
            <div className="rounded-full overflow-hidden bg-docCardBg">
              <img className="w-full h-auto" src={docImage} alt="doctor" />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-medium mt-4 customSm:text-lg">
                {doc.name}
              </h3>
              <p className="mt-4 text-greyDesc text-lg customSm:text-base">
                {doc.desc}
              </p>
              <p className="mt-4 text-lightGreyDesc text-base customSm:text-sm">
                {doc.loc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
