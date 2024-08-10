import dayjs from "dayjs";
import 'dayjs/locale/es.js'; // Here we are importing the locale that includes spanish
dayjs.locale('en'); // and here we set it to spanish


export const format_date_a = date => dayjs(date).format('YYYY');
export const format_date_one_year_ago = date => dayjs(date).subtract(1, 'year').format('DD [de] MMMM [de] YYYY, hh:mm:ss A [UTC]');
export const format_date_b = date => dayjs(date).format('dddd, DD [de] MMMM [de] YYYY');
export const format_date_c = date => dayjs(date).format('MM-DD-YYYY');


