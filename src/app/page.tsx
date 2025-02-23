import Header from "./Components/Header";
import TitleScreen from "./Components/TitleScreen";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <TitleScreen />
      <AboutMe />
      <Projects />
    </main>
  );
}
