# projento-egii
projeto final de engenharia de software ii

# Requisitos para o desenvolvimento do projeto

O projeto deve ser desenvolvido com node.js.

O projeto deve ser implementado com JavaScript ou TypeScript.

O projeto deve ser implementado sob o padrão arquitetural MVC.

O projeto deve estabelecer no mínimo 4 histórias de usuário, bem como os critérios de aceitação.

O projeto deve implementar teste unitário, teste de integração e teste de aceitação para as histórias de usuário.

O projeto deve implementar, no mínimo, 4 testes de integração.

O projeto deve conter o arquivo README.MD na raiz do projeto e o seu conteúdo deve possuir: finalidade da aplicação; as histórias de usuário; instruções de instalação; comandos para execução da aplicação e dos testes; bem como uma tabela com endpoints da API mockada

# Finalidade:
A aplicação foi feita pensando no auxílio e organização de tarefas a serem realizadas por um indivíduo. 

# Histórias do Usuário

## História 1
Como usuário cadastrado quero poder atualizar minhas informações.
- critério de aceitação:
  - Cada campo deve permitir preenchimento individual.
  - O sistema deve validar as mundaca o mais rápido possível
## História 2
Como usuário do sistema quero poder criar novas tarefas.
- critério de aceitação:
  - Cada campo deve permitir preenchimento individual.
  - O sistema deve validar as mundaca o mais rápido possível
## História 3 
Como usuário quero atualizar as tarefas já cadastrada. 
- critério de aceitação:
  - Cada campo deve permitir preenchimento individual.
  - O sistema deve validar as mundaca o mais rápido possível.
## História 4
Como usuário quero poder mudar o estado de uma tarefa
- critério de aceitação:
  - cada tarefa deve possuir uma forma fácil de alteração.
  - ao modificar o sistema deve mostrar imediatamente.
## História 5
Como usuário quero poder ordenar minhas tarefas por ordem de importância
- critério de aceitação:
  - Deve haver um campo que permita ordenar.
## História 6 
Como usuário quero poder remover tarefas .
- critério de aceitação:
  - Deve haver um campo que permita remover cada tarefa individualmente.
  - quando removida de ser exibida a lista de tarefas restante.

# Instalação e execução
- Para efetuar a instalação: npm install
- Para executar: npm run dev 

# Comado de Teste:
- Teste de unidade: npx jest __tests__/unit
- Teste de aceitação:  npx jest __tests__/acceptance
- Teste de integração: npx jest __tests__/integration

 # Tabela com Endpoints da API mockada
 |Método |URL|Descrição
 | - | - | - |
 |GET|/usuario/:email3|retorna o nome do usuário 
 |GET|/tarefa/:id|retorna estado da tarefa atualizado

