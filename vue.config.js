/*
* author: lihongzhao
* 2019-4-29 : 9:31
*   
*/

module.exports = {
    devServer: {
        port: 899
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            title: '主页',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'index'],
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        detail: {
            // page 的入口
            entry: 'src/detail/main.js',
            // 模板来源
            template: 'public/detail.html',
            // 在 dist/index.html 的输出
            filename: 'detail.html',
            title: '详情',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'detail']
        }
    }
}