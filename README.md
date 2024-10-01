# README

# Auth App

Este projeto é uma aplicação de exemplo em **NestJS** que implementa autenticação de usuários utilizando **bcrypt**, **Passport**, **JWT** e **cookies**. A aplicação permite que usuários se registrem, façam login e acessem rotas protegidas.

## Funcionalidades

- **Registro de Usuários:** Permite que novos usuários se registrem com uma senha criptografada.
- **Login de Usuários:** Autentica usuários e gera um token JWT armazenado em um cookie HTTP-only.
- **Rota Protegida:** Apenas usuários autenticados podem acessar rotas protegidas, como o perfil do usuário.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Passport](http://www.passportjs.org/)
- [JWT](https://jwt.io/)
- [cookie-parser](https://github.com/expressjs/cookie-parser)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/auth-app.git
   cd auth-app
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie a aplicação:**

   ```bash
   npm run start
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Testando a API

Após configurar a autenticação, vamos testar os endpoints utilizando ferramentas como **Postman** ou **cURL**.

### 1. Registro de Usuário

**Requisição:**

```http
POST /auth/register
Content-Type: application/json

{
  "username": "diogo",
  "password": "senhaSegura123"
}
```

**Resposta:**

```json
{
  "message": "Usuário registrado com sucesso",
  "user": {
    "id": 1,
    "username": "diogo",
    "password": "$2b$10$..."
  }
}
```

### 2. Login

**Requisição:**

```http
POST /auth/login
Content-Type: application/json

{
  "username": "diogo",
  "password": "senhaSegura123"
}
```

**Resposta:**

```json
{
  "message": "Login realizado com sucesso"
}
```

**Cookie:**

```
Set-Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6...; HttpOnly
```

### 3. Acessando uma Rota Protegida

**Requisição:**

```http
GET /users/profile
Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

**Resposta:**

```json
{
  "userId": 1,
  "username": "diogo"
}
```


## Contribuição

Sinta-se à vontade para contribuir com melhorias ou reportar issues.

## Licença

Este projeto está licenciado sob a licença MIT.