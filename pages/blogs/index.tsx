import Layout from '../../components/layout'
import axios from 'axios'
import Success from '../../components/alert/success';

interface Blog {
  id: string,
  title: string,
  description: string
}

interface BlogsProps {
  dataBlog: Blog[]; 
}

export default function Blogs(props: BlogsProps) {
  const { dataBlog } = props; 
  const data = () => {
    if(dataBlog.length === 0) 
      return (
      <div className='flex justify-center w-full'>
        <h1 className='text-center items-center bg-sky-300 py-3 px-6 text-sky-700 rounded-md'>Data Kosong</h1>
      </div>
      )
      return dataBlog.map((blog: any) => (
        <div key={blog.id}>{blog.title} - {blog.description}</div>
      )
    )};

  return (
    <Layout>
          <h1 className='flex items-center gap-2 font-bold text-2xl my-5 border-b-2 pb-2'>Blogs</h1>
          {data()}
    </Layout>
  );
};

export async function getServerSideProps() {

  const res = await axios.get("http://localhost:3000/api/blog");
  const dataBlog = res.data;
  return {
    props: {
      dataBlog,
    },
  };
};
