/**
 * Created by hacfin005 on 2021/3/25.
 */
const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages()
module.exports = {
    publicPath:process.env.UNI_PLATFORM !== 'h5' ? './' : '/',
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                ROUTES: webpack.DefinePlugin.runtimeValue(() => {
                    const tfPages = new TransformPages({
                        includes: ['path', 'name', 'aliasPath']
                    });
                    return JSON.stringify(tfPages.routes)
                }, true )
            })
        ]
    },
    // 服务器配置
    devServer          : {
        port              : 3001,
    },
}
