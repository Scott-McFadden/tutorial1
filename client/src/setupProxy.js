const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/callbackgoogle',{ target: 'http://localhost:5000/' }));
    app.use(proxy('/auth/google/callback', {target: 'http://localhost:5000/' }));
};
