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
    <div className="overflow-y-scroll flex flex-row justify-center flex-wrap gap-2">
      <BubbleSort />
      <SelectionSort />
      <InsertionSort />
      <MergeSort />
    </div>
  );
}
