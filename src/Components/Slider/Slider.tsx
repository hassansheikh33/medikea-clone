import { useState } from "react";
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
      <h2 className="text-center text-[52px] font-semibold">
        That's what happy patients say!
      </h2>
      <div className="mt-16 flex justify-center gap-x-8">
        {cards.map((item, index) => {
          return (
            <div
              className="w-1/4 border shadow-lg rounded-xl flex flex-col justify-between"
              key={index}
            >
              <div className="p-8 pb-4">
                <p className="w-[90%] m-auto text-xl">{item.text}</p>
                <p className="w-[90%] m-auto flex justify-end">
                  <img src={quotations} alt="quotation marks" />
                </p>
              </div>
              <div className="bg-phonetextBg text-center p-2">
                <p className="flex justify-center mb-2 gap-x-1">
                  {item.star.map((item) => (
                    <img className="inline" key={item} src={star} alt="star" />
                  ))}
                </p>
                <p className="text-2xl font-medium">{item.name}</p>
                <p className="text-lg text-greyDesc">{item.role}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center gap-x-4">
        <span
          className={`rounded-full border ${state === "one" ? "border-navBtn" : "border-lightGreyDesc"} overflow-hidden p-[2px] flex justify-center items-center`}
          onClick={() => setState("one")}
        >
          <span
            className={`overflow-hidden rounded-full p-[6px] inline-block ${state === "one" ? "bg-navBtn" : ""}`}
          ></span>
        </span>
        <span
          className={`rounded-full border ${state === "two" ? "border-navBtn" : "border-lightGreyDesc"} overflow-hidden p-[2px] flex justify-center items-center`}
          onClick={() => setState("two")}
        >
          <span
            className={`overflow-hidden rounded-full p-[6px] inline-block ${state === "two" ? "bg-navBtn" : ""}`}
          ></span>
        </span>
        <span
          className={`rounded-full border ${state === "three" ? "border-navBtn" : "border-lightGreyDesc"} overflow-hidden p-[2px] flex justify-center items-center`}
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
