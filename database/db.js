import mysqli from "serverless-mysql"

const pool = mysqli({
    config: {
        host: process.env.MYSQLI_HOST,
        port: process.env.MYSQLI_PORT,
        database: process.env.MYSQLI_DATABASE,
        user: process.env.MYSQLI_USER,
        password: process.env.MYSQLI_PASSWORD,
    },
});

export { pool };