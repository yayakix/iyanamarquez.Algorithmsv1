'use client'
import bubbleSort from "@/algorithms/bubbleSort";
import { useEffect, useState } from "react";
import AlgBox from "@/components/AlgBox";

export default function BubbleSort() {
    const startingArr = [2, 9, 5, 4, 3, 7, 6, 1, 8, 0];
    const [arr, setArr] = useState<number[]>(startingArr);
    const [steps, setSteps] = useState<number[][]>([]);

    useEffect(() => {
        const { steps } = bubbleSort(startingArr);
        setSteps(steps);
    }, []);

    const showShort = () => {
        setArr(startingArr);
        steps.forEach((step, idx) => {
            setTimeout(() => {
                setArr(step);
            }, 500 * idx);
        });
    };

    const algContent = (
        <div className="flex h-36 justify-center">
            {arr.map((x, idx) => (
                <span
                    key={idx}
                    className="mx-2 bg-emerald-400 w-4 md:w-6"
                    style={{ color: 'blue', height: `${(x + 1) * 15}px` }}
                ></span>
            ))}
        </div>
    );

    return (
        <AlgBox algName="Bubble Sort" algContent={algContent} onStart={showShort} />
    );
}
