import loadable from "@loadable/component";

export default loadable(() =>
  import(/* webpackChunkName: "tasks" */ "./Tasks"),
  {ssr: false}
);