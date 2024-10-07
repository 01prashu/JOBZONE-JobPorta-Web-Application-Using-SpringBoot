import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
const TalentProfile=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-900  font-['poppins']">
            <Divider/>
            <div className="mx-5 my-5">
            <Link to="/find-talent">
            <Button variant="light" leftSection={<IconArrowLeft size={20}/>}  className="text-mine-shaft-200 bg-bright-sun-600"  >Back</Button>
            </Link>
            </div>
        </div>
    )
}
export default TalentProfile