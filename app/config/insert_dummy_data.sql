insert into Users (name, createdAt, UpdatedAt) values ("test", now(), now());
insert into Users (name, createdAt, UpdatedAt) values ("test2", now(), now());

insert into Questions (title, createdAt, UpdatedAt) values ("好きなエディタは？", now(), now());

insert into Options (name, questionId, createdAt, UpdatedAt) values ("Vim", 1, now(), now());
insert into Options (name, questionId, createdAt, UpdatedAt) values ("Emacs", 1, now(), now());

insert into Votes (userId, optionId, questionId, createdAt, UpdatedAt) values (2, 1, 1, now(), now());
