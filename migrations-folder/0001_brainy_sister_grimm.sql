CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` varchar(256),
	`name` varchar(256),
	`data` json,
	`is_admin` boolean DEFAULT false);

DROP TABLE `cities`;
DROP TABLE `countries`;