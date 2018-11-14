const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/callbackgoogle',{ target: 'http://localhost:5000' }));
    app.use(proxy('/auth/google/callback', {changeOrigin: true,target: 'http://localhost:5000/' }));
    app.use(proxy('/api/stripe', {changeOrigin: true, target: 'http://localhost:5000' }));
    app.use(proxy('/auth/logout', {changeOrigin: true, target: 'http://localhost:5000' }));
    app.use(proxy('/api/current_user', {changeOrigin: true, target: 'http://localhost:5000' }));
};
