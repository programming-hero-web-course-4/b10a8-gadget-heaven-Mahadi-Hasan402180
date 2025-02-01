
import { NavLink } from 'react-router-dom';
import bannerimg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="relative">
            
            <div className="hero bg-[#9538E2] text-white rounded-2xl relative ">
                <div className="hero-content text-center relative z-10">
                    <div>
                        <h1 className="text-5xl font-bold">
                            Upgrade Your Tech Accessories with <br /> Gadget Heaven Accessories
                        </h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <NavLink to='/dashboard'><button className="btn btn-primary bg-amber-50 rounded-2xl text-[#9538E2] mb-36">
                            Shop Now
                        </button></NavLink>
                    </div>
                </div>

                
                <div className="absolute top-[70%] ">
                    <img
                        className="w-3xl h-96 mx-auto rounded-2xl border-8 border-t-fuchsia-400 shadow-2xl border-amber-100"
                        src={bannerimg}
                        alt=""
                    />
                </div>
            </div>
        </div>

    );
};

export default Banner;