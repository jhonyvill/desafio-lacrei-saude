Feature: Realizar cadastro

  Scenario: Realizar cadastro com sucesso
    Given que estou na página de cadastro
    When preencho o campo nome
    And preencho o campo sobrenome
    And preencho o campo e-mail
    And preencho o campo confirmação de e-mail
    And preencho o campo senha
    And preencho o campo confirmação de senha
    And marco o checkbox dos termos de uso e política de privacidade
    And marco o checkbox de maioridade
    And clico no botão de submeter o formulário
    Then serei redirecionado para a tela de agradecimento

