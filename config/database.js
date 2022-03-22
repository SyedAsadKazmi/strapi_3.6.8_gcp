module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'mysql',
                // gcp my-sql db public-ip and port (to connect from outside gcp environment)
                // host: env('DATABASE_HOST'),
                // port: env.int('DATABASE_PORT'),
                socketPath: env('SOCKET_PATH'), // gcp my-sql db socket-path (to connect from inside App Engine)
                database: env('DATABASE_NAME'),
                user: env('DATABASE_USERNAME'),
                password: env('DATABASE_PASSWORD'),
            },
            options: {
                useNullAsDefault: true,
            },
        },
    },
});