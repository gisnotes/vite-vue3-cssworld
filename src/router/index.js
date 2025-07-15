import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        // #region 已完成
        // #endregion
        // title: "第一个webgl程序",
      },
      // #region 已完成
      // #endregion
      component: () => import("@/views/HelloWorld.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "《CSS世界》学习笔记";
  }

  next();
});

export default router;
