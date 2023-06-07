import { useEffect, useState } from "react";

const Class = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('info.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-4xl text-red-400 font-bold text-center my-2">--- Our Courses ---</h2>
                <p className="text-center">Learn the game from any part of the country and stay fit</p>
            </div>
            <div className="grid grid-cols-3 mx-14">
                {
                    classes.map(cls => <div key={cls._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={cls.image} alt="Shoes" className="rounded-xl w-80 h-96" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title uppercase text-white">{cls.name}</h2>
                            <h2 className="card-title">Instructor: {cls.instructor}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn bg-red-500 text-black">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Class;