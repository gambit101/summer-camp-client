import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>

                <div className='w-50 mx-auto'>
                    <img style={{ height: '400px' }} className=' mx-auto ' src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-21190.jpg?size=626&ext=jpg&ga=GA1.1.596352723.1673069920&semt=sph" alt="" />
                </div>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-warning '>
                        <span className='sr-only text-warning'>Error</span> {status || 404}
                    </h2>
                    <p className='text-danger font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-bold btn bg-red-500 border-none rounded-xl text-white'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;