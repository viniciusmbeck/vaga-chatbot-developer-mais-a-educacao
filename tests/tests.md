### Execução de testes 🧪
As evidências estão na ordem dos respectivos cenários
**Todos os inputs contém uma retentativa permitida**. Caso o usuário **erre uma segunda vez**, ele é direcionado para **atendimento humano**.

Anexarei o funcionamento desse fluxo de retentativas somente da primeira mensagem, apenas para informação.

---

## Pergunta sobre prosseguimento de atendimento

**Input válido com resposta "sim"**
- Deve seguir para a mensagem de necessidade de coleta de dados e logo após para a **coleta de nome completo**

**Input válido com resposta "não"**
- Deve exibir a mensagem de encerramento

**Primeiro input inválido**
- Deve informar que aceita apenas respostas de **"sim"** e **"não"** e refazer a pergunta

**Segundo input inválido**
- Deve direcionar para atendimento humano

<div align="center">
    <img src="images/pergunta-prosseguir-atendimento-sim.png" alt="Pode prosseguir com o atendimento" width="273">
    <img src="images/pergunta-prosseguir-atendimento-não.png" alt="Não pode prosseguir com o atendimento" width="270">
    <br>
    <img src="images/pergunta-prosseguir-atendimento-primeiro-input-inválido.png" alt="Primeiro input inválido" width="272">
    <img src="images/pergunta-prosseguir-atendimento-segundo-input-inválido.png" alt="Segundo input inválido" width="270">
</div>


## Feature flag de telefone

**Ativada**
- Deve informar o número de contato e perguntar se deseja seguir com ele

**Desativada**
- Deve seguir para a pergunta de telefone do usuário

<div align="center">
    <img src="images/feature-flag-telefone-ativada.png" alt="Flag ativada" width="271">
    <img src="images/pergunta-nome-input-válido.png" alt="Flag ativada" width="270">
</div>

## Pergunta nome completo

**Input válido**
- Deve seguir para a **coleta de telefone** (de acordo com a feature flag)

**Primeiro input inválido**
- Deve informar a mensagem sobre a dificuldade de fornecer um nome válido e refazer a pergunta

<div align="center">
    <img src="images/pergunta-nome-input-válido.png" alt="Nome inválido" width="270">
    <img src="images/pergunta-nome-input-inválido-primeira-tentativa.png" alt="Nome inválido" width="275">
</div>

---

## Pergunta número de telefone

**Número válido**
- Deve seguir para a **coleta de cpf**

**Número inválido**
- Deve informar que o nome é inválido, explicar o padrão esperado e refazer a pergunta

<div align="center">
    <img src="images/pergunta-telefone-input-válido.png" alt="Número válido" width="272">
    <img src="images/pergunta-telefone-primeiro-input-inválido.png" alt="Número inválido" width="270">
</div>

---

## Pergunta CPF
**CPF válido**
- Deve seguir para a **coleta de CEP**

**CPF válido**
- Deve informar a mensagem de CPF inválido e refazer a pergunta

<div align="center">
    <img src="images/pergunta-cpf-input-válido.png" alt="CPF válido" width="272">
    <img src="images/pergunta-cpf-primeiro-input-inválido.png" alt="CPF inválido" width="270">
</div>

---

---

## Pergunta CEP
**CEP válido**
- Deve seguir para a **coleta de nível de ensino**

**CEP inválido**
- Deve exibir a mensagem informando o formato correto de um CEP e refazer a pergunta

<div align="center">
    <img src="images/pergunta-cep-input-válido.png" alt="CEP válido" width="270">
    <img src="images/pergunta-cep-primeiro-input-inválido.png" alt="CEP inválido" width="272">
</div>

---

## Urgência de lote
**Lote com urgência**
- Deve realizar o desconto de **7%** no final do carrinho

<div align="center">
    <img src="images/curso-ciência-da-computação.png" alt="JSON Ciência da computação" >
    <img src="images/lote-com-urgência.png" alt="Lote com urgência" width="270">
</div>