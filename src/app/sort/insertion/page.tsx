'use client'
import Image from "next/image";
import insertionSort from "@/algorithms/insertionSort";
import { useEffect, useState } from "react";


export default function InsertionSort(props) {
    // const startingArr = [33, 12, 16, 34, 36, 7, 5, 9, 2, 1, 46]
    const startingArr = props.array

    const [arr, setArr] = useState(startingArr)
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
            <h1 className="text-3xl my-10">Insertion Sort</h1>
            <div className="flex flex-row">
                <div className=" flex">
                    {newArray.map((x) => { return <span className='mx-4 bg-purple-400 w-10' style={{ color: 'blue', height: `${(x + 1) * 10}px` }} >{x}</span> })}
                </div >
                <div className=" flex">
                    {arr.map((x) => { return <span className='mx-4 bg-emerald-400 w-10' style={{ color: 'blue', height: `${(x + 1) * 10}px` }} >{x}</span> })}
                </div >
            </div>
            <button className="rounded p-2 border-2 border-green-500 hover:bg-emerald-100 hover:text-black " onClick={() => {
                setArr(startingArr)
                setNewArray([])
                doAnimation()
            }}>Restart</button>
        </div>
    );
}
