export default [
  {
    path: "/projects/",
    component: () => import(/* webpackChunkName: "page--src-pages-projects-vue" */ "C:\\Users\\stefa\\IdeaProjects\\stefan.breitenstein\\src\\pages\\Projects.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\Users\\stefa\\IdeaProjects\\stefan.breitenstein\\src\\pages\\Blog.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\stefa\\IdeaProjects\\stefan.breitenstein\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\stefa\\IdeaProjects\\stefan.breitenstein\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\stefa\\IdeaProjects\\stefan.breitenstein\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\stefa\\IdeaProjects\\stefan.breitenstein\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

