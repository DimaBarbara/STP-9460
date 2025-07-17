const dateObj = new Date(dateStr);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = dateObj.toLocaleDateString('uk-UA', options);

document.getElementById('date').textContent = `Last Updated: ${formattedDate}`;
