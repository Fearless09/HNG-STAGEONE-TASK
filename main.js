const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

document.querySelector('#days').textContent = daysOfTheWeek[new Date().getDay() - 1]

setInterval(() => {
    document.querySelector('#time').textContent = `${new Date().getTime()}`
}, 1);
