// import LogedinNavbar from "../Navbar/LogedinNavbar"
import SearchBar from "../SearchBar";
import JobCard from "../JobCard";
import jobData from '../../JobDummyData';
import { useEffect, useState } from "react";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";


function Main() {


  // firebase database - https://console.firebase.google.com/u/0/project/jobportal-d2833/firestore/databases/-default-/data/~2Fjobs - in chrome id-bivashchat
  const [jobs, setJobs] = useState([]);  // now here i have to use the useState hook to store the jobs data that i will fetch from the firebase database and then pass it to the JobCard component as props. initially i will set the jobs state to an empty array.


  const [customSearch, setCustomSearch] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);  // New state to trigger the reset


  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    let filters = [];

    
    if (jobCriteria.type && jobCriteria.type !== "unset") {
      filters.push(where("type", "==", jobCriteria.type));
    }
    if (jobCriteria.title && jobCriteria.title !== "unset") {
      filters.push(where("title", "==", jobCriteria.title));
    }
    if (jobCriteria.experience && jobCriteria.experience !== "unset") {
      filters.push(where("experience", "==", jobCriteria.experience));
    }
    if (jobCriteria.location && jobCriteria.location !== "unset") {
      filters.push(where("location", "==", jobCriteria.location));
    }

    // If no filters are applied, fetch all jobs
    if (filters.length === 0) {
      fetchJobs(); // Call fetchJobs to get all jobs if no filter is set
      return;
    }

    try {
      // Build the query with orderBy on "postedOn"
      const q = query(collection(db, "jobs"), ...filters, orderBy("postedOn", "desc"));

      // Execute the query
      const req = await getDocs(q);

      // Process the documents and push them to tempJobs
      req.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate(),
        });
      });

      // Update the jobs state with the filtered results
      setJobs(tempJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };




  // Function to reset filters and job search
  const resetFilters = () => {
    setResetTrigger(true);  // Trigger the reset in SearchBar
    fetchJobs();  // Fetch the default jobs without any filters
  }

  useEffect(() => {
    fetchJobs()
  }, [])



  return (
    <div className="mb-20">
      {/* <Navbar /> */}
      <div className="mt-10 flex flex-col gap-5 items-center justify-center ">
        <h1 className="text-5xl font-bold">
          Your ideal job awaits, start the search
        </h1>
        <p className="text-xl">Get latest job openings that best suits you!</p>
      </div>
      <SearchBar fetchJobsCustom={fetchJobsCustom} resetTrigger={resetTrigger} setResetTrigger={setResetTrigger} />
      {customSearch &&
        <button onClick={resetFilters} className="flex pl-[1250px] mb-2">
          {/* <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p> */}
          <p className="bg-[#26ae61] ml-4 px-10 py-2 rounded-md text-white">Clear Filters</p>

        </button>
      }
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}


export default Main