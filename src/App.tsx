import About from "./components/About";
import Contact from "./components/Contact";
import ExploreMore from "./components/ExploreMore";
import FindMore from "./components/FindMore";
import Hero from "./components/Hero";
import Qualities from "./components/Qualities";
import Services from "./components/Services";

function App() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Qualities />
      <Services />
      <ExploreMore />
      <FindMore />
      <Contact />
    </main>
  );
}

export default App;
