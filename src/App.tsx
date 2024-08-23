import DocImage from "./Components/DocImage/DocImage";
import Invest from "./Components/Invest/Invest";
import Locations from "./Components/Locations/Locations";
import Navbar from "./Components/Navbar/Navbar";
import DifferenceCards from "./Components/Difference/Difference";
import Phone from "./Components/Phone/Phone";
import Team from "./Components/Team/Team";
import FAQ from "./Components/FAQ/FAQ";
import Slider from "./Components/Slider/Slider";
import Organizations from "./Components/Organizations/Organizations";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <DocImage />
      <DifferenceCards />
      <Invest />
      <Locations />
      <Phone />
      <Team />
      <FAQ />
      <Slider />
      <Organizations />
      <Footer />
    </div>
  );
}

export default App;
