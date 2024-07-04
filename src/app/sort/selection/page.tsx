'use client'
import selectionSort from "@/algorithms/selectionSort";
import { useEffect, useState } from "react";
import AlgBox from "@/components/AlgBox";

export default function SelectionSort() {
    const startingArr = [2, 9, 5, 4, 3, 7, 6, 1, 8, 0];
    const [arr, setArr] = useState<number[]>(startingArr);
    const [steps, setSteps] = useState<{ array: number[], indices: number[] }[]>([]);
    const [currentIndices, setCurrentIndices] = useState<number[]>([]);

    useEffect(() => {
        const { array, steps } = selectionSort(startingArr, 0);
        setSteps(steps);
    }, []);

    const showSort = () => {
        steps.forEach((step, idx) => {
            setTimeout(() => {
                setArr(step.array);
                setCurrentIndices(step.indices);
            }, 1000 * idx);
        });
    };

    const algContent = (
        <div className="bg-black flex">
            {arr.map((x, idx) => {
                const isComparing = currentIndices.includes(idx);
                return (
                    <span
                        key={idx}
                        className={`mx-2 w-4 md:w-6 ${isComparing ? 'bg-red-400' : 'bg-emerald-400'}`}
                        style={{ color: 'blue', height: `${(x + 1) * 15}px` }}
                    ></span>
                );
            })}
        </div>
    );

    return (
        <AlgBox algName="Selection Sort" algContent={algContent} onStart={showSort} />
    );
}
