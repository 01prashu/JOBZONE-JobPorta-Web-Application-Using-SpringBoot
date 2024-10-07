
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Companies from "../LandingPage/Companies"
import JobCategory from "../LandingPage/JobCategory"
import LandingPage from "../LandingPage/LandingPage"
import Subscribe from "../LandingPage/Subscribe"
import Testimonials from "../LandingPage/Testimonials"
import Working from "../LandingPage/Working"

const HomePage=()=>{
    return(
    <div className="min-h-[100vh] bg-mine-shaft-950 font-[poppins] font-semibold py-3">
        
        <LandingPage/>
        <Companies/>
        <JobCategory/>
        <Working/>
        <Testimonials/>
        <Subscribe/>
        
    </div>
)
}
export default HomePage