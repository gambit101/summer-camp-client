import { useEffect, useState } from "react";

const Popular = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/info')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-4xl text-red-400 font-bold text-center my-2">--- Popular Courses ---</h2>
                <p className="text-center">Learn the game from any part of the country and stay fit</p>
            </div>
            <div className="grid grid-cols-3 mx-14">
                {
                    classes.map(cls => <div key={cls._id} className="card w-96 bg-base-100 shadow-xl image-full mt-6">
                        <figure><img src={cls.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title uppercase font-bold">{cls.name}</h2>
                            <p>{cls.details}</p>
                            <div className="card-actions justify-end">
                    <button className="btn bg-red-500 text-black">Buy Now</button>
                  </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Popular;