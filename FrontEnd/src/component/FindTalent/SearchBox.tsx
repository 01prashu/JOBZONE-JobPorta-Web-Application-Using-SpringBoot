// Import your icons
import { MultiSelectCreatable } from '../FindJobs/MultiSelect';
import { Grid,  Button, Input, InputLabel } from "@mantine/core";
import Data from '../Data/TalentData';

const { SearchFiled, Talent } = Data;



const SearchBox = () => {

    const handleSearch = () => {
        // Implement search logic here
        console.log("Performing search...");
    };

    return (
        <div>
            {/* Flexbox container to keep everything in a single row */}
            <div className="flex items-center  justify-center space-x-4">
                {/* Input field for Talent Name with Icon inside */}
                
                <Input 
                    
                    className="w-1/4 mt-8" // Adjust width so it matches others
                    size="sm"  
                    radius="md" 
                    placeholder="Enter Talent Name"
                      // Icon inside input
                />

                {/* MultiSelectCreatable boxes */}
                {SearchFiled.map((filter, index) => (
                    <div className="w-1/4 font-semibold" key={index}>
                        <MultiSelectCreatable 
                            label={filter.title} 
                            data={filter.options} 
                            icon={<filter.icon />} 
                        />
                    </div>
                ))}

                {/* Search Button */}
                
            </div>
            <Button
                    onClick={handleSearch}
                    className="bg-bright-sun-600 text-mine-shaft-200 mt-5 "
                >
                    Search
                </Button>
        </div>
    );
}

export default SearchBox;
