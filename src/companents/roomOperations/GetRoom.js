const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const PORT = 5000;

const config = {
    server: 'shizzochat.database.windows.net',
    database: 'shizzo',
    user: 'shizzoChat',
    password: '12S34c789',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

app.use(cors({ origin: "http://localhost:3000" }));

async function getRooms() {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT RoomID, RoomName, MemberCount FROM Rooms`;
        return result.recordset;
    } catch (err) {
        console.error("Veritabanı hatası:", err);
    }
}

app.get('/api/rooms', async (res) => {
    try {
        const rooms = await getRooms();
        res.json(rooms);
    } catch (err) {
        res.status(500).send("Veritabanı hatası");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
