import dotenv from "dotenv";
import minimist from "minimist";
dotenv.config();

const args = minimist(process.argv.slice(2));
export const cookie = `connect.sid=${args.cookie || process.env.CONNECT_SID};`;

export const startLog = () => {
  const args = minimist(process.argv.slice(2));
  console.log("Starting with args:", args);
};
