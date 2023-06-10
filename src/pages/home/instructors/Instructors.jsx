import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="mt-10"  data-aos='fade-down'>
            <div>
                <h2 className="text-4xl text-red-400 font-bold text-center my-2">--- Popular Instructors ---</h2>
                <p className="text-center">Learn the game from any part of the country and stay fit</p>
            </div>
            <div className="grid grid-cols-3">
                {
                    instructors.map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructor.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{instructor.name}</h2>
                            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                            {/* <div className="card-actions">
                                <button className="btn bg-red-500 text-black">Details</button>
                            </div> */}
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructors;