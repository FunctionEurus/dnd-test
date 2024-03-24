import { ReactNode } from "react";
import styles from "./Box.module.css";
import { useDrag } from "react-dnd";

interface BoxProps {
  children?: ReactNode;
  backgroundColor?: string;
  id: number;
}

function Box({ children, backgroundColor, id }: BoxProps) {
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: "box",
      item: { id: `${id} ${Math.random()}`, color: backgroundColor },
      collect: (monitor) => {
        return { isDragging: monitor.isDragging() };
      },
    };
  });

  const boxStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
  };

  if (isDragging) return <div ref={drag}></div>;

  return (
    <div className={styles.box} style={boxStyle} ref={drag}>
      {children}
    </div>
  );
}

export default Box;
