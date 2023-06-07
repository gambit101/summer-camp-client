import { useEffect, useState } from "react";

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="mt-10">
            <div>
                <h2 className="text-4xl text-red-400 font-bold text-center my-2">--- Our Instructors ---</h2>
                <p className="text-center">Learn the game from any part of the country and stay fit</p>
            </div>
            <div className="grid grid-cols-3">
                {
                    instructors.map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructor.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-white">{instructor.name}</h2>
                            <p>{instructor.email}</p>
                            <div className="card-actions mt-4">
                                <button className="btn bg-red-500 text-black">See Classes</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;