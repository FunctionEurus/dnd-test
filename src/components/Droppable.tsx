import { useDrop } from "react-dnd";
import styles from "./Droppable.module.css";

interface DroppableProps {
  children?: React.ReactElement;
  state?: any;
  handleDrop: Function;
}

function Droppable({ children, state, handleDrop }: DroppableProps) {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "box",
      collect: (monitor) => ({ isOver: monitor.isOver() }),
      drop: (item: any) => {
        // console.log(item);
        handleDrop(item);
      },
    }),
    [state]
  );
  return (
    <div className={styles.container} ref={drop}>
      {children}
    </div>
  );
}

export default Droppable;
