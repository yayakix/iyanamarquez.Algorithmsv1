'use client'
import insertionSort from "@/algorithms/insertionSort";
import { useEffect, useState } from "react";


export default function InsertionSort() {
    const startingArr: number[] = [2, 8, 5, 4, 3, 6, 7, 1, 8, 9, 0]
    const [arr, setArr] = useState<number[]>(startingArr)
    const [newArray, setNewArray] = useState<number[]>([])

    useEffect(() => {
        const { array, steps, steps2 } = insertionSort(startingArr)
        steps.map((step, idx) => {
            setTimeout(() => {
                setArr(step)

            }, 1000 * idx)
        })
        steps2.map((step, idx) => {
            setTimeout(() => {
                setNewArray(step)

            }, 1000 * idx)
        })
    }, [])
    const doAnimation = () => {
        const { array, steps, steps2 } = insertionSort(startingArr)
        steps.map((step, idx) => {
            setTimeout(() => {
                setArr(step)

            }, 1000 * idx)
        })
        steps2.map((step, idx) => {
            setTimeout(() => {
                setNewArray(step)

            }, 1000 * idx)
        })
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row items-center ">
                <h1 className="text-xl my-4">Insertion Sort</h1>
                <button className="p-0 h-10 mx-4 rounded w-16 border-2 border-green-500 hover:bg-emerald-100 hover:text-black " onClick={() => {
                    setArr(startingArr)
                    setNewArray([])
                    doAnimation()
                }}>Start</button>
            </div>
            <div className="bg-black flex border border-white rounded mb-4 min-w-3/4 min-h-24 p-4">
                {/* <div className="flex flex-row p-2"> */}
                <div className=" flex ">
                    {newArray.map((x) => { return <span className='mx-2 bg-purple-400 w-2' style={{ color: 'blue', height: `${(x + 1) * 5}px` }} >{ }</span> })}
                </div >
                <div className=" flex">
                    {arr.map((x) => { return <span className='mx-2 bg-emerald-400 w-2' style={{ color: 'blue', height: `${(x + 1) * 5}px` }} >{ }</span> })}
                </div >
            </div>

        </div>
    );
}
