import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';

const Subscribe = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex bg-mine-shaft-800 mt-12 rounded-xl w-[80%] items-center justify-center'>
      <div className="text-4xl  text-center mt-12 mb-5 text-mine-shaft-200">
        Never want to miss any <span className="text-bright-sun-400">job updates</span>
      </div>
      <div className='flex w-3/5 justify-self-auto gap-5 items-center bg-mine-shaft-800'>
        <TextInput
          variant="unstyled"
          placeholder="your@email.com"
          size='xl'
          styles={{
            input: {
              width: '300px',  // Increase width
              height: '50px',  // Increase height
              padding: '10px', // Add padding for better look
              backgroundColor: '#333333', // Background color of the input
              borderRadius: '8px', // Rounded corners
              color: '#ffffff',  // Text color
              border: '2px solid #FFD700', // Optional border color
            }
          }}
        />
        <Button
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          className='bg-bright-sun-300 rounded-lg h-12 p-2 text-mine-shaft-900 font-semibold'
        >
          Subscribe
        </Button>
      </div>
    </div>
    </div>
  )
}

export default Subscribe;
