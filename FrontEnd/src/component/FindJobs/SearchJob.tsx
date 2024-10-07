
import Job from "../FindJobs/Job";
import { IconSearch, IconMapPin, IconBriefcase, IconUser } from '@tabler/icons-react'; // Import your icons
import { MultiSelectCreatable } from "./MultiSelect";
import { Grid } from "@mantine/core";
import { jobTitles, jobTypes, locations,experiences} from "../Pages/data";
import { Button } from "@mantine/core";
const SearchJob=()=>{
    const filters = [
    { label: "Job Title", data: jobTitles, icon: <IconBriefcase size={20} /> },
    { label: "Location", data: locations, icon: <IconMapPin size={20} /> },
    { label: "Job Type", data: jobTypes, icon: <IconSearch size={20} /> },
    { label: "Experience", data: experiences, icon: <IconUser size={20} /> },
    
  ];
  const handleSearch = () => {
    // Implement search logic here
    console.log("Performing search...");
  };
    return(
        <div>
            <Grid gutter="md">
        {filters.map((filter, index) => (
          <Grid.Col span={3} key={index}>
            <MultiSelectCreatable label={filter.label} data={filter.data} icon={filter.icon} />
          </Grid.Col>
        ))}
      </Grid>
      <Button
        mt="sm" // margin-top for spacing
        onClick={handleSearch}
        className="bg-bright-sun-600 text-mine-shaft-200"
         // optional: makes the button full width
      >
        Search
      </Button>
      
        </div>
    )
}
export default SearchJob