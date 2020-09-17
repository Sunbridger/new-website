let result = [];

const pages = require.context('../../views', false, /\.vue$/); // 不能使用变量？？
pages.keys().forEach((row) => {
    row = row.replace(/(\.\/|\.vue)/g, '');
    result.push({
        path: `/${row}`,
        component: () => import(`../../views/${row}.vue`)
    })
});

export default result;
