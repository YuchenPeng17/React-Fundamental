const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api1',
        createProxyMiddleware({
            target: 'http://localhost:3050',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }
        })
    );
    app.use(
        '/api2',
        createProxyMiddleware({
            target: 'http://localhost:3051',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    );
};


/*
const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1', {
            target: 'http://localhost:3050',
            changeOrigin: true,
            pathRewrite: {'^/api1': ''}
        }),
        proxy('/api2', {
            target: 'http://localhost:3051',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        }),
    )
}
*/