import React, { FC, ChangeEvent } from "react";
import styles from "../styles/DropDown.module.scss";
import { SORTBY } from "../DefaultValues";

const DropDown: FC<{ value: string; onChange: (value: string) => void }> = (
  props
) => {
  const dropdownChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div className={styles.dropdown}>
      <label>Sortear por</label>
      <select
        name="sortby"
        id="sortby"
        value={props.value}
        onChange={dropdownChangeHandler}
      >
        <option value={SORTBY.INSERTION_SORT}>{SORTBY.INSERTION_SORT}</option>
        <option value={SORTBY.SELECTION_SORT}>{SORTBY.SELECTION_SORT}</option>
      </select>
    </div>
  );
};

export default DropDown;
