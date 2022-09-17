import { NUMBERS_RANGE, SPEED_RANGE } from "./DefaultValues";

const randomInt = (max: number, min: number) =>
  Math.round(Math.random() * (max - min)) + min;

const swap = (array: number[], i: number, j: number) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const sleep = (milliSeconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliSeconds));

const calculateDelay = (array: number[], sortingSpeed: number) => {
  const SPEED_FACTOR = 500 / array.length;
  return (SPEED_RANGE.MAX / sortingSpeed) * SPEED_FACTOR;
};

export const randomizeArray = (size: number) => {
  let randomArray = [];

  for (let i = 0; i < size; i++) {
    let randNum = randomInt(NUMBERS_RANGE.MIN, NUMBERS_RANGE.MAX);
    randomArray.push(randNum);
  }

  return randomArray;
};

export const insertionSort = async (
  array: number[],
  sortingSpeed: number,
  setSwappedBars: ({}) => void
) => {
  let delay = calculateDelay(array, sortingSpeed);
  let i, j, key;

  for (i = 1; i < array.length; i++) {
    key = array[i];
    j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      setSwappedBars({ left: j, right: j + 1 });
      await sleep(delay);
      j--;
    }
    array[j + 1] = key;
  }
};

export const selectionSort = async (
  array: number[],
  sortingSpeed: number,
  setSwappedBars: ({}) => void
) => {
  let delay = calculateDelay(array, sortingSpeed);
  let length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minElementIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minElementIndex]) minElementIndex = j;
    }

    swap(array, minElementIndex, i);
    setSwappedBars({ left: minElementIndex, right: i });
    await sleep(delay);
  }
};
