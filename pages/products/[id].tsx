import React from 'react'
import Layout from '../../components/layout'
import Link from 'next/link'
import axios from 'axios'
import { FaArrowLeft} from "react-icons/fa"
import Image from 'next/image'

export default function Detail({ product }) {
  return (
    <Layout>
        <div className='my-10'>
            <div className='flex justify-between border-b-2 mb-5 pb-3'>
                <h1 className='flex items-center gap-2 font-bold text-2xl'>Details Product - <span className='text-slate-400 first-letter:uppercase'>{product.name}</span></h1>
                <Link href="/products" className='flex items-center gap-2 hover:bg-slate-50 p-2 rounded-lg text-lg font-semibold hover:underline'><FaArrowLeft></FaArrowLeft> Back</Link>
            </div>
            <div className='w-3/4 bg-slate-50 rounded-md p-6'>
                <table>
                    <tbody>
                    <tr>
                        <td className='w-[200px] pb-6 font-bold'>Image</td>
                        <td className='w-[15px] pb-6'>:</td>
                        <td className='pb-6'>
                            <img src={`${process.env.NEXT_PUBLIC_API_BACKEND}/assets/products/${product.image}`} alt={product.image} width={300} />
                        </td>
                   </tr>
                   <tr>
                        <td className='pb-6 font-bold'>Name</td>
                        <td className='pb-6'>:</td>
                        <td className='pb-6'>{product.name}</td>
                   </tr>
                   <tr>
                        <td className='pb-6 font-bold'>Category</td>
                        <td className='pb-6'>:</td>
                        <td className='pb-6'>{product.categorie.name}</td>
                   </tr>
                   <tr>
                        <td className='pb-6 font-bold'>Price</td>
                        <td className='pb-6'>:</td>
                        <td className='pb-6'>{product.price}</td>
                   </tr>
                   <tr>
                        <td className='pb-6 font-bold'>Stock</td>
                        <td className='pb-6'>:</td>
                        <td className='pb-6'>{product.stock}</td>
                   </tr>
                    </tbody>
                   
                </table>
            </div>
        </div>
    </Layout>
  )
}



export const getServerSideProps = async ({ query }) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/products/` + query.id);
    const product = await res.data.data;
  
    return {
      props: {
        product,
      },
    };
};


