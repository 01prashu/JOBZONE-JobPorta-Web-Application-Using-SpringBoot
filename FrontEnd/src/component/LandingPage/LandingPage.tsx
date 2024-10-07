import { Center, Input } from '@mantine/core';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { textAlign } from '@mui/system';
import { IconSearch } from '@tabler/icons-react';

const LandingPage = () => {
  return (
    <div className="flex items-center px-28 mt-20 ">
      <div className="flex flex-col w-[52%] ">
        <div className="text-7xl font-bold text-mine-shaft-200 gap-8 px-5 py-3">Find Your <span className="text-bright-sun-400">Dream Job</span>  <span>With Us</span></div>
        <div className="text-2xl text-mine-shaft-200 px-5 gap-10">Good life begins with a good company. Start Explore thousands of job in one place.</div>
        <div className='flex gap-4 items-center mt-10' >
          <Input className="bg-mine-shaft-900 py-3 px-4 m-2 " size='xs' variant='unstyled' placeholder="Software Engineer"
            styles={{
              input: {
                padding: '10px 11px',  // Increase padding to affect both input and placeholder
                borderRadius: '6px',  // Rounded corners
                // Placeholder text color
              },

            }}
          />
          <Input className="bg-mine-shaft-900 py-3  px-4  " size="xs" variant='unstyled' placeholder="Full Time" styles={{
            input: {
              padding: '10px 11px',  // Increase padding to affect both input and placeholder
              borderRadius: '6px',
            },

          }} />

          <div>
            <div className='flex items-center justify-center h-full w-35 bg-bright-sun-300 p-5 border-r-0 '>
              <IconSearch stroke={2} className='h-[100%] ' />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[48%] items-center justify-center">
        <div className="w-[30rem] relative ">
          <img src="/student.png" ></img>
          <div className='absolute top-[-10%] end-[-30%] w-fit  border-bright-sun-400 border rounded-lg p-4 backdrop-blur-xl '>
            <div className='text-left font-semibold text-mine-shaft-200  '><span className="text-bright-sun-500 text-3xl">10k+ </span>got there <span className=''>dream job</span></div>
            <AvatarGroup max={4} >
              <Avatar alt="Remy Sharp" src="avatar-7.png" />
              <Avatar alt="Travis Howard" src="avatar-9.png" />
              <Avatar alt="Cindy Baker" src="student.png" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
          </div>
          <div className='absolute top-[60%] end-[-30%] w-fit  border-bright-sun-400 border rounded-lg p-3 backdrop-blur-xl '>
            <div className='flex items-center justify-center'>
                <div className='w-10 h-10 p-2 m-1 bg-mine-shaft-900 rounded-md gap-1'>
                  <img src='/google.png'></img>
                </div>
                <div className='text-mine-shaft-200 text-sm'>
                  <div>Software Engineer</div>
                  <div className='text-xs'>Bengluru</div>
                </div>
            </div>
            <div className='flex items-center gap-3 text-mine-shaft-200 text-xs'>
              <span>1 day ago</span>
              <span>1000+ Applicants</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default LandingPage