import { useState } from "react";
import meetingImage from "../../assets/FAQ.png";
import downArrow from "../../assets/dropdown.svg";
import { FAQType } from "../../types";
import upArrow from "../../assets/upArrow.svg";

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQType[]>([
    {
      shown: false,
      ques: "Who is Ro for?",
      ans: "Ro is for adults who are experiencing health issues or want to improve or support their health and prefer to do so from the comfort of their home.",
    },
    {
      shown: false,
      ques: "what are our business tactics?",
      ans: "Ro is for adults who are experiencing health issues or want to improve or support their health and prefer to do so from the comfort of their home.",
    },
    {
      shown: false,
      ques: "Who is Ro for?",
      ans: "Ro is for adults who are experiencing health issues or want to improve or support their health and prefer to do so from the comfort of their home.",
    },
    {
      shown: false,
      ques: "Who is Ro for?",
      ans: "Ro is for adults who are experiencing health issues or want to improve or support their health and prefer to do so from the comfort of their home.",
    },
    {
      shown: false,
      ques: "Who is Ro for?",
      ans: "Ro is for adults who are experiencing health issues or want to improve or support their health and prefer to do so from the comfort of their home.",
    },
  ]);

  const showFAQ = (index: number) => {
    setFaqs((prevState) => {
      const item = prevState[index];
      const updatedArr = prevState.map((item) => ({ ...item, shown: false }));
      const updatedItem = { ...item, shown: !item.shown };
      updatedArr[index] = updatedItem;
      return updatedArr;
    });
  };

  return (
    <div className="flex items-center w-[80%] m-auto mt-48">
      <div className="w-[35%]">
        <img
          className="w-full h-auto"
          src={meetingImage}
          alt="Business Meeting"
        />
      </div>
      <div className="w-[65%] pl-14">
        <h2 className="font-semibold text-5xl">Frequently Asked Questions</h2>
        <div className="mt-8 flex flex-col">
          {faqs.map((item, index) => (
            <div className="w-[90%]" key={index}>
              <div
                className="flex justify-between cursor-pointer py-5"
                onClick={() => showFAQ(index)}
              >
                <h3 className="text-2xl font-medium">{item.ques}</h3>
                {!item.shown && <img src={downArrow} alt="dropdown" />}
                {item.shown && <img src={upArrow} alt="dropdown" />}
              </div>
              <hr className="w-[90%]" />
              {item.shown && (
                <div className="p-4">
                  <p className="text-lg">{item.ans}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
