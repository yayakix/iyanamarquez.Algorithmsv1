'use client'

import BubbleSort from "./sort/bubble/page";
import SelectionSort from "./sort/selection/page";
import InsertionSort from "./sort/insertion/page";
import MergeSort from "./sort/merge/page";
import { useEffect, useState } from "react";
import SelectionDropdown from "@/components/SelectionDropdown";

export default function Home() {
  const startingArr = [17, 3, 4, 20, 5, 1, 2, 10, 6, 8, 7, 15];
  const [arr, setArr] = useState(startingArr)

  return (
    <div>
      {/* <h1 className="text-6xl text-center mt-10 ">Algs Visualizer</h1> */}
      <div className="mt-10">
        {/* <SelectionDropdown /> */}
      </div>

      <div className="flex flex-col justify-center items-center grid grid-col-4 ">
        <div className="flex flex-wrap gap-16">
          {/* <BubbleSort array={startingArr} />
          <InsertionSort array={startingArr} />
          <SelectionSort array={startingArr} />
          <MergeSort array={startingArr} /> */}
        </div>
      </div>
    </div>
  );
}
