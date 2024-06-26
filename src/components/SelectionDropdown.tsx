import { useState } from "react"
import Link from "next/link"

const SelectionDropdown = () => {
    const [value, setValue] = useState(false)

    const handleSelect = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }

    return <div>
        <form className="max-w-sm mx-auto">
            <label htmlFor="small" className="block mb-2 text-3xl text-gray-900 dark:text-white">Select a thing</label>
            <select onChange={handleSelect} id="small" className="block w-full p-4 mb-6 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                <option selected>Select</option>
                <option value="/">Home</option>
                <option value="/sort/bubble">Bubble</option>
                <option value="/sort/selection">Selection</option>
                <option value="/sort/merge">Merge</option>
                <option value="/sort/insertion">Insertion</option>
            </select>
        </form>
        <div className="flex justify-center">
            <button className="text-white border-2 border-green-400 w-32 text-xl p-4 rounded-xl hover:bg-green-400"><Link href={`${value}`}>Go</Link>
            </button>
        </div>
    </div >
}

export default SelectionDropdown;