# API RESTful - Aplicativo de Controle de Treinos e Alimentação

## Descrição do Projeto
Esta API permite gerenciar *usuários, **planos de treino* e *planos alimentares. O sistema permite realizar operações de **CRUD (Create, Read, Update, Delete)* para cada entidade, armazenando os dados em um banco *MongoDB* (local ou Atlas).

## Funcionalidades Principais
- Cadastro e gerenciamento de usuários
- Registro de planos de treino com exercícios e dias da semana
- Registro de planos alimentares com refeições, horários e descrições
- Consulta completa dos planos de treino e alimentação de cada usuário

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/pt)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/) (Atlas ou Local)
- [Mongoose](https://mongoosejs.com/)
- [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/) ou [Thunder Client](https://www.thunderclient.com/) para testes
- [Git](https://git-scm.com/) para versionamento de código

## Configuração do Ambiente

### Pré-requisitos
- Node.js instalado [Download Node.js](https://nodejs.org/pt)
- MongoDB Atlas configurado (ou MongoDB local)
- Git instalado

## Passos para rodar o projeto

### Clone o repositório:
bash
git clone https://github.com/GustavoGNogueira/treino-alimentacao-api.git


### Acesse a pasta do projeto:
bash
cd treino-alimentacao-api


### Instale as dependências:
bash
npm install


### Como conectar o MongoDB à aplicação
A API utuiliza MongoDB como banco de dados. Você pode escolher entre:
### Usar MongoDB Local
  - Instale o [MongoDB](https://www.mongodb.com/try/download/community).
  - Certifique-se de que o serviço esteja rodando em sua máquina.
  - Copie e cole o texto abaixo em seu terminal.

bash
MONGO_URI=mongodb://localhost:27017/treinoAlimentacaoDB


### Usar MongoDB Atlas
  - Crie uma conta gratuita em [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
  - Crie um novo cluster.
  - Em "Database Access", crie um usuário com senha.
  - Em "Network Access", permita o IP *0.0.0.0/0*.
  - Copie a URI de conexão (em "Connect > Connect your application"):
  
  MONGO_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/treinoAlimentacaoDB?retryWrites=true&w=majority
  
  - Substitua *usuario, **senha* e *cluster* com seus dados

## Rodando o servidor:
bash
node index.js

ou, se tiver o nodemon instalado:
bash
nodemon index.js


### A API estará rodando em:

http://localhost:3000


## Rotas da API e Exemplos de Requisição

## *Usuários*
### *Exemplo JSON para criação:*
json
{
  "nome": "Mariana Costa",
  "email": "mariana@email.com",
  "idade": 25
}


## *Planos de Treino*
### *Exemplo JSON para criação:*
json
{
  "usuarioId": "ID_DO_USUARIO",
  "exercicios": ["Supino Inclinado", "Tríceps Pulley", "Rosca Direta"],
  "diasSemana": ["Terça", "Quinta", "Sábado"]
}


## *Planos Alimentares*
### *Exemplo JSON para criação:*
json
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


### Modelagem do banco de dados
Abaixo está a estrutura do banco utilizada nesta aplicação:

![Diagrama da modelagem](./img/modelagem-hackolade.png)

### Entidades e Relacionamentos
  ## Usuário (Usuario)
    - _id: Chave primária de identificação do usuário (criada automáticamente)
    - nome: Nome completo do usuário
    - email: E-mail do usuário
    - idade: Idade do usuário

  ## Plano de treino (PlanoTreino)
    - usuarioId: Referência ao ID de um usuário
    - exercicios: Lista de exercícios
    - nome: Nome do exercicio realizado pelo usuário
    - series: Quantidade de series de movimentos foram realizados em um exercício
    - repeticoes: Quantidade de repetições realizados em um exercício
    - data: Data do treino feito pelo usuário

  ## Plano alimentar (PlanoAlimentar)
    - usuarioId: Referência ao ID de um usuário
    - refeições: Lista de refeições feitas pelo usuário
    - horario: Horário da refeição do usuário
    - descrição: Descrição da refeição feita pelo usuário

### *Observações Importantes*
- Substitua "ID_DO_USUARIO" pelo ID real retornado ao criar um usuário.
- Os dados são validados pelo backend. Caso falte algum campo obrigatório, será retornada uma mensagem de erro clara.
- Para atualizar ou deletar, utilize os métodos *PUT* ou *DELETE* com o respectivo *ID* no endpoint.
- Certifique-se que o banco MongoDB está acessível para a API funcionar corretamente.
- A API pode ser testada localmente via *Insomnia, **Postman* ou *Thunder Client* no VSCode.

## Exemplos de Teste
- Teste as rotas com as ferramentas *Postman, **Insomnia* ou *Thunder Client*.
- Cadastre um usuário, depois crie o plano de treino e o plano alimentar usando o ID desse usuário.

## Licença
Este projeto está disponível sob a licença MIT. Para mais informações, acesse [LICENSE](https://tlo.mit.edu/understand-ip/exploring-mit-open-source-license-comprehensive-guide) para mais informações.
