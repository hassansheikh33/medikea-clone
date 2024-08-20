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
    <div className="mt-14">
      <h2 className="text-center font-semibold text-[52px] mb-24">
        The Medikea Difference
      </h2>
      <div className="flex justify-center gap-x-8">
        {cards.map((item) => {
          return (
            <div
              key={item.title}
              className="w-[22%] h-60 bg-cardBg p-4 flex flex-col justify-end relative overflow-hidden"
            >
              <div className="bg-navBtn absolute z-30 p-10 -top-10 -right-10 rotate-45"></div>
              <div className="h-[58%] flex flex-col justify-between">
                <h3 className="font-medium text-2xl w-[70%]">{item.title}</h3>
                <p className="text-cardColor">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
