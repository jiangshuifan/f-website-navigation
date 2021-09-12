import Vue from "vue";
import VueRouter from "vue-router";

const  home = ()=>import("views/home/FDream");
const contact = () =>import("views/contact/contact");
const about = () =>import("views/about/about");

const design = () => import("components/content/link-tab/design");
const life = () => import("components/content/link-tab/life");
const usuallyuse = () => import("components/content/link-tab/usuallyUse");
const entertainment = () => import("components/content/link-tab/entertainment");
const learn = () => import("components/content/link-tab/learn");
const technology = () => import("components/content/link-tab/technology");
const setting = ()=>import("components/content/link-tab/setting")

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home,
    name:'home',
    children:[
      {
        path:"design",
        component:design
      },
      {
        path:"life",
        component: life
      },
      {
        path: "usuallyuse",
        component: usuallyuse
      },
      {
        path: "entertainment",
        component: entertainment
      },
      {
        path: "learn",
        component: learn
      },
      {
        path: "technology",
        component: technology
      },
      {
        path:"setting",
        component:setting
      }
    ]
  },
  {
    path: "/contact",
    component:contact,
    name:'contact',
  },
  {
    path: "/about",
    component:about,
    name:'about'
  }];
const router = new VueRouter({
  routes,
  mode: "hash"
});

// router.beforeEach((to,from,next)=>{
//   if(to.name==='contact'||to.name=='about'){
//     
//   }
//   next();
// })

//这段是解决重复点击link router报错的
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
export default router;
