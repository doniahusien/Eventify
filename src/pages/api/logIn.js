export default async function handler(req, res) {
    try {
        const connection = await createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '862003',
            database: 'data',
        });

        let [rows] = await connection.query('SELECT * FROM organizer');

        if (rows.length > 0) {
            const users = rows.map(row => ({
                organizer_id: row.organizer_id,
                name: row.name,
                email: row.email,
                type_id: row.type_id,
            }));
            res.status(200).json({ users });
        } else {
            res.status(404).json({ message: 'No users found' });
        }

        await connection.end();
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
