const backendApi = 'http://localhost:5000';

const jobContainer = document.querySelector('.container');
const filters = document.querySelector('.search');
const sortForm = document.querySelector('.sort');

filters.addEventListener('submit', (e) => {
    const formData = new FormData(filters);
    const data = Object.fromEntries(formData); 
    console.log(data);
});

sortForm.addEventListener('submit', (e) => {
    const formData = new FormData(sortForm);
    const data = Object.fromEntries(formData); 
    console.log(data);
});

async function getJobs(query) {
    const response = await fetch(`${backendApi}/jobs`);
    const data = await response.json();
    return data;
}

async function renderJobs() {
    const jobs = await getJobs();
    console.log(jobs);
    jobContainer.innerHTML = jobs.data.map(job => `
        <div class="result">
        <h3>
            <a href="jobs/${job.title}-${job.job_id}">${job.title}</a>
        </h3>

        <ul class="job_info">
            <li>
                <img src="./img/category.png" alt="category" class="iconn">
                ${job.category}
            </li>
            <li>
                <img src="./img/location.png" alt="location" class="iconn">
                ${job.location}
            </li>
            <li>
                <img src="./img/clock.png" alt="clock" class="iconn">
                ${job.createdAt.split('T')[0]}
            </li>
            <li>
                <span class="status">${job.status}</span>
                <span class="time">${job.type}</span>
                <span class="money">${job.salary}</span>
            </li>
        </ul>
    </div>
    `).join('');
}

renderJobs();