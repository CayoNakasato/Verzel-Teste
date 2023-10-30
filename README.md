
# Verzel Veiculos

O desafio Verzel Veiculos é uma aplicação Fullstack que permite aos usuários administradores gerenciar um catálogo de veículos. Eles podem criar, atualizar e excluir veículos do catálogo, enquanto os usuários normais têm acesso à vitrine dos veículos.

## Funcionalidades

- Vitrine de carros
- Area de Login e Registro
- Dashboard Admin
- Adicionar, deletar e atualizar veiculos
- Filtro de pesquisa, pela barra de pesquisa e ordenação por preço

## Stack utilizada

**Front-end:** React, ContextAPI, Chakra-UI

**Back-end:** NestJs, Prisma


## Instalação

#### Clone o repositório
```
git clone git@github.com:CayoNakasato/Verzel-Teste.git
```` 

### Abra o arquivo instalado e abra o VSCode

#### Será necessário abrir 2 VSCodes um com o *app* e o outro com *api*. Siga os passos: 

####
```
1. cd Verzel-Teste/app/
2. code .
3. cd ..
4. cd Verzel-Teste/api/
5. code .
```

### Ao estar com os dois projetos abertos siga com os comando em cada terminal:

#### Terminal do App
```
npm i
```

#### Ao instalar as dependências rode o *app*
```
npm run dev
```

##### O link do localhost deve aparecer no terminal ou será algo parecido com esse link: http://localhost:****/

#### Terminal da Api
```
npm i
```

##### Ao terminal de instalar as dependências configure o *.env*
```
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome-do-banco-de-dados
SECRET_KEY=""
```

### Após terminar de configurar e baixar as dependências rode o projeto da api
```
npm run start:dev
```


## Requisitos

- Node


