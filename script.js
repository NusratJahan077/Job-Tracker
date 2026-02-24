// ====== VARIABLES ======
const jobs = [
  { id:1, company:"Google", position:"Frontend Developer", salary:"$120,000", description:"Develop scalable user interfaces using React and modern web technologies.", status:"none" },
  { id:2, company:"Microsoft", position:"Backend Developer", salary:"$115,000", description:"Build secure APIs and scalable backend systems.", status:"none" },
  { id:3, company:"Amazon", position:"Cloud Engineer", salary:"$130,000", description:"Manage AWS infrastructure and deployment pipelines.", status:"none" },
  { id:4, company:"Tesla", position:"Software Engineer", salary:"$125,000", description:"Develop internal tools for automation and analytics.", status:"none" },
  { id:5, company:"Meta", position:"UI/UX Designer", salary:"$90,000", description:"Design intuitive user experiences for web platforms.", status:"none" },
  { id:6, company:"Netflix", position:"DevOps Engineer", salary:"$140,000", description:"Maintain CI/CD systems and monitoring infrastructure.", status:"none" },
  { id:7, company:"Apple", position:"iOS Developer", salary:"$135,000", description:"Build high-performance iOS applications.", status:"none" },
  { id:8, company:"Spotify", position:"Data Analyst", salary:"$100,000", description:"Analyze streaming data to improve user engagement.", status:"none" }
];

let currentTab = "all";

// DOM Elements
const jobContainer = document.getElementById("jobsContainer");
const emptyState = document.getElementById("emptyState");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");
const tabButtons = document.querySelectorAll(".tabBtn");

// ====== FUNCTIONS ======


function renderJobCard(job) {
  return `
    <div class="p-3 mb-3 bg-gray-50 rounded-md shadow-sm">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="font-bold">${job.company}</h3>
          <p class="text-gray-600">${job.position}</p>
          <p class="text-sm font-semibold mt-1">${job.salary}</p>
          <p class="text-sm mt-1">${job.description}</p>
        </div>
        <button onclick="deleteJob(${job.id})" class="text-red-500 font-bold">X</button>
      </div>
      <div class="flex gap-2 mt-2">
        <button onclick="setStatus(${job.id},'interview')" class="px-2 py-1 rounded-sm ${job.status==='interview'?'bg-green-500 text-white':'bg-gray-200'}">
          Interview
        </button>
        <button onclick="setStatus(${job.id},'rejected')" class="px-2 py-1 rounded-sm ${job.status==='rejected'?'bg-red-500 text-white':'bg-gray-200'}">
          Rejected
        </button>
      </div>
    </div>
  `;
}

// Render all jobs + update dashboard
function updateDashboardAndJobs() {
  const displayedJobs = currentTab === "all" ? jobs : jobs.filter(j => j.status === currentTab);

  jobContainer.innerHTML = displayedJobs.length ? displayedJobs.map(renderJobCard).join('') : "";

  emptyState.classList.toggle("hidden", displayedJobs.length > 0);

  totalCount.innerText = jobs.length;
  interviewCount.innerText = jobs.filter(j => j.status === "interview").length;
  rejectedCount.innerText = jobs.filter(j => j.status === "rejected").length;

  tabCount.innerText = `${displayedJobs.length} Jobs`;
}

// Set status
function setStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  job.status=status
  updateDashboardAndJobs();
}

// Delete job
function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  if(index !== -1) jobs.splice(index,1);
  updateDashboardAndJobs();
}

// Tab click handling
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => {
      b.classList.remove("bg-blue-500","text-white");
      b.classList.add("bg-gray-200");
    });
    btn.classList.remove("bg-gray-200");
    btn.classList.add("bg-blue-500","text-white");
    currentTab = btn.dataset.tab;
    updateDashboardAndJobs();
  });
});

// Initial render
updateDashboardAndJobs();