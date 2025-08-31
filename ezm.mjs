import { start as startXprofiler } from "xprofiler";
import { start as startXtransit } from "xtransit";

startXprofiler();
startXtransit({
  server: process.env.EZM_SERVER,
  appId: process.env.EZM_APP_ID,
  appSecret: process.env.EZM_APP_SECRET,
});