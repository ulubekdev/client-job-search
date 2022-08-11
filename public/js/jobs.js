const backendApi = 'http://localhost:3000/api';

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