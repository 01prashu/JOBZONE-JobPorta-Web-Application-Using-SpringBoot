import { IconBookmark, IconClock } from '@tabler/icons-react';
import { Text, Divider } from '@mantine/core';

const JobCard = (props: any) => {
  return (
    <div className="mt-6 bg-mine-shaft-900 rounded-lg p-4 w-[22%] hover:cursor-pointer hover:border border-bright-sun-500">
      {/* Header Section */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <img className="h-7" src={props.logo} alt={props.company} />
          </div>
          <div>
            <div className="text-xl font-semibold">{props.title}</div>
            <div className="text-xs flex items-center">
              {props.company}
              <span className="font-extrabold mx-1">&#xb7;</span>
              {props.applicants} Applicants
            </div>
          </div>
        </div>
        <div>
          <IconBookmark stroke={2} />
        </div>
      </div>

      {/* Job Levels/Types */}
      <div className="flex gap-4 text-xs m-3 items-center [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-950 [&>div]:rounded-md [&>div]:text-bright-sun-300">
        {props.levels.map((level: string, index: number) => (
          <div key={index}>{level}</div>
        ))}
      </div>

      {/* Job Description */}
      <Text size="sm" lineClamp={2} className="text-mine-shaft-300">
        {props.description}
      </Text>

      <Divider my="sm" size="xs" />

      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="font-semibold">&#8360; {props.salary}</div>
        <div className="flex items-center text-xs">
          <IconClock stroke={1} />
          {props.postedDate}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
