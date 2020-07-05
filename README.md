# Documentação ✔

## Endpoint da api, rota raiz:
```
https://backend-ter-ensino.herokuapp.com/
```

## Rota de Signin (OPEN API)

Requisição do tipo **POST**

Rota base:
```
https://backend-ter-ensino.herokuapp.com/signin
```

Dados da requisição:
```
{ 
  "email": "usuario@gmail.com", 
  "password": "senha123"
}
```
Resposta da requisição em caso de sucesso:
```
{ 
  "token": "token do usuário"
}
```

Resposta da requisição em caso de insucesso:
```
{
  "error": "E-mail/Senha inválido"
}
```

## Rota de Signup (OPEN API)

Requisição do tipo **POST**

Rota base:
```
https://backend-ter-ensino.herokuapp.com/signup
```

Dados da requisição:
```
{
  "name": "Nome do usuario",
  "email": "usuario@gmail.com",
  "password": "senhaUsuario",
  "confirmPassword": "senhaUsuario"
}
```
Resposta da requisição em caso de sucesso:
```
{
  "message": "Cadastro realizado com sucesso"
}
```

Resposta da requisição em caso de insucesso:
```
{
  "error": "Usuário já cadastrado"
}
```

> OBS: Validações são feitas pela API
Outras respostas possíveis, são validações de cada campo do cadastro de usuario exemplo abaixo:
```
{
  "error": "E-mail não informado"
}
```

## Apartir daqui, são rotas que exigem que o usuário esteja autenticado. (PRIVETE API)

## Autenticação
OBS: Em toda requisição realizada deve ser mandando no HEADER da requisição o token de autenticação do usuário, seguindo exemplo abaixo:
```
headers: {"Authorization": "token do usuário"}
```

Caso o token não seja passado na requisição ou já tenha expirado será retornado a seguinte resposta:
```
{
  "error": "Usuário não autorizado"
}
```

## Rotas de artigos (PRIVETE API)

> Buscar todos os artigos

Requisição do tipo **GET**

Rota base:
```
https://backend-ter-ensino.herokuapp.com/articles
```

Dados da requisição (Somente o header com o token do usuário)

Resposta da requisição em caso de sucesso:
```
{
  "articles": [
    {
      "id": 2,
      "title": "Como fazer um miojo",
      "imageURL": null,
      "content": "Poe a água pra ferver, ferveu? Joga o miojo dentro e espera ficar mole...joga o tempero e pronto.",
      "category": "Hábitos",
      "createAt": "10/6/2020",
      "author": {
        "id": 3,
        "name": "Vinicius Rocca",
        "imageURL": null
      },
      "dateArticle": "Jul 10"
    },
    {
      "id": 6,
      "title": "TABELA DINAMICA",
      "imageURL": "https://www.hashtagtreinamentos.com/tabela-dinamica",
      "content": "A TABELA DINAMICA É UM MODELO MUITO UTIL PARA ANALISAR GRÁFICOS. VOCE PODE COMBINAR COM A SEGMENTAÇÃO DE DADOS E DENTRO DELA CLICAR E EXIBIR OS RESULTADOS QUE DESEJA VER.",
      "category": "Excel",
      "createAt": "11/6/2020",
      "author": {
        "id": 6,
        "name": "Leonardo Albuquerque",
        "imageURL": null
      },
      "dateArticle": "Jul 11"
    }
  ]
}
```

> Criar um novo artigo

Requisição do tipo **POST**

Rota base:
```
https://backend-ter-ensino.herokuapp.com/articles
```
Dados da requisição:
```
{
    "title": "titulo",
    "imageURL": "urldaimage",
    "content": "conteudo",
    "category": "Hábitos"
}
```
Resposta da requisição em caso de sucesso:
```
{
  "message": "Artigo publicado com sucesso!"
}
```
> OBS: Validações realizadas pela API
Resposta da requisição em caso de insucesso, exemplo com validação:
```
{
  "error": "Categoria do artigo não informada"
}
```

> Alterar um artigo já existente

Requisição do tipo **PUT**

Rota base:
```
https://backend-ter-ensino.herokuapp.com/articles/:id
```
Dados da requisição:
```
{
    "title": "titulo2",
    "imageURL": "urldaimage",
    "content": "conteudo",
    "category": "Hábitos"
}
```
Resposta da requisição em caso de sucesso:
```
{
  "message": "Artigo atualizado com sucesso!"
}
```
> OBS: Validações realizadas pela API
Resposta da requisição em caso de insucesso, exemplo com validação:
```
{
  "error": "Categoria do artigo não informada"
}
```

> Excluir um artigo

Requisição do tipo **DELETE**

Rota base:
```
https://backend-ter-ensino.herokuapp.com/articles/:id
```
Dados da requisição (Somento token do usuário no header da requisição)

Resposta da requisição em caso de sucesso:
```
{
  "message": "Artigo excluido com sucesso!"
}
```

Resposta da requisição em caso de insucesso, exemplo com artigo que não existe:
```
{
  "error": "Algo inesperado ocorreu por favor tente novamente."
}
```

## Rotas do usuário (PRIVETE API)

> Buscar informação do usuário autenticado

Requisição do tipo **GET**

Rota base:
```
https://backend-ter-ensino.herokuapp.com/user
```
Dados da requisição (Somento token do usuário no header da requisição)

Resposta da requisição em caso de sucesso:
```
{
  "id": 2,
  "name": "Nome do usuário",
  "email": "usuario@gmail.com",
  "title": "Desenvolvedor Full Stack",
  "about": "Sou um programador Node.js e React.js",
  "imageURL": "https://lh3.googleusercontent.com/-NUpDDZ6o68I/XtKtgpek.jpg"
}
```

> Alterar as informações do usuário autenticado

Requisição do tipo **PUT**

Rota base:
```
https://backend-ter-ensino.herokuapp.com/user
```
Dados da requisição:
```
{
  "name": "Nome do usuário 2",
  "email": "usuario@gmail.com",
  "title": "Desenvolvedor Full Stack",
  "about": "Sou um programador Node.js e React.js",
  "imageURL": "https://lh3.googleusercontent.com/-NUpDDZ6o68I/XtKtgpek.jpg"
}
```
Resposta da requisição em caso de sucesso: (Retorna dados do usuário atualizados)
```
{
  "id": 2,
  "name": "Nome do usuário 2",
  "email": "usuario@gmail.com",
  "title": "Desenvolvedor Full Stack",
  "about": "Sou um programador Node.js e React.js",
  "imageURL": "https://lh3.googleusercontent.com/-NUpDDZ6o68I/XtKtgpek.jpg"
}
```
> OBS: Validações realizadas pela API
Resposta da requisição em caso de insucesso, exemplo com validação:
```
{
  "error": "Nome não informado, o campo é obrigatório"
}
```
