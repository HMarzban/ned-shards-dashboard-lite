const NedConfig = {
  projectName: "Ned example shards-dashboard-lite",
  version: "0.9.0",
  author: "Hossein Marzban",
  router: {
    home: "",
    about: "",
    dashboard: "",
    posts: "",
    addNewPost: "",
    formComponent: "",
    tables: "",
    userProfile: "",
    errors: ""
  },
  module: {},
  component: {
    header: "",
    sidebar: "",
    footer: ""
  },
  static: {
    script: {
      head: [
        "./assets/js/jquery-3.3.1.min.js",
        "./assets/js/ned_bundle.js"
      ],
      body: [
        "./assets/js/quill.min.js",
        "./assets/js/popper.min.js",
        "./assets/js/bootstrap.min.js",
        "./assets/js/Chart.min.js",
        "./assets/js/shards.min.js",
        "./assets/js/extras.1.1.0.min.js",
        "./assets/js/shards-dashboards.1.1.0.js",
        "./assets/js/app/app-blog-overview.1.1.0.js",
        "./assets/js/main.script.js",
        
      ],
    },
    style: {
      head: [
        "./assets/style/bootstrap.min.css",
        "./assets/style/shards-dashboards.1.1.0.min.css",
        "./assets/style/extras.1.1.0.min.css",
        "./assets/style/quill.snow.css"
      ],
      body: [
        "./assets/style/fontawesom.all.css"
      ],
    },
  },
};
