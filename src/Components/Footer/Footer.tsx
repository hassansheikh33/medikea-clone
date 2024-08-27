import Links from "../Links/Links";
import Bottom from "../Bottom.tsx/Bottom";
import { useState } from "react";
import dropdown from "../../assets/dropdown.svg";
import upArrow from "../../assets/upArrow.svg";

const services = [
  "Mental Health Care",
  "Primary Care",
  "Urgent Help",
  "Virtual Care",
  "COVID Care",
  "COVID Travel Testing",
  "Get Care",
  "Insurance & Pricing",
];

const company = ["Locations", "About Us", "Careers", "Press", "Blog"];

const business = [
  "Partners",
  "Carbon for Campus",
  "Occupational Health",
  "COVID Employer Program",
];

const support = ["support@carbonhealth.com", "Support Center"];

export default function Footer() {
  const [servicesShown, setServicesShown] = useState(false);
  const [businessShown, setBusinessShown] = useState(false);
  const [companyShown, setCompanyShown] = useState(false);
  const [supportShown, setSupportShown] = useState(false);

  return (
    <>
      <footer className="w-3/4 m-auto mt-64 mb-48 customSm:mt-36 customSm:mb-20">
        <Links />
        <div className="mt-28 text-greyDesc flex justify-between gap-x-12 gap-y-8 flex-wrap customSm:flex-col">
          <div>
            <h2
              onClick={() => setServicesShown((prevState) => !prevState)}
              className="font-medium text-xl customSm:flex customSm:justify-between cursor-pointer"
            >
              SERVICES
              <img
                className="hidden customSm:inline"
                src={servicesShown ? upArrow : dropdown}
                alt="dropdown arrow"
              />
            </h2>
            <div
              className={`flex flex-col gap-y-3 mt-8 customSm:mt-4 ${servicesShown ? "customSm:scale-100" : "customSm:scale-0"} ${servicesShown ? "customSm:h-[276px]" : "customSm:h-0"} customSm:transition-scale duration-500`}
            >
              {services.map((item, index) => (
                <p
                  key={index}
                  className={`text-lightGreyDesc cursor-pointer customSm:${servicesShown ? "" : "hidden"}`}
                >
                  {item}
                </p>
              ))}
            </div>
            <hr className="hidden customSm:block mt-4" />
          </div>
          <div>
            <h2
              onClick={() => setCompanyShown((prevState) => !prevState)}
              className="font-medium text-xl customSm:flex customSm:justify-between cursor-pointer"
            >
              COMPANY
              <img
                className="hidden customSm:inline"
                src={companyShown ? upArrow : dropdown}
                alt="dropdown arrow"
              />
            </h2>
            <div
              className={`flex flex-col gap-y-3 mt-8 customSm:mt-4 ${companyShown ? "customSm:scale-100" : "customSm:scale-0"} ${companyShown ? "customSm:h-[168px]" : "customSm:h-0"} customSm:transition-scale duration-500`}
            >
              {company.map((item, index) => (
                <p
                  key={index}
                  className={`text-lightGreyDesc cursor-pointer customSm:${companyShown ? "" : "hidden"}`}
                >
                  {item}
                </p>
              ))}
            </div>
            <hr className="hidden customSm:block mt-4" />
          </div>
          <div>
            <h2
              onClick={() => setBusinessShown((prevState) => !prevState)}
              className="font-medium text-xl customSm:flex customSm:justify-between cursor-pointer"
            >
              FOR BUSINESS
              <img
                className="hidden customSm:inline"
                src={businessShown ? upArrow : dropdown}
                alt="dropdown arrow"
              />
            </h2>
            <div
              className={`flex flex-col gap-y-3 mt-8 customSm:mt-4 ${businessShown ? "customSm:scale-100" : "customSm:scale-0"} ${businessShown ? "customSm:h-[132px]" : "customSm:h-0"} customSm:transition-scale duration-500`}
            >
              {business.map((item, index) => (
                <p
                  key={index}
                  className={`text-lightGreyDesc cursor-pointer customSm:${businessShown ? "" : "hidden"}`}
                >
                  {item}
                </p>
              ))}
            </div>
            <hr className="hidden customSm:block mt-4" />
          </div>
          <div>
            <h2
              onClick={() => setSupportShown((prevState) => !prevState)}
              className="font-medium text-xl customSm:flex customSm:justify-between cursor-pointer"
            >
              GET SUPPORT
              <img
                className="hidden customSm:inline"
                src={supportShown ? upArrow : dropdown}
                alt="dropdown arrow"
              />
            </h2>
            <div
              className={`flex flex-col gap-y-3 mt-8 customSm:mt-4 ${supportShown ? "customSm:scale-100" : "customSm:scale-0"} ${supportShown ? "customSm:h-[60px]" : "customSm:h-0"} customSm:transition-scale duration-500`}
            >
              {support.map((item, index) => (
                <p
                  key={index}
                  className={`text-lightGreyDesc cursor-pointer customSm:${supportShown ? "" : "hidden"}`}
                >
                  {item}
                </p>
              ))}
            </div>
            <hr className="hidden customSm:block mt-4" />
          </div>
        </div>
      </footer>
      <Bottom />
    </>
  );
}
