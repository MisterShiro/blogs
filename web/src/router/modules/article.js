export default [
    {
        path: '',
        name: 'Article',
        component: () => import('@/views/Article/index.vue'),
        alwaysShow: true,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Article/components/Home/index'),
                alwaysShow: true,
                meta: {
                    keepAlive: false, // 是否缓存组件
                    title: 'Shiro of World', // 路由中文名称
                },
            },
            {
                path: 'article-details',
                name: 'article-details',
                component: () => import('@/views/Article/details'),
                alwaysShow: true,
                meta: {
                    keepAlive: false, // 是否缓存组件
                },
            },
        ]
    },
];
