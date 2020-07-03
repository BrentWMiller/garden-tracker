import { env } from "./env";

export default {
  site_name: "Garden Tracker",
  description: "Helping hobbyist gardeners track their gardens",
  firebase: {
    config: env.firebase
  }
};
