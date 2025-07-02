import { useContext } from "react";
import Button from "../button/Button";
import { ThemeContext } from "../../context/ThemeContext";

export default function Header() {

  const themeContext = useContext(ThemeContext);

  return (
  <header>
    <h2>Demo for useContext</h2>
    <p>Thit is a button to switch between light and dark themes</p>
    <Button clickHandler={themeContext.switchTheme} btnText="Toggle theme" />
  </header>
  )
}