

console.log('node env: ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    console.log ('using prod');
    const keys = require('./prod');
    console.log('mongo_db uri', keys.mongo.URI);
    module.exports = require('./prod');

    //console.log('mongo_db uri', keys.mongo.URI);
}
else {
    console.log('using dev');
    module.exports = require('./dev');
    //console.log('mongo_db uri', keys.mongo.URI);
}

