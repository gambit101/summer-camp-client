import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Extra = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className="mt-10">
            <div className="my-10">
                <h2 className="text-4xl text-red-400 font-bold text-center my-2">--- Moving forward story ---</h2>
                <p className="text-center">Field performance will be much better than before</p>
            </div>
            <div className="grid grid-cols-3 mx-14" >
                <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos='fade-left'>
                    <figure><img className="rounded-xl" src="https://www.khelbei.com/media/wysiwyg/Niloy.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl text-center text-white">Niloy</h2>
                        <p className="text-2xl text-center">“ Earlier I used to have problems playing the leg side ball now, after taking the class I can play it fluently ”</p>

                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos='flip-right'>
                    <figure><img className="rounded-xl" src="https://www.khelbei.com/media/wysiwyg/Mohsin.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl text-center text-white">Mohsin</h2>
                        <p className="text-2xl text-center" >“ There is no good academy in the area, but I can learn the game from the best coaches, I can speak directly”</p>

                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos='fade-right'>
                    <figure><img className="rounded-xl" src="https://www.khelbei.com/media/wysiwyg/Niloy.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl text-center text-white">Humaira</h2>
                        <p className="text-2xl text-center">“ I didnt have time after office all day, now I can exercise at home ”</p>

                    </div>
                </div>
            </div>

            <div data-aos='flip-left'>
                <img className="w-full mt-10" src="https://www.khelbei.com/media/wysiwyg/Swapno.webp" alt="" />
            </div>

        </div>
    );
};

export default Extra;