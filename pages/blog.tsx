import Navbar from "../components/Navbar";

const Blog = () => {
    // Other code for the Blog component

    return (
        <>
            <Navbar /> 
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(./br.jpg)', backgroundSize: 'auto', backgroundRepeat: 'repeat'}}>
                <div className="flex flex-col items-center justify-center h-full">
                    {/* The rest of your blog page content */}
                </div>
            </div>
        </>
    );
};

export default Blog;
