'use client'

import BubbleSort from "./sort/bubble/page";
import SelectionSort from "./sort/selection/page";
import InsertionSort from "./sort/insertion/page";
import MergeSort from "./sort/merge/page";
import { useEffect, useState } from "react";

export default function Home() {
  const startingArr = [17, 3, 4, 20, 5, 1, 2, 10, 6, 8, 7, 15];
  const [arr, setArr] = useState(startingArr)

  return (
    <div className="flex flex-col justify-center items-center grid grid-col-4 ">
      <a href="/sort/bubble">
        <button>Bubble Sort</button>
      </a>
      <a href="/sort/selection">
        <button>Selection Sort</button>
      </a>
      <a href="/sort/insertion">
        <button>Selection Sort</button>
      </a>
      <div className="flex flex-wrap gap-16">
        <BubbleSort array={startingArr} />
        <InsertionSort array={startingArr} />
        <SelectionSort array={startingArr} />
        <MergeSort array={startingArr} />
      </div>
    </div>
  );
}
