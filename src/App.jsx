import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Toggle from "./components/toggle/Toggle";
import Home from "./components/home/Home";
import Skill from "./components/skill/Skill";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div className="flex flex-col items-center h-screen w-screen space-y-10">
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <Home />
        <Skill/>
      </div>
    </div>
  );
}

export default App;
