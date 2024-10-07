import SearchJob from "../FindJobs/SearchJob"
import SearchBox from "../FindTalent/SearchBox"
import Talents from "../FindTalent/Talents"

const FindTalent=()=>{
    return(
        <div className="min-h-[100vh] p-4 font-['poppins']">
            <SearchBox/>
            <Talents/>
        </div>
    )
}
export default FindTalent