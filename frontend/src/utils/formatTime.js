export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);

  let formattedTime = "";
  if (hours > 0) {
    formattedTime += `${hours}h `;
  }
  formattedTime += `${mins}min`;

  return formattedTime;
};
