import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;