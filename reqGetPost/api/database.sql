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
  `phone` VARCHAR(20) NOT NULL,
  `birth_date` DATE NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dados iniciais
INSERT INTO `users` (name, email, phone, birth_date) VALUES
('Ana Souza', 'ana.souza@example.com', '(11) 91234-5678', '1995-03-12'),
('Bruno Lima', 'bruno.lima@example.com', '(21) 99876-5432', '1988-07-25'),
('Carla Mendes', 'carla.mendes@example.com', '(31) 98765-4321', '2001-11-05');

