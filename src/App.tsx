import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import { classNames } from "./helpers/classNames/classNames";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { useTheme } from "./styles/theme/useTheme";

const App = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={switchTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>о Сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>

      <Counter />
    </div>
  );
};

export default App;