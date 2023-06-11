import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';


const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item  w-full mt-3">
                <div className="w-1/2">
                    <img src="https://img.freepik.com/free-photo/winner-young-purposeful-basketball-player-training-practicing-action_155003-28759.jpg?t=st=1686416172~exp=1686416772~hmac=66c9a0403a8e6029e0395fd3576c176b0230fd1656961af428c31991d4d37d3e" className="h-[500px] rounded-xl ml-5 w-1/2" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide3" className="btn btn-circle bg-red-500 border-none">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-red-500 border-none">❯</a>
                </div>
                <div className="bg-red-200 w-1/2 mr-5 rounded-r-xl">
                    <h2 className='text-5xl flex ml-10 text-black font-bold mt-5'><Typewriter
                        options={{
                            strings: ['Welcome to Sports Hero!'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h2>
                    <h2 className="text-3xl text-center my-4 text-black font-semibold">Learn the game from any part <br /> of the country and stay fit</h2>
                    <div className="avatar placeholder my-6  ml-28">
                        <div className="text-neutral-content rounded-full h-28 w-28 bg-black">
                            <span className="text-3xl text-center font-extrabold text-yellow-300">50% off</span>
                        </div>
                        <p className="items-center ml-4 pt-10 text-4xl text-black">On all Classes!!!</p>
                    </div>
                    
                    <div className="text-center">
                        <Link to='signUp'><button className="btn bg-red-500 border-none text-black font-bold">Register Now</button></Link>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full  mt-3">
                <div className="w-1/2">
                    <img src="https://images.unsplash.com/photo-1484482340112-e1e2682b4856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80" className="h-[500px] rounded-xl ml-5 w-1/2" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide1" className="btn btn-circle bg-red-500 border-none">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-red-500 border-none">❯</a>
                </div>
                <div className="bg-red-200 w-1/2 mr-5 rounded-r-xl">
                    <h2 className='text-5xl flex ml-10 text-black font-bold mt-5'><Typewriter
                        options={{
                            strings: ['Welcome to Sports Hero!'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h2>
                    <h2 className="text-3xl text-center my-4 text-black font-semibold">Learn the game from any part <br /> of the country and stay fit</h2>
                    <div className="avatar placeholder my-6  ml-28">
                        <div className="text-neutral-content rounded-full h-28 w-28 bg-black">
                            <span className="text-3xl text-center font-extrabold text-yellow-300">50% off</span>
                        </div>
                        <p className="items-center ml-4 pt-10 text-4xl text-black">On all Classes!!!</p>
                    </div>
                    
                    <div className="text-center">
                        <Link to='signUp'><button className="btn bg-red-500 border-none text-black font-bold">Register Now</button></Link>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full  mt-3">
                <div className="w-1/2">
                    <img src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="h-[500px] rounded-xl ml-5 w-1/2" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide2" className="btn btn-circle  bg-red-500 border-none">❮</a>
                    <a href="#slide1" className="btn btn-circle  bg-red-500 border-none">❯</a>
                </div>
                <div className="bg-red-200 w-1/2 mr-5 rounded-r-xl">
                    <h2 className='text-5xl flex ml-10 text-black font-bold mt-5'><Typewriter
                        options={{
                            strings: ['Welcome to Sports Hero!'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h2>
                    <h2 className="text-3xl text-center my-4 text-black font-semibold">Learn the game from any part <br /> of the country and stay fit</h2>
                    <div className="avatar placeholder my-6  ml-28">
                        <div className="text-neutral-content rounded-full h-28 w-28 bg-black">
                            <span className="text-3xl text-center font-extrabold text-yellow-300">50% off</span>
                        </div>
                        <p className="items-center ml-4 pt-10 text-4xl text-black">On all Classes!!!</p>
                    </div>
                    
                    <div className="text-center">
                        <Link to='signUp'><button className="btn bg-red-500 border-none text-black font-bold">Register Now</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;