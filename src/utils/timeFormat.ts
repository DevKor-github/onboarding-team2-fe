export const formatDate = (time: string) => {
  const date = new Date(time);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours >= 12 ? '오후' : '오전';

  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${period} ${formattedHours}:${formattedMinutes}`;
};

export const getCurTime = () => {
  const now = new Date();
  return now.toISOString();
};
