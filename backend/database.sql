CREATE TABLE conversation(
    conversation_id SERIAL PRIMARY KEY,
    conversation_name VARCHAR(255)
);

ALTER TABLE message
ADD COLUMN conversation_id INTEGER REFERENCES conversation(conversation_id);

