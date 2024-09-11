//разница
import { formatDistanceStrict } from 'date-fns'; //подключаем библиотеку

export const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};
