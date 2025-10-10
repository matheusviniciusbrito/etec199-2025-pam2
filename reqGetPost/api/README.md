# API REST (Express) com MVC e MySQL

Estrutura básica de API em Node.js usando Express, padrão MVC, conexão MySQL via `mysql2` e configuração por variáveis de ambiente com `dotenv`.

## Pré-requisitos
- Node.js 18+
- MySQL 8+ (ou compatível)

## Configuração
1. Copie o arquivo `.env.example` para `.env` e ajuste as variáveis:
   - PORT
   - DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME

2. Instale as dependências:
```
npm install
```

3. Crie a tabela de usuários (exemplo):
Você pode executar o script pronto `database.sql` (cria o banco `app_db` e a tabela `users`).

Opção A: usando o cliente MySQL (terminal) no Windows PowerShell:
```powershell
mysql -h localhost -P 3306 -u root -p < .\database.sql
```

Opção B: conectando no MySQL e rodando manualmente:
```sql
SOURCE C:/Users/Aluno/Desktop/etec199-2025-pam2/reqGetPost/api/database.sql;
```

## Rodando
- Desenvolvimento com reload simples do Node 18+
```
npm run dev
```
- Produção
```
npm start
```

A API subirá em `http://localhost:PORT` (padrão 3000).

## Endpoints
- GET `/health` – status da API e conexão com DB
- CRUD de usuários em `/users`:
  - GET `/users`
  - GET `/users/:id`
  - POST `/users`  { name, email }
  - PUT `/users/:id`  { name, email }
  - DELETE `/users/:id`

## Estrutura
```
api/
├─ index.js                  # Entrada da aplicação
├─ .env.example              # Exemplo de variáveis de ambiente
├─ src/
│  ├─ config/
│  │  └─ database.js        # Pool MySQL e teste de conexão
│  ├─ controllers/
│  │  └─ userController.js  # Lógica dos endpoints
│  ├─ models/
│  │  └─ userModel.js       # Acesso ao banco
│  └─ routes/
│     └─ userRoutes.js      # Rotas de usuários
└─ package.json
```

## Observações
- Este projeto usa `mysql2/promise` e pool de conexões.
- Ajuste CORS, logs e validações conforme necessidade.
