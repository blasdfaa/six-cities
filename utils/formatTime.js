import dayjs from 'dayjs';

export const fDate = (date) => {
  return dayjs(date).format('MMMM YYYY');
};
