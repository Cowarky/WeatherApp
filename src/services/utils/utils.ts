import daysOfWeek from "./types.ts";

interface hourly {
  time: Date[]; // Array of Date objects
  temperature_180m: number[]; // Array of temperature values
}

export function getTemperatures(data: hourly) {
  const result: { index: number; date: string; temperature: number }[] = [];
  const daysSeen = new Set<number>(); // To track distinct days

  // console.log(data.time)


  // for (let i = 0; i < data.length; i++) {
    // Loop through each hourly object
    const times = data.time; // Access the time array for the current hourly object
    const temperatures = data.temperature_180m; // Access the temperature array

    for (let j = 0; j < times.length; j++) {
      // Loop through the time array
      const newDate = new Date(times[j]);
      const dayIndex = newDate.getDay();

      // Check if this day has already been added
      if (!daysSeen.has(dayIndex)) {
        result.push({
          index: result.length, // Use result.length for the index
          date: daysOfWeek[dayIndex], // Use the day name
          temperature: temperatures[j], // Access the corresponding temperature
        });
        daysSeen.add(dayIndex); // Mark this day as seen
      }
    }
  // }

  // result.sort(
  //   (a, b) => daysOfWeek.indexOf(a.date) - daysOfWeek.indexOf(b.date),
  // ); // Sort by day of the week
  return result; // Return the result array
}

export function getToday() {
  const todayDate = new Date();

  return daysOfWeek[todayDate.getDay()];
}
