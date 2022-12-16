import { FaTimes, FaCheck } from "react-icons/fa";

export default function Error({ message }) {

    return (
        <div className=" bg-red-100 px-6 p-4 shadow-md text-center text-white rounded-md my-2 mx-auto fixed group hover:bg-red-500  top-5 right-10">
            <h1 className=" text-red-800 flex items-center gap-2 group-hover:text-white">{message} <FaCheck></FaCheck> <button className="cursor-pointer"><FaTimes size={20}/></button></h1>
        </div>
        )
}
