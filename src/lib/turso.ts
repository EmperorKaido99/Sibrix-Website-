import { createClient, type Client } from "@libsql/client";

// Turso database client
// Get your credentials from: https://turso.tech/app
// The web client can't open "file:" URLs, so without a configured URL we skip
// creating a client instead of crashing the whole app on load.
const TURSO_URL = import.meta.env.VITE_TURSO_DATABASE_URL;

let client: Client | null = null;

function getDb(): Client {
  if (!TURSO_URL) {
    throw new Error("Turso is not configured: set VITE_TURSO_DATABASE_URL");
  }
  client ??= createClient({
    url: TURSO_URL,
    authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN,
  });
  return client;
}

// Initialize database tables
export async function initDatabase() {
  if (!TURSO_URL) return;
  await getDb().batch([
    // Contact form submissions
    `CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )`,
    
    // Project inquiries / leads
    `CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      package TEXT,
      budget TEXT,
      details TEXT,
      status TEXT DEFAULT 'new',
      created_at TEXT DEFAULT (datetime('now'))
    )`,
    
    // Newsletter subscribers
    `CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      subscribed_at TEXT DEFAULT (datetime('now'))
    )`,
  ]);
}

// Contact form operations
export const contacts = {
  async create(data: { name: string; email: string; phone?: string; message: string }) {
    const result = await getDb().execute({
      sql: "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)",
      args: [data.name, data.email, data.phone || null, data.message],
    });
    return result.lastInsertRowid;
  },

  async getAll() {
    const result = await getDb().execute("SELECT * FROM contacts ORDER BY created_at DESC");
    return result.rows;
  },
};

// Inquiry operations
export const inquiries = {
  async create(data: {
    name: string;
    email: string;
    company?: string;
    package?: string;
    budget?: string;
    details?: string;
  }) {
    const result = await getDb().execute({
      sql: "INSERT INTO inquiries (name, email, company, package, budget, details) VALUES (?, ?, ?, ?, ?, ?)",
      args: [
        data.name,
        data.email,
        data.company || null,
        data.package || null,
        data.budget || null,
        data.details || null,
      ],
    });
    return result.lastInsertRowid;
  },

  async getAll() {
    const result = await getDb().execute("SELECT * FROM inquiries ORDER BY created_at DESC");
    return result.rows;
  },

  async updateStatus(id: number, status: string) {
    await getDb().execute({
      sql: "UPDATE inquiries SET status = ? WHERE id = ?",
      args: [status, id],
    });
  },
};

// Subscriber operations
export const subscribers = {
  async add(email: string) {
    try {
      await getDb().execute({
        sql: "INSERT INTO subscribers (email) VALUES (?)",
        args: [email],
      });
      return { success: true };
    } catch (error: any) {
      if (error.message?.includes("UNIQUE constraint")) {
        return { success: false, error: "Already subscribed" };
      }
      throw error;
    }
  },

  async getAll() {
    const result = await getDb().execute("SELECT * FROM subscribers ORDER BY subscribed_at DESC");
    return result.rows;
  },
};
