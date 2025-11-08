CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT DEFAULT('Untitle'),
    body TEXT NOT NULL,
    is_complete BOOLEAN,
    complete_date TEXT
);