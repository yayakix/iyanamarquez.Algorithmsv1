'use client'
import Image from "next/image";
import mergeWithSteps from "@/algorithms/mergeSort";
import { useEffect, useState } from "react";


export default function MergeSort(props) {
    const startingArr = [5, 4, 7, 3, 1, 6, 8, 2, 9]
    const [final, setFinal] = useState(startingArr);
    const [arr, setArr] = useState(startingArr);
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const { sortedArr, steps: { sortedArrSteps, leftSide, rightSide } } = mergeWithSteps(startingArr);
        setSteps([...leftSide, ...rightSide, ...sortedArrSteps]);
        // setArr(sortedArr);
    }, []);

    const animateSorting = () => {
        steps.map((x, idx) => {
            if (x.length > 1) {
                console.log('x', x)
                setTimeout(() => {
                    setArr(x)
                }, 1000 * idx)

            }
        })
        console.log('hit')
        const { sortedArr } = mergeWithSteps(startingArr);

        setArr(sortedArr)

    };
    const resetArray = () => {
        setArr(startingArr);
        animateSorting();
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl my-10">Merge Sort</h1>
            <div className="flex flex-row">
                <div className="flex">
                    {arr.map((x, idx) => (
                        <span
                            key={idx}
                            className={`mx-4 bg-emerald-400 w-10 `}
                            style={{ height: `${(x + 1) * 10}px` }}
                        >
                            {x}
                        </span>
                    ))}

                </div>
            </div>
            <button
                className="rounded p-2 border-2 border-green-500 hover:bg-emerald-100 hover:text-black"
                onClick={resetArray}
            >
                Restart
            </button>

        </div>
    );
}
