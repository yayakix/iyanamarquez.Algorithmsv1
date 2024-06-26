'use client'
import Image from "next/image";
// import mergeWithSteps from "@/algorithms/mergeSort";
import wrappedMergeSort from "@/alg-practice/mergesortprac";
import { useEffect, useState } from "react";


const NodeComponent = ({ node, sorted }) => {

    return <div className="flex items-center flex-col text-center">
        <div>{(sorted ? node.sortedArray : node.unsortedArray).join(", ")}</div>
        {(node.leftChild ||
            node.rightChild) && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "10px",
                        border: "1px solid #000",
                        borderRadius: 8,
                        minWidth: 100,
                    }}
                >
                    {node.leftChild && (
                        <div style={{ minWidth: 100 }}>
                            <NodeComponent sorted={sorted} node={node.leftChild} />
                        </div>
                    )}
                    {node.rightChild && (
                        <div style={{ minWidth: 100 }}>
                            <NodeComponent sorted={sorted} node={node.rightChild} />
                        </div>
                    )}
                </div>
            )}
    </div>
}

const startingArr = [5, 4, 7, 3, 1, 6, 8, 2, 9]
let solution = wrappedMergeSort(startingArr)

export default function MergeSort(props: { array: number[] }) {
    const startingArr = [5, 4, 7, 3, 1, 6, 8, 2, 9]
    const [sorted, setSorted] = useState(false);
    const [sortedArr, setSortedArr] = useState(startingArr)
    useEffect(() => {
        setSortedArr(solution.sortedArray)

    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl my-10">Merge Sort</h1>
            <div className="flex flex-row">
                <div className="flex">
                    <NodeComponent node={solution.metadata.node} sorted={sorted} />
                </div>
            </div>
            <button onClick={() => setSorted(!sorted)}
                className="rounded p-2 border-2 border-green-500 hover:bg-emerald-100 hover:text-black"
            >
                {sorted ? "Sort" : "Unsort"}
            </button>
            {sorted && sortedArr}

        </div>
    );
}
