const cards = [
  {
    title: "Transparent, Affordable Pricing",
    description: "Primary, urgent, and virtual care visits on YOUR schedule.",
  },
  {
    title: "Trusted Medical Providers",
    description:
      "You'll get quality time with your doctors so we can take good care of you every time.",
  },
  {
    title: "Effortless Care Management",
    description:
      "Find test results and everything you need to know in your Dashboard.",
  },
  {
    title: "Everyone is Welcome",
    description:
      "We go above and beyond to provide an inclusive, welcoming atmosphere.",
  },
];

export default function Difference() {
  return (
    <div className="mt-14 customSm:mt-20">
      <h2 className="text-center font-semibold text-[52px] mb-24 customSm:text-2xl customSm:mb-10">
        The Medikea Difference
      </h2>
      <div className="flex flex-wrap justify-center gap-x-8 customSm:gap-y-5">
        {cards.map((item) => {
          return (
            <div
              key={item.title}
              className="w-[22%] h-60 bg-cardBg p-4 flex flex-col justify-end relative overflow-hidden pt-0 customSm:w-[92%]"
            >
              <div className="bg-navBtn absolute z-30 p-10 -top-10 -right-10 rotate-45"></div>
              <div className="h-[58%] flex flex-col justify-between customSm:h-[68%] customSm:justify-evenly">
                <h3 className="font-medium text-2xl w-[70%] customSm:text-xl customSm:mb-3">
                  {item.title}
                </h3>
                <p className="text-cardColor">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
