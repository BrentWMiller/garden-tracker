import { env } from "./env";

export default {
  site_name: "Garden Tracker",
  description: "Helping hobbyist gardeners track their home gardens",
  firebase: {
    config: env.firebase
  }
};
