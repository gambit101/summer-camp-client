import { useEffect, useState } from "react";
import ClassCard from "./classCard/ClassCard";

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
                    classes.map(cls => <ClassCard key={cls._id} cls={cls}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Class;