export const formatDate = (inputDate: string) => {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Date(inputDate).toLocaleDateString(
    "en-US",
    dateFormatOptions
  );
  return formattedDate;
};

export const convertSlugToTitle = (slug: string) => {
  // Split the slug into words
  const words = slug.split("-");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words to form the title
  const title = capitalizedWords.join(" ");

  return title;
};
