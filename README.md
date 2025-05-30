
# 📦 API RESTful - Aplicativo de Controle de Treinos e Alimentação

## 📝 Descrição do Projeto

Esta API permite gerenciar **usuários**, **planos de treino** e **planos alimentares**. O sistema permite realizar operações de **CRUD (Create, Read, Update, Delete)** para cada entidade, armazenando os dados em um banco **MongoDB** (local ou Atlas).

---

## 🚀 Funcionalidades Principais

- ✅ Cadastro e gerenciamento de usuários
- ✅ Registro de planos de treino com exercícios e dias da semana
- ✅ Registro de planos alimentares com refeições, horários e descrições
- ✅ Consulta completa dos planos de treino e alimentação de cada usuário

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/pt)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/) (Atlas ou Local)
- [Mongoose](https://mongoosejs.com/)
- [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/) ou [Thunder Client](https://www.thunderclient.com/) para testes
- [Git](https://git-scm.com/) para versionamento de código

---

## ⚙️ Configuração do Ambiente

### ✅ Pré-requisitos

- Node.js instalado [Download Node.js](https://nodejs.org/pt)
- MongoDB Atlas configurado (ou MongoDB local)
- Git instalado

---

## 🚧 Passos para rodar o projeto

### 🔥 Clone o repositório:
```bash
git clone https://github.com/GustavoGNogueira/treino-alimentacao-api.git
```

### 🔥 Acesse a pasta do projeto:
```bash
cd treino-alimentacao-api
```

### 🔥 Instale as dependências:
```bash
npm install
```

### 🔥 Crie o arquivo `.env` na raiz do projeto:

**Exemplo de conteúdo do `.env`:**
```env
MONGO_URI= sua_string_de_conexao_do_mongodb
PORT=3000
```

📜 **Dica:** O arquivo `.env` não vai para o GitHub por questões de segurança. Você pode se basear no arquivo `.env.example` que está no repositório para criar o seu.

---

## 🚀 Rodando o servidor:
```bash
node index.js
```
ou, se tiver o `nodemon` instalado:
```bash
nodemon index.js
```

### 🌐 A API estará rodando em:
```
http://localhost:3000
```
*(ou na porta configurada no arquivo `.env`)*

---

## 🔗 Rotas da API e Exemplos de Requisição

---

### 👤 **Usuários**

| Método | Endpoint             | Descrição           |
|--------|-----------------------|---------------------|
| POST   | /api/usuarios         | Cria um usuário     |
| GET    | /api/usuarios         | Lista todos         |
| GET    | /api/usuarios/:id     | Busca por ID        |
| PUT    | /api/usuarios/:id     | Atualiza por ID     |
| DELETE | /api/usuarios/:id     | Deleta por ID       |

### 🔸 **Exemplo JSON para criação:**
```json
{
  "nome": "Mariana Costa",
  "email": "mariana@email.com",
  "idade": 25
}
```

---

### 🏋️‍♂️ **Planos de Treino**

| Método | Endpoint                  | Descrição           |
|--------|----------------------------|---------------------|
| POST   | /api/planotreino           | Cria plano de treino|
| GET    | /api/planotreino           | Lista todos         |
| GET    | /api/planotreino/:id       | Busca por ID        |
| PUT    | /api/planotreino/:id       | Atualiza por ID     |
| DELETE | /api/planotreino/:id       | Deleta por ID       |

### 🔸 **Exemplo JSON para criação:**
```json
{
  "usuarioId": "ID_DO_USUARIO",
  "exercicios": ["Supino Inclinado", "Tríceps Pulley", "Rosca Direta"],
  "diasSemana": ["Terça", "Quinta", "Sábado"]
}
```

---

### 🍽️ **Planos Alimentares**

| Método | Endpoint                   | Descrição             |
|--------|-----------------------------|-----------------------|
| POST   | /api/planoalimentar         | Cria plano alimentar  |
| GET    | /api/planoalimentar         | Lista todos           |
| GET    | /api/planoalimentar/:id     | Busca por ID          |
| PUT    | /api/planoalimentar/:id     | Atualiza por ID       |
| DELETE | /api/planoalimentar/:id     | Deleta por ID         |

### 🔸 **Exemplo JSON para criação:**
```json
{
  "usuarioId": "ID_DO_USUARIO",
  "data": "2025-06-01",
  "refeicoes": [
    {
      "horario": "07:00",
      "descricao": "Café preto e pão integral com pasta de amendoim"
    },
    {
      "horario": "12:00",
      "descricao": "Carne bovina magra, feijão, arroz branco e salada mista"
    },
    {
      "horario": "15:30",
      "descricao": "Barra de proteína e frutas secas"
    },
    {
      "horario": "19:00",
      "descricao": "Frango ao curry, legumes salteados e arroz integral"
    }
  ]
}
```

---

## 🔍 **Observações Importantes**

- 🔸 Substitua `"ID_DO_USUARIO"` pelo ID real retornado ao criar um usuário.
- 🔸 Os dados são validados pelo backend. Caso falte algum campo obrigatório, será retornada uma mensagem de erro clara.
- 🔸 Para atualizar ou deletar, utilize os métodos **PUT** ou **DELETE** com o respectivo **ID** no endpoint.
- 🔸 Certifique-se que o banco MongoDB está acessível para a API funcionar corretamente.
- 🔸 A API pode ser testada localmente via **Insomnia**, **Postman** ou **Thunder Client** no VSCode.

---

## 📄 Arquivo `.env.example`

Incluído no projeto, este arquivo serve como modelo para criar seu próprio `.env`:

```env
MONGO_URI=SEU_MONGO_URI_AQUI
PORT=3000
```

---

## 💻 Exemplos de Teste

- Teste as rotas com as ferramentas **Postman**, **Insomnia** ou **Thunder Client**.
- Cadastre um usuário, depois crie o plano de treino e o plano alimentar usando o ID desse usuário.

---

## 📝 Licença

Este projeto está sob a licença MIT. Para mais informações, acesse [LICENSE](https://tlo.mit.edu/understand-ip/exploring-mit-open-source-license-comprehensive-guide).
