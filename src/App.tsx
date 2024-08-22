import DocImage from "./Components/DocImage/DocImage";
import Invest from "./Components/Invest/Invest";
import Locations from "./Components/Locations/Locations";
import Navbar from "./Components/Navbar/Navbar";
import DifferenceCards from "./Difference/Difference";

function App() {
  return (
    <div>
      <Navbar />
      <DocImage />
      <DifferenceCards />
      <Invest />
      <Locations />
      <p className="p-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        laborum qui facere, ducimus, sed sunt fugiat, maxime natus illo
        provident dignissimos veniam.s
      </p>
    </div>
  );
}

export default App;
