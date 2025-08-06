import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { user } from '../../fixtures/user.json'

const url = 'https://paciente-staging.lacreisaude.com.br/cadastro/';
const uniqueEmail = Date.now() + user.email;

Given("que estou na página de cadastro", () => {
  cy.visit(url);
});

When('preencho o campo nome', () => {
  cy.get('#first_name').type(user.name);
});

When('preencho o campo sobrenome', () => {
  cy.get('#last_name').type(user.lastname);
});

When('preencho o campo e-mail', () => {
  cy.get('#email').type(uniqueEmail);
});

When('preencho o campo confirmação de e-mail', () => {
  cy.get('#email2').type(uniqueEmail);
});

When('preencho o campo senha', () => {
  cy.get('#password1').type(user.password);
});

When('preencho o campo confirmação de senha', () => {
  cy.get('#password2').type(user.password);
});

When('marco o checkbox dos termos de uso e política de privacidade', () => {
  cy.get('[name="accepted_privacy_document"]').check({ force: true });
});

When('marco o checkbox de maioridade', () => {
  cy.get('[name="is_18_years_old_or_more"]').check({ force: true });
});

When('clico no botão de submeter o formulário', () => {
  cy.contains("Cadastrar").click();
});

Then('serei redirecionado para a tela de agradecimento', () => {
  cy.url().should('include', '/verificar-email');
  cy.contains('Agradecemos seu interesse em fazer parte da Lacrei Saúde!').should('be.visible');
});
