import useLocalStorage from "use-local-storage";
import Toggle from "./components/toggle/Toggle";
import Home from "./components/Home/Home.jsx";
import AboutMe from "./components/AboutMe/AboutMe";
import Technologies from "./components/Technologies.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-bs-theme={isDark ? "dark" : "light"}>
      <div className="flex flex-col items-center h-screen w-screen space-y-10">
      <Toggle isChecked={isDark} handleChange={()=> setIsDark(!isDark)} />
        <Home /> 
        <AboutMe/>
        <Technologies/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
