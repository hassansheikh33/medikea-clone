import Links from "../Links/Links";
import Bottom from "../Bottom.tsx/Bottom";

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
  return (
    <>
      <footer className="w-3/4 m-auto mt-64 mb-48">
        <Links />
        <div className="mt-28 text-greyDesc flex gap-x-40">
          <div>
            <h2 className="font-medium text-xl mb-6">SERVICES</h2>
            <div className="flex flex-col gap-y-3">
              {services.map((item, index) => (
                <p key={index} className="text-lightGreyDesc">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-medium text-xl mb-6">COMPANY</h2>
            <div className="flex flex-col gap-y-3">
              {company.map((item, index) => (
                <p key={index} className="text-lightGreyDesc">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-medium text-xl mb-6">FOR BUSINESS</h2>
            <div className="flex flex-col gap-y-3">
              {business.map((item, index) => (
                <p key={index} className="text-lightGreyDesc">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-medium text-xl mb-6">GET SUPPORT</h2>
            <div className="flex flex-col gap-y-3">
              {support.map((item, index) => (
                <p key={index} className="text-lightGreyDesc">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <Bottom />
    </>
  );
}
