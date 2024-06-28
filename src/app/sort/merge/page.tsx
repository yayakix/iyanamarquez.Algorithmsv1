'use client'
import Image from "next/image";
// import mergeWithSteps from "@/algorithms/mergeSort";
import wrappedMergeSort from "@/alg-practice/mergesortprac";
import { useEffect, useState } from "react";


const NodeComponent = ({ node, sorted }: any) => {

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
                        // borderRadius: 8,
                        // minWidth: 100,
                    }}
                >
                    {node.leftChild && (
                        <div style={{}}>
                            /
                            <NodeComponent sorted={sorted} node={node.leftChild} />
                        </div>
                    )}
                    {node.rightChild && (
                        <div style={{}}>
                            \
                            <NodeComponent sorted={sorted} node={node.rightChild} />
                        </div>
                    )}
                </div>
            )}
    </div>
}

const startingArr = [5, 4, 7, 3, 1, 6, 8, 2, 9]
let solution = wrappedMergeSort(startingArr)

export default function MergeSort() {
    const startingArr = [5, 4, 7, 3, 1, 6, 8, 2, 9]
    const [sorted, setSorted] = useState(false);
    const [sortedArr, setSortedArr] = useState(startingArr)
    useEffect(() => {
        setSortedArr(solution.sortedArray)

    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row items-center ">
                <h1 className="text-xl ">Merge Sort</h1>
                <button onClick={() => setSorted(!sorted)} className="p-0 h-10 mx-4 mb-2 rounded w-16 border-2 border-green-500 hover:bg-emerald-100 hover:text-black ">
                    {sorted ? "Unsort" : "Sort"}</button>
            </div>

            <div className="bg-black flex border border-white rounded mb-4 min-w-3/4 min-h-24 p-4 pb-0 ">
                <div className="flex flex-col justify-center items-center">
                    {sorted && sortedArr}
                    <NodeComponent node={solution.metadata.node} sorted={sorted} />

                </div>

            </div>

        </div>
    );
}
