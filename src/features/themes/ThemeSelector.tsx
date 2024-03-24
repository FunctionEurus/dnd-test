import styles from "./ThemeSelector.module.css";
import { themes } from "../../data/themes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useEffect, useState } from "react";
import { updateTheme } from "./themeSlice";
function ThemeSelector() {
  const dispatch = useDispatch<AppDispatch>();
  const [curr, setCurr] = useState("火山蓝");

  useEffect(() => {
    dispatch(updateTheme(curr));
  }, [curr, dispatch]);

  return (
    <div className={styles.container}>
      <p>Theme</p>
      <select value={curr} onChange={(e) => setCurr(e.target.value)}>
        {themes
          .map((theme) => theme.name)
          .map((e) => (
            <option key={e}>{e}</option>
          ))}
      </select>
    </div>
  );
}

export default ThemeSelector;
