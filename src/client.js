import * as sapper from "@sapper/app";
import { googleAnalytics } from "./google-analytics";

sapper.start({
  target: document.querySelector("#sapper")
});

if (process.env.SAPPER_APP_GA_TRACKING_ID) {
  googleAnalytics(process.env.SAPPER_APP_GA_TRACKING_ID);
}
