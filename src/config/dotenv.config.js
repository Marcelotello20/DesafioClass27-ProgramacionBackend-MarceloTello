import dotenv from 'dotenv'
import { Command } from 'commander';

const program = new Command();
program.option('--mode <mode>','set the mode', 'development');
program.parse();

const options = program.opts();

const env = options.mode;
dotenv.config({
    path: env === 'production' ? './.env.prod' : './.env.dev'
});

export default {
    port:process.env.PORT,
    mongoUrl:process.env.MONGO_URL,
    adminName : process.env.ADMIN_NAME,
    adminPassword : process.env.ADMIN_PASSWORD
}