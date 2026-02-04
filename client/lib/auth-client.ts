import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
    baseURL:  "http://localhost:3005", // Base URL of the server
});