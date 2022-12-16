import React, { useState } from 'react'
import Layout from '../../components/layout/index'
import axios from 'axios'
import { FaEdit, FaTrashAlt, FaEye, FaRegPaperPlane} from "react-icons/fa"
import { useRouter, Router } from 'next/router'
import Success from '../../components/alert/success'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, SubmitHandler } from "react-hook-form"

export default function Products(props) {

    const { dataProducts, dataCategorys } = props;
    const router = useRouter();

    const [validation, setValidation] = useState({});

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [ visible, setVisible ] = useState(false);
    const hidden = (() => {
        setVisible(!visible);
    });

    const refreshData = () => {
        router.replace(router.asPath);
    }

    const deleteProduct = async ({id, name}) => {
        if(confirm(`Yakin ingin dihapus?`)) {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/products/${id}`);
            refreshData();
            return <Success message={"Data berhasil ditambahkan"}></Success>
        } else {
            return false;
        }
    }
    
    const editProduct = async () => {
        alert("Tidak dapat edit product")
    }

    const [name, setName] = useState('');
    const [categorie_id, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState('');

    const handleFileChange = (e) => {
        e.preventDefault();

        const imageData = e.target.files[0]
        if (!imageData.type.match('image.*')) {
            setImage('');
        }
        setImage(imageData);
    }

    // submit inset data product
    const onSubmit = async (e: any) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('categorie_id', categorie_id);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('image', image);
        
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/products`, formData)
        .then((we) => {
            if(we.status !== 200) {
                alert("error tuh")
            } else {
                router.push('/products');
                alert("Data berhasil ditambahkan")
            }
        })
        .catch((error) => {
            setValidation(error.response.data);
        })
    }

  return (
        <Layout>
            <div className='mt-10'>
                <h1 className='flex items-center gap-2 font-bold text-2xl mb-5 border-b-2 pb-2'>Products</h1>
                <button onClick={hidden} className='flex items-center gap-2 bg-indigo-700 text-white px-4 py-2 rounded-md text-sm my-2 hover:bg-indigo-800 transition-all duration-300'>
                    Add Products
                </button>
                    {visible && (
                    <motion.div 
                        initial={{y: "-10%"}}
                        animate={{y: 10}}
                        exit={{y: "-10%"}}
                        transition={{duration: 0.5, ease: 'easeOut'}}
                       >
                    <form onSubmit={handleSubmit(onSubmit)} className='mb-12 mt-2 border-b py-4 transition-all duration-300 ease-in-out' >
                        <div className='w-2/3 grid  grid-cols-2 gap-5 transition-all duration-300 ease-in-out'>
                            <input type="text" autoComplete='off' value={name}   {...register("name", { required: true })} 
                            aria-invalid={errors.name ? "true" : "false"} onChange={(e) => setName(e.target.value)} name='name' placeholder='Name product' className='w-full p-2 border rounded-md focus:outline-indigo-400'/>
                            {errors.name?.type === 'required' && <p className='absolute top-14 text-red-500 text    -xs'>Name is required</p>}
                            <input type="file" onChange={handleFileChange} autoComplete={"off"} className='w-full p-2 border rounded-md file:text-indigo-400 file:border-none file:rounded-md file:mr-6'/>
                            <input type="number" autoComplete='off' value={price} onChange={(e) => setPrice(e.target.value)} name='price' placeholder='Price' className='w-full p-2 border rounded-md focus:outline-indigo-400'/>
                            <input type="number"autoComplete='off' value={stock} onChange={(e) => setStock(e.target.value)} placeholder='Stock' className='w-full p-2 border rounded-md focus:outline-indigo-400'/>
                            <select  name="categorie_id" onChange={(e) => setCategory(e.target.value)} className='p-2 col-span-2 border rounded-md focus:outline-indigo-400'>
                                <option value="">-- Choose Category --</option>;
                                {dataCategorys.map((categ) => (
                                   <option className='m-4 first-letter:uppercase' key={categ.id} value={categ.id}>{categ.name}</option>
                                ))};
                            </select>
                        </div>
                        <button type='submit' className='flex justify-center items-center gap-2 text-sm bg-indigo-700 rounded-md text-white px-6 py-2 mt-4 hover:bg-indigo-800 transition-all duration-150'>Send <FaRegPaperPlane></FaRegPaperPlane></button>
                    </form>
                    </motion.div> )}
                <table className='min-w-full table-auto text-center mt-4'>
                    <thead>
                        <tr className='bg-slate-800 text-white' >
                            <th className='px-1 py-2'>Image</th>
                            <th className='px-1 py-2'>Name</th>
                            <th className='px-1 py-2'>Price</th>
                            <th className='px-1 py-2'>Stock</th>
                            <th className='px-1 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataProducts.map((product) => (
                            <tr key={product.id} className=' bg-slate-100 border-b-2 border-slate-300 '>
                                <td className='py-2'>
                                    <img className='w-20' src={`${process.env.NEXT_PUBLIC_API_BACKEND}/assets/products/${product.image}`} alt={product.image}/>
                                </td>
                                <td className='py-2'>
                                    <button onClick={() => router.push(`/products/${product.id}`)} className='font-semibold first-letter:uppercase'>{product.name}</button> 
                                </td>
                                <td className='py-2'>{product.price}</td>
                                <td className='py-2'>{product.stock}</td>
                                <td className='flex justify-center gap-x-4 py-2 '>
                                    <button onClick={() => router.push(`products/${product.id}`)}><span className='p-1'><FaEye size={20} color={"gray"}/></span></button>
                                    <button onClick={() => editProduct()}><span className='p-2'><FaEdit size={20} color={"rgb(34,197,94)"}/></span></button>
                                    <button onClick={() => deleteProduct(product.id)} ><span><FaTrashAlt size={20} color={"rgb(222,67,67)"}/></span></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {dataProducts.length == 0 ? <div className='w-full mt-4 text-center'>Tidak Ada data</div> : ""}
            </div>
        </Layout>
  )
}

export async function getServerSideProps() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/products`); //api laravel
    const dataProducts = await res.data.product.data;
    const dataCategorys = await res.data.category;
    return {
        props: {
            dataProducts, dataCategorys
        }
    };
};




