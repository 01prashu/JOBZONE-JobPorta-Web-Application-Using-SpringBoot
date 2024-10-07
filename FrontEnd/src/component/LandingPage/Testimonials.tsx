import { Avatar } from "@mui/material"

import Rating from '@mui/material/Rating';
import { TestimonialsData } from "../Data/Data";
const Testimonials = () => {
    return (
        <div >
            <div className="text-4xl text-center mt-10 mb-5 text-mine-shaft-200">What <span className="text-bright-sun-400"> user</span> says about us?</div>
           <div className="flex justify-evenly">
           {
                TestimonialsData.map((data, index) => <div key={index} className="w-[22%] border border-bright-sun-400 gap-3 items-center p-2 m-3 hover:cursor-pointer">
                    <div className="flex flex-col items-center gap-2 m-2">
                        <Avatar src="avatar-7.png" />
                        <div className="text-mine-shaft-200 text-lg font-semibold">{data.name}</div>
                        <Rating name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
                    </div>
                    <div className="text-mine-shaft-300 text-xs text-center items-center p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, corporis. Illum molestiae consectetur temporibus quod!
                    </div>
                </div>)
            }
           </div>

        </div>
    )
}
export default Testimonials