const ms = Date.parse('2025-03-12') - Date.parse(new Date())


const weeks = Math.floor(ms / ((1000 * 60 * 60 * 24) * 7))


console.log(weeks);