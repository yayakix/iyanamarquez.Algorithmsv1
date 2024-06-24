'use client'
import selectionSort from "@/algorithms/selectionSort";
import { useEffect, useState } from "react";


export default function SelectionSort(props) {
    // const startingArr = [12, 8, 5, 4, 3, 6, 7, 5, 0, 9, 2, 1, 17, 33, 0]
    const startingArr = props.array

    const [arr, setArr] = useState(startingArr)
    const [steps, setSteps] = useState([])

    useEffect(() => {
        // console.log(arr)
        const { array, steps } = selectionSort(startingArr, 0)
        // setArr(array)
        setSteps(steps)
    }, [])

    const showShort = () => {
        setArr(startingArr)
        steps.map((step, idx) => {
            setTimeout(() => {
                setArr(step)
            }, 1000 * idx)
        })
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <a href="/">bruh</a>
            <h1 className="text-3xl my-10">Selection Sort</h1>
            <div className="bg-black flex">
                {arr.map((x) => { return <span className='mx-4 bg-emerald-400 w-10' style={{ color: 'blue', height: `${(x + 1) * 10}px` }} ></span> })}
            </div >
            <button className="rounded p-2 border-2 border-green-500 hover:bg-emerald-100 hover:text-black " onClick={() => {
                showShort()
            }}>Start</button>
        </div>
    );
}
