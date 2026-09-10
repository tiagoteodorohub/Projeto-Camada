# Front-end · Cadastro de Usuários (Projeto Camadas)

Front-end estático (um único `index.html`, sem build) para o CRUD de `/users`
da sua API em camadas (Rota → Controller → Service → Repository → MySQL).

## Como usar

1. Suba a API normalmente: `node src/server.js` (ou `npm start`, se configurar).
2. Abra o `index.html` direto no navegador (duplo clique) ou sirva-o como
   estático a partir do próprio Express.
3. No painel esquerdo, em **"Conexão com a API"**, informe a URL base —
   ex.: `http://localhost:3000` (troque a porta pela que está no seu `.env`,
   variável `SERVER_PORT`). Clique em **"Testar conexão"**.
4. Crie, edite, busque e exclua usuários pela tela.

## Ajuste necessário no backend: CORS

Como o `index.html` roda em `file://` ou em outra porta, o navegador vai
bloquear as requisições por CORS até você liberar isso na API. Adicione:

```bash
npm install cors
```

```js
// src/server.js
import cors from 'cors';
// ...
app.use(cors());
```

Sem isso, o botão "Testar conexão" vai aparecer como **falhou**.

## Comportamento por decisão de design

- **Senha nunca é exibida** na tabela (fica mascarada) — mesmo sabendo que
  hoje ela é gravada em texto puro no banco. Isso é intencional: a interface
  não deveria "ensinar" a expor senhas, mesmo que a API atual permita.
- **Editar exige reinformar a senha.** O endpoint `PUT /users/:id` sobrescreve
  a linha inteira (não faz atualização parcial), então não dá para editar
  só o nome sem reenviar uma senha. A tela deixa isso explícito no formulário
  em vez de esconder a limitação.
- **Animação das "camadas" no cabeçalho** não é só estética: ela pulsa na
  ordem real da arquitetura (Rota → Controller → Service → Repository →
  MySQL) toda vez que uma ação é disparada, como reforço didático do que o
  curso está ensinando.

## Recomendações para evoluir o backend (não aplicadas aqui)

Identifiquei ao analisar o código, mas não alterei sem sua confirmação:

1. `src/models/Users.js` tem dois `set email()` — o segundo deveria ser
   `set password()` (bug de copy-paste no setter).
2. Senha gravada em texto puro no `INSERT`/`UPDATE` — recomendo `bcrypt`
   antes de qualquer uso real.
3. O `.env` que veio dentro do seu `.zip` tem credenciais reais. Ele já está
   no `.gitignore` (não foi pro git), mas como trafegou no arquivo compactado,
   vale trocar a senha do banco por precaução.
