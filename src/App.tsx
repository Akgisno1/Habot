import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SectionFive from "./components/sections/SectionFive";
import SectionFour from "./components/sections/SectionFour";
import SectionOne from "./components/sections/SectionOne";
import SectionThree from "./components/sections/SectionThree";
import SectionTwo from "./components/sections/SectionTwo";

function App() {
  return (
    <main className="font-pop w-screen overflow-x-hidden">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </main>
  );
}
export default App;
