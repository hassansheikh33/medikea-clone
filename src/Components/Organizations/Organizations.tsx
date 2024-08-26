import reenbok from "../../assets/Organizations/reenbok.svg";
import norrsken from "../../assets/Organizations/norrsken.svg";
import metropolis from "../../assets/Organizations/metropolis.svg";
import lancet from "../../assets/Organizations/lancet.svg";
import cbj from "../../assets/Organizations/cjbtech.svg";
import sais from "../../assets/Organizations/sais.svg";
import tsa from "../../assets/Organizations/tsa.svg";
import plaza from "../../assets/Organizations/plaza.svg";
import africa from "../../assets/Organizations/africa.svg";
import seedstart from "../../assets/Organizations/seedstars.svg";
import alibaba from "../../assets/Organizations/alibaba.svg";

const orgArr = [
  reenbok,
  norrsken,
  metropolis,
  lancet,
  cbj,
  sais,
  tsa,
  plaza,
  africa,
  seedstart,
  alibaba,
];

export default function Organizations() {
  return (
    <div className="w-3/4 m-auto mt-40 customSm:w-[95%]">
      <h2 className="text-center font-semibold text-[52px] mb-12 customSm:text-2xl">
        We’re working with trusted organizations in healthcare, policy, and
        beyond.
      </h2>
      <div className="flex flex-wrap justify-evenly items-center gap-x-16 gap-y-12 customSm:justify-center customSm:gap-x-12 customSm:gap-y-8">
        {orgArr.map((item, index) => (
          <div className="max-w-[20%] customSm:max-w-[35%]" key={index}>
            <img src={item} alt="organization logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
