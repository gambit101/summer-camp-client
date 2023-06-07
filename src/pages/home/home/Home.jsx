
import Banner from "../banner/Banner";
import Extra from "../extra/Extra";
import Instructors from "../instructors/Instructors";
import Popular from "../popular/Popular";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Instructors></Instructors>
            <Extra></Extra>
        </div>
    );
};

export default Home;