# Desafio Lacrei Saúde

Esta é uma página destinada à resolução do desafio proposto por Lacrei Saúde em processo seletivo de voluntariado para posição de Quality Assurance - QA.

## Autor

- Linkedin - [Jhony Vill da Silva](https://www.linkedin.com/in/jhonyvill/).

## Documentação

A página principal da documentação constando os cenários de testes criados utilizando a linguagem Gherkin, os relatórios de bugs, os impedimentos/bloqueios de teste e sugestões de melhorias pode ser acessada diretamente em:

- [Notion - Desafio Lacrei Saúde](https://www.notion.so/Desafio-Lacrei-Sa-de-Jhony-23e1b272b0ed8078bc15f93f1bcade46).

Caso prefira, você pode acessar diretamente cada página:

- [Notion - Cenários de teste](https://www.notion.so/Cen-rios-23e1b272b0ed809e9c40ed5473524f8d?source=copy_link).

- [Notion - Relatórios de bugs](https://www.notion.so/Relat-rios-de-bugs-2451b272b0ed80258d91e47c8d9d0726?source=copy_link).

- [Notion - Impedimentos / Bloqueios de teste](https://www.notion.so/Impedimentos-Bloqueios-de-teste-2461b272b0ed8008a9fdcf6673debcc6?source=copy_link).

- [Notion - Sugestões de melhorias](https://www.notion.so/Sugest-es-de-melhorias-23e1b272b0ed805e9a8ccdbb1616f079?source=copy_link).

## Automação

A automação do cenário de cadastro de usuário foi realizada utilizando Cypress e Cucumber, conforme solicitado no desafio proposto, e pode ser acessada no diretório **automacao-cypress-cucumber** do presente repositório.

### Pré-requisitos

Para executar a automação, será necessário que você tenha instalado o Git, Node.js e npm na sua máquina.

Foram utilizadas as versões Git(2.43.0), Node.js(22.3.0) e npm(10.8.1), recomendo que utilize as mesmas ou versões ou mais recentes.

### Instalação

Clonar o repositório e executar o seguinte comando na pasta raiz do projeto(automacao-cypress-cucumber):

```
npm install
```

### Execução

Para execução em modo interativo, utilizar o comando:

```
npm run cy:open
```

Esse comando irá abrir a interface do Cypress para que você possa visualizar a execução dos testes em tempo real.

Caso tenha interesse na execução sem abrir a interface do Cypress, no modo headless, execute o comando:

```
npm run test
```

Você pode verificar o relatório de execução local gerado em arquivo HTML no diretório **cypress/reports/** do projeto de automação.
