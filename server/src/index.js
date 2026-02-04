import express from 'express';
import dotenv from 'dotenv';
import { toNodeHandler, fromNodeHeaders } from "better-auth/node";
import cors from 'cors';
import { auth } from './lib/auth.js';

dotenv.config();

const app = express();
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    })
)

app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json()); //only after the auth handler

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/me', async(req, res) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });
    return res.json({ user: session?.user || null });
});
app.get('/health', (req, res) => {
    res.send('Server is healthy');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
