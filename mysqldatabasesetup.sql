CREATE SCHEMA thingstodo_db;
USE thingstodo_db;
CREATE TABLE thingstodo(
thingtodo VARCHAR(30) NOT NULL);
INSERT INTO thingstodo
VALUES ('Do this thing');
SELECT * FROM thingstodo ;