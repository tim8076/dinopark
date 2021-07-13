import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/backend/Login.vue')
  },
  {
    path: '/dino-park',
    component: () => import('@/views/front/Index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/front/Home.vue')
      },
      {
        path: 'news',
        component: () => import('@/views/front/News.vue')
      },
      {
        path: 'news/:id',
        component: () => import('../views/front/NewsSingle.vue')
      },
      {
        path: 'info/:type',
        component: () => import('../views/front/Information.vue')
      },
      {
        path: 'map',
        component: () => import('@/views/front/ParkMap.vue')
      },
      {
        path: 'areas/:id',
        component: () => import('@/views/front/Area.vue')
      },
      {
        path: 'store',
        component: () => import('@/views/front/Store.vue')
      },
      {
        path: 'store/:id',
        component: () => import('@/views/front/Product.vue')
      },
      {
        path: 'favorite',
        component: () => import('@/views/front/Favorite.vue')
      },
      {
        path: 'cart',
        component: () => import('@/views/front/Cart.vue'),
        children: [
          {
            path: 'list',
            component: () => import('@/views/front/List.vue')
          },
          {
            path: 'order',
            component: () => import('@/views/front/Order.vue')
          },
          {
            path: 'checkout/:orderId',
            name: 'checkout',
            component: () => import('@/views/front/Checkout.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/backend/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'productList',
        component: () => import('@/views/backend/ProductList.vue')
      },
      {
        path: 'couponList',
        name: 'couponList',
        component: () => import('@/views/backend/Coupon.vue')
      },
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('@/views/backend/OrderList.vue')
      },
      {
        path: 'articleList',
        name: 'articleList',
        component: () => import('../views/backend/Article.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
export default router
