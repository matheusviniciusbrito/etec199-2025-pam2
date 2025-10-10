-- Script para criar o banco de dados e tabela base
-- Ajuste o nome do banco se necessário para combinar com DB_NAME do seu .env

-- CREATE DATABASE somente se não existir
CREATE DATABASE IF NOT EXISTS `app_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `app_db`;

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL,
  `email` VARCHAR(120) NOT NULL UNIQUE,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

