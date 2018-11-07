module.exports =
    {
        googleClientID: process.env.GOOGLE_CLIENTID,
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
        google:{
            client_id: process.env.GOOGLE_CLIENTID,
            project_id:"tutorialprod-221720",
            auth_uri:"https://accounts.google.com/o/oauth2/auth",
            token_uri:"https://www.googleapis.com/oauth2/v3/token",
            auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uris:["https://radiant-mesa-48637.herokuapp.com/auth/google/callback"],
            javascript_origins:["https://radiant-mesa-48637.herokuapp.com","http://localhost:5000"]
        },
        mongo: {
            URI: process.env.MONGO_URI,
            user: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD
        },
        cookieKey: process.env.COOKIE_KEY
    };
