// pages/blog.tsx
import Navbar from "../components/Navbar";
import Head from "next/head";


const Blog = () => {
    
    return (
        <>
            <Navbar />
            <Head>
                <title>Blog</title>
                <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet"></link>
            </Head>
            
           
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(./br.jpg)', backgroundSize: 'auto', backgroundRepeat: 'repeat'}}>
                <div className="flex flex-col items-center justify-center h-full">
                    {/* The rest of your blog page content */}
                </div>
            </div>
        </>
    );
};

export default Blog;
