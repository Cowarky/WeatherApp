import daysOfWeek from "@/services/utils/types.ts";

interface hourly {
  time: string | Date;
  temperature_180m: number | string;
}
export function getTemperatures(data: hourly[]) {
  const result = [];
  const daysSeen = new Set(); // To track distinct days

  for (let i = 0; i < data.time.length; i++) {
    // console.log(i);
    const newDate = new Date(data.time[i]);
    const dayIndex = newDate.getDay();

    // Check if this day has already been added
    if (!daysSeen.has(dayIndex)) {
      // console.log(dayIndex);
      result.push({
        index: i,
        date: dayIndex,
        temperature: data.temperature_180m[i],
      });
      daysSeen.add(dayIndex); // Mark this day as seen
    }
  }
  result.sort((a, b) => a.date - b.date);
  for (let j = 0; j < result.length; j++) {
    result[j].date = daysOfWeek[j];
  }
  return result;
}

export function getToday() {
  const todayDate = new Date();

  return daysOfWeek[todayDate.getDay()];
}
