-- Create the todo table
CREATE TABLE todo (
    id SERIAL PRIMARY KEY NOT NULL,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMP
);

-- Add some test todos, some completed and some not
INSERT INTO todo (description, completed_at)
VALUES
    ('Install Titus', NOW()),
    ('Add TODO table', NOW()),
    ('Add TODO page', NULL),
    ('Deploy to Cloud', NULL)
;
