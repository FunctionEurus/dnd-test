import { useSelector } from "react-redux";
import styles from "./App.module.css";
import Box from "./components/Box";
import { RootState } from "./store";
import Header from "./components/Header";
import Droppable from "./components/Droppable";
import { useState } from "react";

// import AccountComponent from "./features/accounts/AccountComponent";
// import CustomerComponent from "./features/customers/CustomerComponent";
function App() {
  const theme = useSelector((store: RootState) => store.theme);
  const [boxes, setBoxes]: [{ id: number; color: string }[], Function] =
    useState([{ id: 10, color: "#66CCFF" }]);

  function handleDrop(item: { id: number; color: string }) {
    // console.log(item);
    // console.log(item);
    // console.log([...boxes]);
    setBoxes((boxes: { id: number; color: string }[]) => {
      if (item.color in boxes.map((box) => box.color)) {
        return boxes;
      } else {
        return [...boxes, item];
      }
    });
  }

  // useEffect(() => console.log(boxes), [boxes]);

  return (
    <div className={styles.bg}>
      <Header />
      {/* <div className={styles.grid}> */}
      <Droppable handleDrop={handleDrop}>
        <div className={styles.grid_drop}>
          {boxes &&
            boxes.map((box) => (
              <Box
                key={`${box.color} ${Math.random()}`}
                backgroundColor={box.color}
                id={box.id}
              >
                {box.color}
              </Box>
            ))}
        </div>
      </Droppable>
      {/* </div> */}
      {boxes.map((box) => (
        <p key={box.id}>{box.color}</p>
      ))}
      <div className={styles.grid}>
        {theme.colors.map((e, i) => (
          <Box key={e} backgroundColor={e} id={i}>
            {e}
          </Box>
        ))}
        p
      </div>
    </div>
  );
}

export default App;
