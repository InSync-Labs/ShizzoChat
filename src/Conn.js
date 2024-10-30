const sql = require('mssql');

const config = {
    server: 'shizzochat.database.windows.net', // Sunucu adresiniz
    database: 'shizzo', // Veritabanı adınız
    user: 'shizzoChat', // Kullanıcı adınız
    password: '12S34c789', // Şifreniz
    options: {
        encrypt: true, // Azure SQL bağlantısı için şifreleme gerekir
        trustServerCertificate: true, // Sadece yerel geliştirme için
        connectTimeout: 30000,
    }
};

async function connectToDatabase() {
    try {
        await sql.connect(config);
        console.log("Veritabanına başarıyla bağlanıldı.");
        const request = new sql.Request();
        request.query("INSERT INTO Members VALUES (75, 'Taayuu') ");
    } catch (err) {
        console.error("Bağlantı hatası:", err);
    }
}

connectToDatabase();
