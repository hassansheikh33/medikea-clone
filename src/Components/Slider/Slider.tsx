import { useEffect, useState } from "react";
import quotations from "../../assets/quotations.svg";
import star from "../../assets/star.svg";

const state1Cards = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, obcaecati perspiciatis dicta voluptatem quas a velit! Rem, perferendis eaque.",
    star: [1, 2, 3, 4, 5],
    name: "Mark Allen",
    role: "company",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit ipsam, obcaecati",
    star: [1, 2, 3, 4],
    name: "Mark Allen",
    role: "company",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit ipsam, obcaecati perspiciatis dicta voluptatem quas a velit! Rem, perferendis eaque.",
    star: [1, 2, 3, 4, 5],
    name: "Mark Allen",
    role: "company",
  },
];

const state2Cards = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit ipsam, obcaecati perspiciatis dicta voluptatem quas a velit! Rem, perferendis eaque.",
    star: [1, 2, 3, 4],
    name: "Ronnie O'Sulleivan",
    role: "company",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, obcaecati perspiciatis dicta voluptatem quas a velit! Rem, perferendis eaque.",
    star: [1, 2, 3, 4, 5],
    name: "Ronnie O'Sulleivan",
    role: "company",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit ipsam, obcaecati",
    star: [1, 2, 3, 4, 5],
    name: "Ronnie O'Sulleivan",
    role: "company",
  },
];

const state3Cards = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit ipsam, obcaecati perspiciatis dicta voluptatem quas a velit! Rem, perferendis eaque.",
    star: [1, 2, 3, 4, 5],
    name: "Judd Trump",
    role: "company",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit ipsam, obcaecati perspiciatis dicta voluptatem quas a velit! Rem, perferendis eaque.",
    star: [1, 2, 3, 4, 5],
    name: "Judd Trump",
    role: "company",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit ipsam, obcaecati perspiciatis dicta voluptatem quas a velit! Rem, perferendis eaque.",
    star: [1, 2, 3, 4, 5],
    name: "Judd Trump",
    role: "company",
  },
];

export default function Slider() {
  const [state, setState] = useState<"one" | "two" | "three">("one");

  useEffect(() => {
    const interval = setInterval(() => {
      switch (state) {
        case "one":
          setState("two");
          break;
        case "two":
          setState("three");
          break;
        case "three":
          setState("one");
          break;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [state]);

  let cards;
  switch (state) {
    case "one":
      cards = state1Cards;
      break;
    case "two":
      cards = state2Cards;
      break;
    case "three":
      cards = state3Cards;
      break;
  }
  return (
    <div className="mt-40">
      <h2 className="text-center text-[52px] font-semibold customSm:text-2xl customSm:w-[85%] customSm:mx-auto">
        That's what happy patients say!
      </h2>
      <div
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        className="mt-16 flex justify-center gap-x-8 customSm:overflow-x-scroll customSm:px-4"
      >
        {cards.map((item, index) => {
          return (
            <div
              className="w-1/4 shadow-[rgba(0,0,0,0.4)] shadow-lg rounded-2xl flex flex-col justify-between customSm:w-[90%] customSm:flex-shrink-0 "
              key={index}
            >
              <div className="p-8 pb-4 customSm:p-4">
                <p className="w-[90%] m-auto text-xl customSm:text-sm">
                  {item.text}
                </p>
                <p className="w-[90%] m-auto flex justify-end">
                  <img
                    className="customSm:w-8 customSm:h-auto"
                    src={quotations}
                    alt="quotation marks"
                  />
                </p>
              </div>
              <div className="bg-phonetextBg text-center p-2 rounded-b-2xl">
                <p className="flex justify-center mb-2 gap-x-1">
                  {item.star.map((item) => (
                    <img className="inline" key={item} src={star} alt="star" />
                  ))}
                </p>
                <p className="text-2xl font-medium customSm:text-lg">
                  {item.name}
                </p>
                <p className="text-lg text-greyDesc customSm:text-base">
                  {item.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center gap-x-4 customSm:mt-4">
        <span
          className={`rounded-full border ${state === "one" ? "border-navBtn" : "border-lightGreyDesc"} overflow-hidden p-[2px] flex justify-center items-center cursor-pointer`}
          onClick={() => setState("one")}
        >
          <span
            className={`overflow-hidden rounded-full p-[6px] inline-block ${state === "one" ? "bg-navBtn" : ""}`}
          ></span>
        </span>
        <span
          className={`rounded-full border ${state === "two" ? "border-navBtn" : "border-lightGreyDesc"} overflow-hidden p-[2px] flex justify-center items-center cursor-pointer`}
          onClick={() => setState("two")}
        >
          <span
            className={`overflow-hidden rounded-full p-[6px] inline-block ${state === "two" ? "bg-navBtn" : ""}`}
          ></span>
        </span>
        <span
          className={`rounded-full border ${state === "three" ? "border-navBtn" : "border-lightGreyDesc"} overflow-hidden p-[2px] flex justify-center items-center cursor-pointer`}
          onClick={() => setState("three")}
        >
          <span
            className={`overflow-hidden rounded-full p-[6px] inline-block ${state === "three" ? "bg-navBtn" : ""}`}
          ></span>
        </span>
      </div>
    </div>
  );
}
