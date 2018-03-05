insert into Users (name, createdAt, UpdatedAt) values ("test", now(), now());
insert into Users (name, createdAt, UpdatedAt) values ("test2", now(), now());

-- Question 1
insert into Questions (title, createdAt, UpdatedAt) values ("好きなエディタは？", now(), now());

insert into Options (name, questionId, createdAt, UpdatedAt) values ("Vim", 1, now(), now());
insert into Options (name, questionId, createdAt, UpdatedAt) values ("Emacs", 1, now(), now());

insert into Votes (userId, optionId, questionId, createdAt, UpdatedAt) values (2, 1, 1, now(), now());

-- Question 2
insert into Questions (title, createdAt, UpdatedAt) values ("アメリカ横断", now(), now());

insert into Options (name, questionId, createdAt, UpdatedAt) values ("する", 2, now(), now());
insert into Options (name, questionId, createdAt, UpdatedAt) values ("したい", 2, now(), now());
insert into Options (name, questionId, createdAt, UpdatedAt) values ("しない", 2, now(), now());

insert into Votes (userId, optionId, questionId, createdAt, UpdatedAt) values (2, 3, 2, now(), now());
