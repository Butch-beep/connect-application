
--Add row
INSERT INTO person (first_name, last_name)
VALUES('Abegail', 'Bacolod');
INSERT INTO message (message_body, person_id, conversation_id)
VALUES('Hi I am Ronne', 4, 1);

--Delete all rows
DELETE FROM message;

--View table
SELECT * FROM message;
SELECT * FROM conversation;
SELECT * FROM group_member;
SELECT * FROM person;

--Search for constraints
select n.nspname as schema_name,
       t.relname as table_name,
       c.conname as constraint_name
from pg_constraint c
  join pg_class t on c.conrelid = t.oid
  join pg_namespace n on t.relnamespace = n.oid
where t.relname = 'message';

--Delete constraints
ALTER TABLE message DROP CONSTRAINT message_person_id_fkey

--Add constraints
ALTER TABLE message 
ADD CONSTRAINT message_person_id_fkey FOREIGN KEY (person_id) REFERENCES person(person_id);

--Add column
ALTER TABLE message
ADD COLUMN person_id INT;

--Delete column
ALTER TABLE message
DROP COLUMN author;

--Set data types
ALTER TABLE message
ALTER COLUMN message_body SET NOT NULL,
ALTER COLUMN conversation_id SET NOT NULL,
ALTER COLUMN person_id SET NOT NULL;

SELECT first_name 
FROM person
INNER JOIN message
    ON person_id = message_id
WHERE message_id = 1

SELECT i.*, d.first_name, d.last_name
FROM message i
JOIN "person" d ON d.person_id = i."person_id"

SELECT message.*, person.first_name, person.last_name
FROM message
JOIN "person" ON person.person_id = message."person_id"