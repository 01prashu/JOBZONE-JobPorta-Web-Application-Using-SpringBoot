// src/components/FindJobPage.tsx

import Job from "../FindJobs/Job";
import SearchJob from "../FindJobs/SearchJob";

// Import your datasets


const FindJobPage: React.FC = () => {
  
 

  return (
    <div className="min-h-[100vh] p-4">
      <SearchJob/>
      <Job/>
    </div>
  );
}

export default FindJobPage;
