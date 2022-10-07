import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../app/actions";
import styles from "./Counter.module.css";

export const SetCounter = () => {
  const countValue = useSelector((state) => state.count);
  const [count, setCount] = useState(countValue);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(countValue);
  }, [countValue]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(set(count));
      }}
    >
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() => dispatch(setCount(count))}
      >
        Set Amount
      </button>
    </form>
  );
};
