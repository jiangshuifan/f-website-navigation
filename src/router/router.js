import Vue from "vue";
import VueRouter from "vue-router";

const  home = ()=>import("views/home/FDream");
// const contact = () =>import("views/contact/index");
const about = () =>import("views/about/index");
const setting = () =>import("views/setting/index");

// const design = () => import("views/home/components/tab/design");
// const life = () => import("views/home/components/tab/life");
// const usuallyuse = () => import("views/home/components/tab/usuallyUse");
// const entertainment = () => import("views/home/components/tab/entertainment");
// const learn = () => import("views/home/components/tab/learn");
// const technology = () => import("views/home/components/tab/technology");

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
    // redirect:'/home/design',
    // children:[
    //   {
    //     path:"design",
    //     component:design
    //   },
    //   {
    //     path:"life",
    //     component: life
    //   },
    //   {
    //     path: "usuallyuse",
    //     component: usuallyuse
    //   },
    //   {
    //     path: "entertainment",
    //     component: entertainment
    //   },
    //   {
    //     path: "learn",
    //     component: learn
    //   },
    //   {
    //     path: "technology",
    //     component: technology
    //   },

    // ]
  },
  // {
  //   path: "/contact",
  //   component:contact,
  //   name:'contact',
  // },
  {
    path: "/about",
    component:about,
    name:'about'
  },
  {
    path:"/setting",
    component:setting,
    name:'setting'
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
