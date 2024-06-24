'use client'
import Image from "next/image";
import bubbleSort from "@/algorithms/bubbleSortSteps";
import { useEffect, useState } from "react";


export default function BubbleSort() {
    const startingArr = [4, 3, 6, 7, 5, 0, 9, 2, 1, 12, 33, 0]

    const [arr, setArr] = useState(startingArr)


    useEffect(() => {
        console.log(arr)
        const { array, swapped } = bubbleSort(arr)
        if (swapped) {
            setTimeout(() => { setArr(array) }, 1000)
            bubbleSort(arr)
        }
    }, [arr])

    return (
        <div className="flex flex-col w-screen justify-center items-center">
            <h1 className="text-3xl my-10">Bubble Sort</h1>
            <div className="bg-black flex">
                {arr.map((x) => { return <span className='mx-4 bg-emerald-400 w-10' style={{ color: 'blue', height: `${(x + 1) * 10}px` }} ></span> })}
            </div >
            <button className="rounded p-2 border-2 border-green-500 hover:bg-emerald-100 hover:text-black " onClick={() => {
                setArr(startingArr)
            }}>Restart</button>
        </div>
    );
}
