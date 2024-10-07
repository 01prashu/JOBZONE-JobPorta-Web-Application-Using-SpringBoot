import Marquee from "react-fast-marquee"
import {companies} from "../Data/Data"

const Companies=()=>{
    return(
        <div className="mt-20">
            <div className="text-4xl text-center text-mine-shaft-200">Trusted by <span className="text-bright-sun-400">1000+</span> Companies</div>
            <Marquee pauseOnHover={true}>
                {
                    companies.map((company,index)=><div className="mx-7 mt-10  px-4 py-3 hover:bg-mine-shaft-800 px-4 py-3 rounded-xl  cursor-pointer"  key={index}>
                        <img className="h-14"src={`/companies/${company}.png`} alt={`${company}`}></img>
                    </div>)
                }
               
            </Marquee>
            
        </div>
    )
}
export default Companies