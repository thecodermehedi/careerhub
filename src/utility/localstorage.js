const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  const jobs = storedJobApplication ? JSON.parse(storedJobApplication) : [];
  return jobs;
};

const saveJobApplication = (id) => {
  const storedJobs = getStoredJobApplication();
  const exists = storedJobs.find((jobId) => jobId === id);
  if (!exists) {
    storedJobs.push(id);
    localStorage.setItem("job-applications", JSON.stringify(storedJobs));
    return false;
  } else {
    return true;
  }
};

export {saveJobApplication, getStoredJobApplication};
