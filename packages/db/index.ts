// import { PrismaClient } from "./generated/prisma";
// import dotenv from "dotenv";
// import path from "path";

// // Load environment variables from packages/db/.env
// dotenv.config({ path: path.resolve(__dirname, "../../.env") });
// // or if you have a .env in packages/db directory:
// // dotenv.config({ path: path.resolve(__dirname, '../.env') });

// export const prismaClient = new PrismaClient();

import { PrismaClient } from "./generated/prisma/client.js";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });

// Debug: Check if DATABASE_URL is loaded
console.log("DATABASE_URL loaded:", process.env.DATABASE_URL ? "Yes" : "No");

export const prismaClient = new PrismaClient();
