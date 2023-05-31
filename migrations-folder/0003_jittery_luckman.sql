CREATE TABLE `books` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` varchar(256),
	`guide_id` varchar(256),
	`house_id` int,
	`date` datetime(6));

CREATE TABLE `images` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`image` text,
	`house_id` int);

ALTER TABLE `houses` ADD `created_at` datetime(6);
ALTER TABLE `users` DROP COLUMN `data`;