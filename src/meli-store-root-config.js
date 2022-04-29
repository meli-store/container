import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@meli-store/mf-header",
  app: () => System.import("@meli-store/mf-header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
