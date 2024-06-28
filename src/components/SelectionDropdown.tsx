import { useState } from "react"
import Link from "next/link"

const SelectionDropdown = () => {
    const [value, setValue] = useState(false)

    const handleSelect = async (e: any) => {
        console.log(e.target.value)
        setValue(await e.target.value)
    }

    return <div>
        <form className="max-w-sm mx-auto p-6">
            <label htmlFor="small" className="block mb-2 text-md text-gray-900 dark:text-white">Select a thing</label>
            <div className="flex flex-row gap-2">
                <select onChange={handleSelect} id="small" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                    <option selected>Choose a visual</option>
                    <option value="/">Home</option>
                    <option value="/sort/bubble/">Bubble</option>
                    <option value="/sort/selection/">Selection</option>
                    <option value="/sort/merge/">Merge</option>
                    <option value="/sort/insertion/">Insertion</option>
                </select>
                <button className="text-white border-2 border-green-400 w-24 text-md p-2 rounded-xl hover:bg-green-400"><Link href={`${value}`}>Select</Link>
                </button>
            </div>

        </form>


    </div >
}

export default SelectionDropdown;