import { createClient } from "microcms-js-sdk";

const microCmsClient = createClient({
  serviceDomain: "sakurai-cli", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "5567664cecd3436c87ea0779ae60d42fe595",
});
export default microCmsClient;
