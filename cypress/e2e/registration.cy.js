
describe('Registro de usuario', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('Debe mostrar error si el correo electrónico no es válido', () => {
    cy.get('#email').type('correo-invalido');
    cy.get('#password').type('contraseña');
    cy.get('#confirm-password').type('contraseña');
    cy.get('#register-btn').click();
    cy.get('#error-message').should('have.text', 'El correo no es valido');
  });

  it('Debe mostrar error si las contraseñas no coinciden', () => {
    cy.get('#email').type('correo');
    cy.get('#password').type('contraseña');
    cy.get('#confirm-password').type('contraseña-invalida');
    cy.get('#register-btn').click();
    cy.get('#error-message1').should('have.text', 'Las contraseñas no coinciden');
  });

  it('Debe mostrar error si algun campo esta vacío', () => {
    cy.get('#register-btn').click();
    cy.get('#error-message2').should('have.text', 'Todos los campos son obligatorios');
  });

  it('Debe permitir el registro si los campos son válidos', () => {
    cy.get('#email').type('correo@example.com');
    cy.get('#password').type('contraseña');
    cy.get('#confirm-password').type('contraseña');
    cy.get('#register-btn').click();
    cy.get('#success-message').should('have.text', 'Se ha registrado correctamente');
  });
});
