# Gestão de Tarefas — React + TypeScript + Vite

Aplicação web de gestão de tarefas  desenvolvida com React e TypeScript, utilizando Vite como ferramenta de desnvolvimento e compilação.

O proeto permite organbizar tarefas e acompanhar o seu estado através de uma interface de gestão de tarefas.

## Tecnologias

-React: Construção da interface através de componentes.
-TypeScript: Tipagem estática e maior segurança no desenvolvimento.
-Vite: Servidor de desenvolvimento e compilação para produção.
-CSS: Estilização da interface.
-ESLint: Análise estática e verificação de qualidade do código.

## Funcionalidades

-Criação e gestão de tarefas.
-Edição das informações das tarefas.
-Definição da prioridade e do estado de cada tarefa.
-Remoção de tarefas.
-Organização da interface arrastando.

## Pré-requisitos

-Antes de executar o projeto, instalar:
-Node.js
-npm, incluído com o Node.js.


## Instalação e execução

1- Clona o repositório:
git clone https://github.com/CelioSD/gestor-tarefas-kanban-react.git

2- Entra na pasta do projeto:
cd gestor-tarefas-kanban-react

3- Instala as dependências:
npm install

4- Inicia o servidor de desenvolvimento:
npm run dev

5- Abre no navegador o endereço apresentado no terminal, normalmente http://localhost:5173/.


## Compilação para produção
-Para verificar os tipos TypeScript e compilar a aplicação:
npm run build

-Para visualizar localmente a versão compilada:
npm run preview

## Estrutura do projeto
versao-react/
├── public/
├── src/
│   ├── components/
│   │   ├── CardTarefa.tsx
│   │   ├── ColunaTarefas.tsx
│   │   ├── FormularioTarefas.tsx
│   │   └── ListaTarefas.tsx
│   ├── types/
│   │   └── Tarefa.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts

## Objetivo do projeto
Consolidar conhecimentos de React e TypeScript através da construção de uma aplicação prática, com componentes reutilizáveis, organização de código e gestão de estado.


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).




