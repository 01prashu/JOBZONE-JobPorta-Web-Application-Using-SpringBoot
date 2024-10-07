import { IconBriefcase } from '@tabler/icons-react';
import { IconBellRinging } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { Avatar, NavLink } from '@mantine/core';
import { Indicator } from '@mantine/core';
import NavLinks from './NavLinks';
const Header = () => {
    return (
        <div className="w-full bg-mine-shaft-950 text-white flex justify-between px-6 items-center py-4  font-[poppins] font-semibold ">
            <div className='flex gap-3 items-center text-bright-sun-300'>
                <IconBriefcase stroke={2} className='h-8 w-8' />
                <div className='text-2xl font-semibold'>JOB ZONE</div>
            </div>
            <NavLinks/>
            <div className='flex gap-5 items-center'>

                <div className='bg-mine-shaft-900 p-2 rounded-full'>
                <Indicator inline size={8} offset={7} color="pink" processing>
                    <IconBellRinging stroke={1.5} />
                </Indicator>
                
                </div>
                
                <div className='flex justify-center items-center bg-mine-shaft-900 p-2 rounded-full'>
                

                <Indicator inline size={6} offset={5}  color="red" processing>
                <Avatar color="cyan" radius="xl">MK</Avatar>
                    </Indicator>
            
                </div>
                <div className='bg-mine-shaft-900 p-2 rounded-full'>
                <IconSettings />
                </div>

            </div>
        </div>
    )
}

export default Header;
