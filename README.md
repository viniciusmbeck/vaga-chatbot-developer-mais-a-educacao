# 🤖 Desafio para vaga de Chatbot Developer - Chatbot de qualificação de leads e indicação de cursos

## 🖥 Plataforma usada e por que escolheu
O chatbot foi construído com a plataforma **BLiP**.  
A escolha se deu por ser uma das plataformas mencionadas na descrição da vaga, além do domínio técnico da mesma. Soma-se a isso a failidade  de realizar a validação de regras de negócios e chamadas HTTP  .

---

## 🧪 Como testar
Para realizar o teste do chatbot é necessário acessar o webchat [clicando aqui.](https://vmendesbeck-08288.chat.blip.ai/?appKey=d2hhdHNhbGluZXByaW5jaXBhbDowOGUwNjE0OC1mMzU4LTQ4ZTktYjk5ZS0wZTJhNWZiOTI2N2Q=&_gl=1*evq03e*_ga*MTkzNzA0MzcyLjE3NjQxODQ2ODU.*_ga_8GVWK8YMGL*czE3NjQzNjIzMjYkbzEzJGcxJHQxNzY0MzYyMzI4JGo1OCRsMCRoMjAwNTc0MTk5OQ..*_gcl_au*OTc5NzU4OTg2LjE3NjQxODQ2ODU.)

---

## Configurações internas
No desenvolvimento tomei a decisão de salvar alguns valores nas configurações básicas do chatbot, para que ficassem centralizadas para eventuais ajustes.

As chaves estão descritas abaixo:
| Nome da Configuração   | Descrição                                                              | Valor Atual                                              |
|------------------------|------------------------------------------------------------------------|----------------------------------------------------------|
| **baseUrl**            | URL base da API mock criada para simular busca de cursos e envio de lead | https://mais-a-educacao.free.beeceptor.com             |
| **apiCepBaseUrl**      | URL base da API para consulta de CEP                                   | https://viacep.com.br/ws                                 |
| **apiHolidayBaseUrl**  | URL base da API para consultas de feriados                             | https://brasilapi.com.br/api/feriados/v1                 |
| **currentYear**        | Utilizada para cálculos de datas durante o fluxo                       | 2025                                                     |
| **useChannelPhone**    | Feature toggle utilizada para definir se o telefone do contato será usado no fluxo | false                                        |

---

## Endpoints
Além das APIs fornecidas foram criados dois endpoints na plataforma **Beeceptor** com a **baseUrl** https://mais-a-educacao.free.beeceptor.com e com as seguintes rotas:

### 1️⃣ Consultar cursos

**GET** `/courses`

#### 📦 Payload de resposta
```json
{
  "availableCourses": [
    {
      "id": "g-ti-ads",
      "nivel": "graduacao",
      "area": "TI",
      "nome": "Análise e Desenvolvimento de Sistemas",
      "preco_base": 649.90,
      "enrollmentClosingDate": "25/11"
    },
    {
      "id": "g-ti-inform",
      "nivel": "graduacao",
      "area": "TI",
      "nome": "Sistemas de Informação",
      "preco_base": 629.90,
      "enrollmentClosingDate": "30/11"
    },
    {
      "id": "g-ti-redes",
      "nivel": "graduacao",
      "area": "TI",
      "nome": "Redes de Computadores",
      "preco_base": 699.90,
      "enrollmentClosingDate": "12/12"
    },
    {
      "id": "g-ti-tec",
      "nivel": "graduacao",
      "area": "TI",
      "nome": "Tecnologia da Informação",
      "preco_base": 639.90,
      "enrollmentClosingDate": "27/11"
    },
    {
      "id": "g-ti-ciencia",
      "nivel": "graduacao",
      "area": "TI",
      "nome": "Ciência da Computação",
      "preco_base": 689.90,
      "enrollmentClosingDate": "03/12"
    },
    {
      "id": "gadm",
      "nivel": "graduacao",
      "area": "Administração",
      "nome": "Administração",
      "preco_base": 599.90,
      "enrollmentClosingDate": "29/11"
    },
    {
      "id": "gadm-gestao",
      "nivel": "graduacao",
      "area": "Administração",
      "nome": "Gestão Empresarial",
      "preco_base": 650.00,
      "enrollmentClosingDate": "22/11"
    },
    {
      "id": "gadm-marketing",
      "nivel": "graduacao",
      "area": "Administração",
      "nome": "Administração com Marketing",
      "preco_base": 625.90,
      "enrollmentClosingDate": "02/12"
    },
    {
      "id": "gadm-financas",
      "nivel": "graduacao",
      "area": "Administração",
      "nome": "Administração e Finanças",
      "preco_base": 670.00,
      "enrollmentClosingDate": "20/12"
    },
    {
      "id": "gadm-gestao-rh",
      "nivel": "graduacao",
      "area": "Administração",
      "nome": "Gestão de Recursos Humanos",
      "preco_base": 615.90,
      "enrollmentClosingDate": "24/11"
    },
    {
      "id": "p-ds",
      "nivel": "pos",
      "area": "TI",
      "nome": "Pós em Data Science",
      "preco_base": 749.90,
      "enrollmentClosingDate": "06/12"
    },
    {
      "id": "p-ti-bigdata",
      "nivel": "pos",
      "area": "TI",
      "nome": "Pós em Big Data",
      "preco_base": 799.90,
      "enrollmentClosingDate": "18/12"
    },
    {
      "id": "p-ti-dev",
      "nivel": "pos",
      "area": "TI",
      "nome": "Pós em Desenvolvimento de Software",
      "preco_base": 759.90,
      "enrollmentClosingDate": "26/11"
    },
    {
      "id": "p-ti-ia",
      "nivel": "pos",
      "area": "TI",
      "nome": "Pós em Inteligência Artificial",
      "preco_base": 849.90,
      "enrollmentClosingDate": "07/12"
    },
    {
      "id": "p-ti-engenharia",
      "nivel": "pos",
      "area": "TI",
      "nome": "Pós em Engenharia de Software",
      "preco_base": 799.90,
      "enrollmentClosingDate": "25/12"
    },
    {
      "id": "p-gestao-saude",
      "nivel": "pos",
      "area": "Saúde",
      "nome": "Pós em Gestão em Saúde",
      "preco_base": 699.90,
      "enrollmentClosingDate": "01/12"
    },
    {
      "id": "p-saude-enfermagem",
      "nivel": "pos",
      "area": "Saúde",
      "nome": "Pós em Enfermagem",
      "preco_base": 799.90,
      "enrollmentClosingDate": "10/12"
    },
    {
      "id": "p-saude-nutri",
      "nivel": "pos",
      "area": "Saúde",
      "nome": "Pós em Nutrição",
      "preco_base": 749.90,
      "enrollmentClosingDate": "03/12"
    },
    {
      "id": "p-saude-psicologia",
      "nivel": "pos",
      "area": "Saúde",
      "nome": "Pós em Psicologia",
      "preco_base": 720.00,
      "enrollmentClosingDate": "28/11"
    },
    {
      "id": "p-saude-fisioterapia",
      "nivel": "pos",
      "area": "Saúde",
      "nome": "Pós em Fisioterapia",
      "preco_base": 789.90,
      "enrollmentClosingDate": "09/12"
    }
  ]
}
```

### 1️Enviar lead

**POST** `/lead/send`

#### 📦 Payload de requisição
```json
{
    "name": "{{contact.name}}",
    "document": "{{cpfValidation@cpf}}",
    "phoneNumber": "{{contact.phoneNumber}}",
    "address": {
        "uf": "{{address@uf}}",
        "city": "{{address@city}}",
        "neighborhood": "{{address@neighborhood}}",
        "street": "{{address@street}}"
    },
    "course": "{{courseInfos@id}}",
    "discounts": {
        "friendRecommendation" : "{{friendRecommendation}}", 
        "recurringPayment": "{{recurringPayment}}",
        "worksInTheArea": "{{worksInTheArea}}"
    }
}
```
#### 📦 Sem payload de resposta

---

## Alteração de descontos
Os descontos são setado inicialmente como **false** no início do fluxo e são reatribuídos para "*true** conforme seleção do usuário durante o fluxo. Toda vez que o usuário informa que, foi indicado, vai manter o pagamento recorrente ou já atua na área, as variáveis são alteradas.

### Desconto de urgência
O desconto de urgência foi implementado considerando que cada curso possui uma data de fechamento, sendo assim foi necessário alterar o json de cursos inicialmente fornecido para adicionar o campo **enrollmentClosingDate**.

Com essa informação, selecionar o curso é feito o cálculo de diferença entre o dia de hoje (momento de execução do fluxo) para a data de fechamento representada pelo campo citado.

---

## Features adicionais
Além de tudo que foi solicitado houve a implementação de duas features adicionais sendo elas:

1) **O controle de erros de input do usuário**:
    - O usuário poderá fornecer um input inesperado, isso é, um input que não esteja dentro do menu exibido, uma vez. Logo que esse input é reconhecido uma nova tentativa é dada, entretanto, caso o usuário erre mais uma vez a seleção, o tratamento de input faz com que o usuário seja direcionado ao atendimento humano. Essa feature tem como objetivo auxiliar pessoas que possam ter dificuldades à informar opções ou dados sem que isso exija um grande trabalho.

2) **Flag para utilização de telefone pré-definido**:
    - Também foi desenvolvida uma feature flag (já mencionada nas configurações) que possibilita utilizar ou não o telefone de contato já existente. Caso a flag esteja ativa, o fluxo apresenta o telefone já registrado e questiona o usuário se pode seguir com ele, caso negativo, o usuário recebe uma nova pergunta para inserir seu telefone.

---

## Códigos desenvolvidos
Todos os códigos desenvolvidos sejam eles de mensagens dinâmicas, validação de input ou de lógicas de negócio, estão publicados neste projeto.

---

## Testes
Todos os cenários de testes executados se encontram na pasta **tests** desse projeto