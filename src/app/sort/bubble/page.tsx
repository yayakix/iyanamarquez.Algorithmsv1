'use client'
import Image from "next/image";
import bubbleSort from "@/algorithms/bubbleSort";
import { useEffect, useState } from "react";


export default function BubbleSort(props: { array: [] }) {
    const startingArr = [2, 8, 5, 4, 3, 6, 7, 1, 8, 9, 0]
    // const startingArr = props.array
    const [arr, setArr] = useState(startingArr)
    const [steps, setSteps] = useState([])


    useEffect(() => {
        const { array, steps } = bubbleSort(startingArr)
        setSteps(steps)
        steps.map((step, idx) => {
            setTimeout(() => {
                setArr(step)
            }, 1000 * idx)
        })
    }, [])


    const showShort = () => {
        setArr(startingArr)
        steps.map((step, idx) => {
            setTimeout(() => {
                setArr(step)
            }, 500 * idx)
        })
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row items-center ">
                <h1 className="text-xl my-4">Bubble Sort</h1>
                <button className="p-0 h-10 mx-4 rounded w-16 border-2 border-green-500 hover:bg-emerald-100 hover:text-black " onClick={() => {
                    showShort()
                }}>Start</button>
            </div>
            <div className="bg-black flex border border-white rounded p-4 mb-4 min-w-3/4 max-h-32 overflow-hidden">
                {arr.map((x) => { return <span className='mx-2 bg-emerald-400 w-2' style={{ color: 'blue', height: `${(x + 1) * 5}px` }} ></span> })}
            </div >

        </div>
    );
}
