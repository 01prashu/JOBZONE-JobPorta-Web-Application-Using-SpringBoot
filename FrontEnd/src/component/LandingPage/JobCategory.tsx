import { Carousel } from '@mantine/carousel';
import {jobCategories} from '../Data/Data'
const JobCategory = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center mb-5 text-mine-shaft-200">Browse <span className="text-bright-sun-400"> Job</span> Category</div>

            <div className="text-lg text-mine-shaft-200 text-center w-1/2 mx-auto">Explore diverse job opprtunities tailored to your skills. Start your career journey today!</div>
            <Carousel slideSize="20%" slideGap="md"  loop>
                {
                    jobCategories.map((category, index)=><Carousel.Slide>
                        <div  key={index}  className="flex flex-col w-[94%] items-center text-center mt-7 gap-2 border border-bright-sun-400 p-5 rounded-xl m-3
                        hover:cursor-pointer hover:shadow-[0_0_5px_black] !shadow-bright-sun-700">
                            <div className="p-2 bg-bright-sun-300 rounded-full">
                                <img className="h-20 w-20 rounded-md " src={category.imageUrl} alt=""></img>
                            </div>
                            <div className="text-mine-shaft-300 text-lg">{category.jobName}</div>
                            <div className="text-mine-shaft-300 text-xs  text-center ">{category.description}</div>
                            <div className="text-bright-sun-400 text-center">{category.jobsPosted}</div>
                        </div>
                    </Carousel.Slide>)
                }
            </Carousel>

        </div>
    )
}
export default JobCategory