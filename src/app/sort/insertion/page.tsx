'use client'
import insertionSort from "@/algorithms/insertionSort";
import { useEffect, useState } from "react";
import AlgBox from "@/components/AlgBox";

export default function InsertionSort() {
    const startingArr = [2, 9, 5, 4, 3, 7, 6, 1, 8, 0];
    const [arr, setArr] = useState<number[]>(startingArr);
    const [newArray, setNewArray] = useState<number[]>([]);

    useEffect(() => {
        const { steps, steps2 } = insertionSort(startingArr);
        steps.forEach((step, idx) => {
            setTimeout(() => {
                setArr(step);
            }, 1000 * idx);
        });
        steps2.forEach((step, idx) => {
            setTimeout(() => {
                setNewArray(step);
            }, 1000 * idx);
        });
    }, []);

    const doAnimation = () => {
        const { steps, steps2 } = insertionSort(startingArr);
        steps.forEach((step, idx) => {
            setTimeout(() => {
                setArr(step);
            }, 1000 * idx);
        });
        steps2.forEach((step, idx) => {
            setTimeout(() => {
                setNewArray(step);
            }, 1000 * idx);
        });
    };

    const algContent = (
        <div className="bg-black flex min-w-3/4 min-h-24 ">
            <div className="flex">
                {newArray.map((x, idx) => (
                    <span
                        key={idx}
                        className="mx-2 bg-purple-400 w-4 md:w-6"
                        style={{ color: 'blue', height: `${(x + 1) * 15}px` }}
                    ></span>
                ))}
            </div>
            <div className="flex">
                {arr.map((x, idx) => (
                    <span
                        key={idx}
                        className="mx-2 bg-emerald-400 w-4 md:w-6"
                        style={{ color: 'blue', height: `${(x + 1) * 15}px` }}
                    ></span>
                ))}
            </div>
        </div>
    );

    return (
        <AlgBox algName="Insertion Sort" algContent={algContent} onStart={doAnimation} />
    );
}
