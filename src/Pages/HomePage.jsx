import NavBar from "../Sections/navBar";
import Hero from "../Sections/Hero";
import Transform from "../Sections/Transformation-section";
import SectionLast from "../Sections/section-last";
import Footer from "../Sections/Footer";
export default function HomePage() {
  return (
    <div className="font-['Poppins']">
      <NavBar />
      <Hero />
      <Transform />
      <SectionLast />
      <Footer />
    </div>
  );
}
