import React, { FC } from "react";
import styles from "../styles/Controls.module.scss";
import { NUMBERS_RANGE } from "../DefaultValues";
import RangeSlider from "./RangeSlider";
import DropDown from "./DropDown";

interface IProps {
  onDropdownChange: (sortBy: string) => void;
  arrayRandomizeHandler: () => void;
  arraySize: number;
  isSorting: boolean;
  sortBy: string;
  sortingSpeed: number;
  onSort: () => void;
  onSizeChange: (size: number) => void;
  onSpeedChange: (speed: number) => void;
}

const Controls: FC<IProps> = (props) => {
  const rangeChangeHandler = (event: any) => {
    if (event.target.name === "Tamanho") {
      props.onSizeChange(event.target.value);
    } else if (event.target.name === "Velocidade") {
      props.onSpeedChange(event.target.value);
    }
  };

  return (
    <div
      className={`${styles.controls} ${
        props.isSorting ? styles.drop : styles.rise
      }`}
    >
      <RangeSlider
        value={props.arraySize}
        name="Tamanho"
        min={NUMBERS_RANGE.MIN}
        max={NUMBERS_RANGE.MAX}
        onChange={rangeChangeHandler}
      />
      <RangeSlider
        value={props.sortingSpeed}
        name="Velocidade"
        min={NUMBERS_RANGE.MIN}
        max={NUMBERS_RANGE.MAX}
        onChange={rangeChangeHandler}
      />

      <DropDown value={props.sortBy} onChange={props.onDropdownChange} />
      <div className={styles.buttons}>
        <button className={styles.button} onClick={props.onSort}>
          Sortear
        </button>
        <button className={styles.button} onClick={props.arrayRandomizeHandler}>
          Randomizar
        </button>
      </div>
    </div>
  );
};

export default Controls;
