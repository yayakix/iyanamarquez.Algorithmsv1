'use client'
import Image from "next/image";
import selectionSort from "@/algorithms/selectionSort";
import { useEffect, useState } from "react";


export default function SelectionSort() {
    const startingArr = [33, 12, 16, 34, 36, 45, 4, 3, 6, 7, 5, 9, 2, 1, 46]

    const [arr, setArr] = useState(startingArr)
    const [newArray, setNewArray] = useState<number[]>([])



    useEffect(() => {
        const { newNum, array } = selectionSort(arr)
        if (array.length > 0) {
            setTimeout(() => {
                setArr(array);
                setNewArray([...newArray, newNum])
                // setNewArray(newArr.push(newArr))
            }, 1000)
            selectionSort(array)
        }
        if (array.length == 1) {
            setNewArray([...newArray, array[0]])
        }
        // setNewArray([...newArray, arr[0]])
    }, [arr])

    return (
        <div className="flex flex-col w-screen justify-center items-center">
            <h1 className="text-3xl my-10">Selection Sort</h1>
            <div className="flex flex-row">
                <div className="bg-purple-400 flex">
                    {newArray.map((x) => { return <span className='mx-4 bg-emerald-400 w-10' style={{ color: 'blue', height: `${(x + 1) * 10}px` }} >{x}</span> })}
                </div >
                {console.log("newww: " + newArray)}
                {console.log("old arr: " + arr)}

                <div className="bg-red-400 flex">
                    {arr.map((x) => { return <span className='mx-4 bg-emerald-400 w-10' style={{ color: 'blue', height: `${(x + 1) * 10}px` }} >{x}</span> })}
                </div >

            </div>

            <button className="rounded p-2 border-2 border-green-500 hover:bg-emerald-100 hover:text-black " onClick={() => {
                setArr(startingArr)
                setNewArray([])
            }}>Restart</button>
        </div>
    );
}
