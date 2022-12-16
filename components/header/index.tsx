import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaShoppingCart } from "react-icons/fa"

export default function Header() {
  const router = useRouter();
  return (
    <div className='flex w-full bg-gradient-to-r from-indigo-900 to bg-indigo-600 p-5'>
        <div className='flex w-full justify-between text-center mx-5 items-center'>
            <div className='flex'>
                <h1 className='font-semibold text-2xl text-white'>Belajar Next JS</h1>
                <ul className='flex gap-2 items-center text-white ml-9'>
                    <li className={router.pathname == "/" ? "flex px-4 py-1 bg-white text-slate-900 rounded-md" : "flex px-4 py-1 hover:bg-white hover:text-slate-900 rounded-md transition-all duration-200"}>
                        <Link href="/" className='font-bold'>Home</Link>
                    </li>
                    {/* <li className={router.pathname == "/blogs" ? "flex px-4 py-1 bg-white text-slate-900 rounded-md" : "flex px-4 py-1 hover:bg-white hover:text-slate-900 rounded-md transition-all duration-200"}>
                        <Link href="/blogs" className='font-bold '>Blogs</Link>
                    </li> */}
                    <li className={router.pathname == "/products" ? "flex px-4 py-1 bg-white text-slate-900 rounded-md" : "flex px-4 py-1 hover:bg-white hover:text-slate-900 rounded-md transition-all duration-200"}>
                        <Link href="/products" className='font-bold '>Products</Link>
                    </li>
                    <li className={router.pathname == "/login" ? "flex px-4 py-1 bg-white text-slate-900 rounded-md" : "flex px-4 py-1 hover:bg-white hover:text-slate-900 rounded-md transition-all duration-200"}>
                    </li>
                </ul>
            </div>
            <div className='text-white flex items-center gap-4'>
                <ul className='flex gap-2 items-center text-white ml-9'>
                    <li className='flex px-4 py-1 hover:bg-white hover:text-slate-900 rounded-md transition-all duration-200'>
                        <Link href="/login" className='font-bold '>Login</Link>
                    </li>
                </ul>
                <Link href="#"><FaShoppingCart></FaShoppingCart></Link>
            </div>
        </div>
    </div>
  )
}
