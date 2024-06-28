'use client'
import selectionSort from "@/algorithms/selectionSort";
import { useEffect, useState } from "react";


export default function SelectionSort() {
    const startingArr = [2, 8, 5, 4, 3, 6, 7, 1, 8, 9, 0]
    // const startingArr: number[] = props.array

    const [arr, setArr] = useState<any>(startingArr)
    const [steps, setSteps] = useState<any>([])

    useEffect(() => {
        // console.log(arr)
        const { array, steps } = selectionSort(startingArr, 0)
        console.log('hi')
        setArr(array)
        setSteps(steps)
    }, [])

    const showShort = () => {
        setArr(startingArr)
        steps.map((step: any, idx: number) => {
            setTimeout(() => {
                setArr(step)
            }, 1000 * idx)
        })
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row items-center ">
                <h1 className="text-xl my-4">Selection Sort</h1>
                <button className="p-0 h-10 mx-4 rounded w-16 border-2 border-green-500 hover:bg-emerald-100 hover:text-black " onClick={() => {
                    showShort()
                }}>Start</button>
            </div>
            <div className="bg-black flex border border-white rounded p-4 mb-4">
                {arr.map((x: number) => { return <span key={x} className='mx-2 bg-emerald-400 w-2' style={{ color: 'blue', height: `${(x + 1) * 5}px` }} ></span> })}
            </div >

        </div>
    );
}
