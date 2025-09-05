import HomeCarousel from "../components/HomeCarousel";
import ScrollToTopButton from "../components/ScrollToTopButton";
import About from "./About";
import Team from "./Team";

function Home() {
  return (
    <>
      <HomeCarousel />
      <About />
      <Team />
    </>
  );
}

export default Home;