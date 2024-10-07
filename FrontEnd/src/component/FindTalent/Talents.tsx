import TalentCard from "./TalentCard"


import Data from '../Data/TalentData';

const { Talent } = Data;
const Talents = () => {
    return (
        <div className="w-[100%]">
            <div>
                <div className="text-3xl mt-10 font-semibold text-mine-shaft-200">Talents</div>
            </div>
            {/* Use flex-wrap to allow cards to wrap onto the next line */}
            <div className="flex items-center justify-evenly flex-wrap ">
                {
                    Talent.map((job, index) => <TalentCard key={index} {...job} />)
                }
            </div>
        </div>
    );
};

export default Talents;