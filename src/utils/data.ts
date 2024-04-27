export const formatDate = () => {
  const currentTimeStamp = Date.now(); // Get current timestamp
  const currentDate = new Date(currentTimeStamp); // Convert timestamp to Date object

  // Format date components as required (e.g., YYYY-MM-DD HH:MM:SS)
  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")} ${currentDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${currentDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${currentDate.getSeconds().toString().padStart(2, "0")}`;

  console.log(formattedDate); // Output the formatted date
};
