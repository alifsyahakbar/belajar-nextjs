import { FaCheck } from "react-icons/fa";

export default function Success({ message}) {

    return (
        <div className=" bg-green-100 px-6 p-4 shadow-md text-center text-white rounded-md my-2 mx-auto fixed group hover:bg-green-500  top-5 right-10">
            <h1 className=" text-green-800 flex items-center gap-2 group-hover:text-white">{message} <FaCheck></FaCheck></h1>
        </div>
        )
}
