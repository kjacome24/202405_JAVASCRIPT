import { format_date_a, format_date_one_year_ago, format_date_b , format_date_c  } from './utils/formatearFecha.js';
import chalk from 'chalk';

console.log(chalk.bgBlue(format_date_a("2023-01-01T12:34:56Z")));
console.log(chalk.bgBlue(format_date_a("2024-04-21T09:40:26+0000")));
console.log(chalk.bgBlue(format_date_a()));




console.log(chalk.bgGreen(format_date_b("2023-01-01T12:34:56Z")));
console.log(chalk.bgGreen(format_date_b("2024-04-21T09:40:26+0000")));
console.log(chalk.bgGreen(format_date_b()));


console.log(chalk.bgRed(format_date_one_year_ago("2023-01-01T12:34:56Z")));
console.log(chalk.bgRed(format_date_one_year_ago("2024-04-21T09:40:26+0000")));
console.log(chalk.bgRed(format_date_one_year_ago()));



console.log(chalk.bgYellow(format_date_c("2023-01-01T12:34:56Z")));
console.log(chalk.bgYellow(format_date_c("2024-04-21T09:40:26+0000")));
console.log(chalk.bgYellow(format_date_c()));


