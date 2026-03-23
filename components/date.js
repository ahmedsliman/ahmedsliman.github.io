import { parseISO, format } from 'date-fns';

export default function Date({ dateString, short }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, short ? 'MMM yyyy' : 'LLLL d, yyyy')}</time>;
}
