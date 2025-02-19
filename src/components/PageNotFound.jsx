import { Link } from 'react-router';
const PageNotFound = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-3xl font-bold">404 | Page Not Found</h1>
                <div>
                    <button className="w-12 h-12 border-2 border-[#159A9C] rounded-full flex justify-center items-center shadow-lg text-3xl font-extrabold absolute md:bottom-10 md:right-19 bottom-1 right-1 text-[#159A9C] hover:cursor-pointer hover:bg-[#159A9C] hover:text-white duration-300 animate__animated animate__zoomIn animate__infinite animate__slower">
                        <Link to="/">
                            <i className="ri-home-7-line "></i>
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;
