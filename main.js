const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

document.querySelector('#days').textContent = daysOfTheWeek[new Date().getDay() - 1]



setInterval(() => {
    const date = new Date()

    document.querySelector('#date').textContent = `${date.toLocaleDateString('en-US', {
        month: "long",
        day: "numeric",
        year: "numeric"
    })}.`

    document.querySelector('#time').textContent = `${date.toLocaleTimeString('en-US', {
        hour: "2-digit",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    })}`
}, 1);