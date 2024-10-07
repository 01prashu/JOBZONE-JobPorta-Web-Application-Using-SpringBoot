import jobsData from "../Data/Jobsdata"
import JobCard from "./JobCard"

const Job =()=>{
    return(
        <div className="py-7 ">
            <div>
                <div className="text-3xl font-semibold text-mine-shaft-200">Recommended Jobs</div>
            </div>
            <div className="flex gap-2">
            {
                jobsData.map((job,index)=><JobCard key={index} {...job} />)
            }
            </div>
            
        </div>
    )
}
export default Job