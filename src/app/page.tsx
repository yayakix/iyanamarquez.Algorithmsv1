'use client'
import Image from "next/image";
import bubbleSort from "@/algorithms/bubbleSortSteps";

import { useEffect, useState } from "react";


export default function Home() {
  const startingArr = [3, 4, 5, 1, 2, 72, 6, 8, 7, 90, 91, 93];

  const [arr, setArr] = useState(startingArr)

  useEffect(() => {
    { console.log('ermmm') }

    console.log(arr)
    const { array, swapped } = bubbleSort(arr)
    if (swapped) {
      setTimeout(() => { setArr(array) }, 1000)
      bubbleSort(arr)

    }

  }, [arr])
  { console.log('erm') }
  { console.log(arr) }


  console.log(bubbleSort(startingArr).array)
  return (
    <div className="flex flex-col w-screen justify-center items-center bg-purple-400">
      <a href="/sort/bubble">
        <button>Bubble Sort</button>

      </a>

    </div>
  );
}
