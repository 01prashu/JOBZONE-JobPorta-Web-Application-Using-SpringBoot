import { IconBookmark, IconHeart, IconClock } from '@tabler/icons-react';
import { Text, Divider,Button } from '@mantine/core';
import { Link } from 'react-router-dom';
const TalentCard = (props: any) => {
    return (
        <div className="mt-6 bg-mine-shaft-900 rounded-lg p-4 w-[23%] hover:cursor-pointer hover:border border-bright-sun-500">
            {/* Header Section */}
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className=' bg-mine-shaft-800 p-2 rounded-lg'>
                        <img className="h-12 w-full rounded-lg" src="/avatar-7.png" alt="avatar-icon" />
                    </div>
                    <div>
                        <div className="text-xl font-semibold">{props.name}</div>
                        <div className="text-xs flex items-center">
                            {props.role} at {props.company}

                        </div>
                    </div>
                </div>
                <div>
                    <IconHeart stroke={2} />
                </div>
            </div>

            {/* Job Levels/Types (Optional) */}
            <div className="flex flex-wrap gap-2 text-xs m-3 items-center">
                {props.topSkills.map((skill: string, index: number) => (
                    <div key={index} className="py-1 px-2 bg-mine-shaft-950 rounded-md text-bright-sun-300 max-w-full">
                        {skill}
                    </div>
                ))}
            </div>

            {/* About Section */}
            <Text size="sm" lineClamp={2} className="text-mine-shaft-300">
                {props.about}
            </Text>

            <Divider my="sm" size="xs" />

            {/* Footer Section */}
            <div className="flex justify-between items-center">
                <div className="font-semibold">&#x20B9; {props.expectedPackage[0]} - {props.expectedPackage[1]} LPA</div>
                
                <div className="text-xs text-mine-shaft-300">{props.location}</div>
            </div>
            <Divider/>
            <div className='flex mt-2  items-center justify-between [&>*]:w-1/2'>
            <Link  to="/talent-profile" >
            <Button variant="outline" color="orange">Profile</Button></Link>

            <Button variant="outline" color="orange">Message</Button>
            </div>
        </div>
    );
};

export default TalentCard;
