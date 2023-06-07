
describe('Registro de usuario', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

it('El formulario de registro contiene elementos de entrada para correo electrónico, contraseña y repetición de contraseña', () => {
 

  // Verifica que los elementos de entrada existan utilizando los atributos "id"
  cy.get('#email').should('exist');
  cy.get('#password').should('exist');
  cy.get('#confirm-password').should('exist');
});


it('Muestra mensaje de advertencia y oculta el botón cuando las contraseñas no coinciden', () => {

  // Ingresa una contraseña en el campo "Contraseña"
  cy.get('#password').type('password');

  // Ingresa una contraseña diferente en el campo "Repetir contraseña"
  cy.get('#confirm-password').type('differentpassword');

  // Verifica que aparezca el mensaje de advertencia
  cy.get('#password-message').should('be.visible');

  // Verifica que el botón no esté visible
  cy.get('#register-btn').should('have.css', 'display', 'none');
});


  // it('Debe mostrar error si el correo electrónico no es válido', () => {
  //   cy.get('#email').type('correo-invalido');
  //   cy.get('#password').type('contraseña');
  //   cy.get('#confirm-password').type('contraseña');
  //   cy.get('#register-btn').click();
  //   cy.get('#error-message').should('have.text', 'El correo no es valido');
  // });

  // it('Debe mostrar error si las contraseñas no coinciden', () => {
  //   cy.get('#email').type('correo');
  //   cy.get('#password').type('contraseña');
  //   cy.get('#confirm-password').type('contraseña-invalida');
  //   cy.get('#register-btn').click();
  //   cy.get('#password-message').should('have.text', 'Las contraseñas no coinciden');
  // });

  // it('Debe mostrar error si algun campo esta vacío', () => {
  //   cy.get('#register-btn').click();
  //   cy.get('#error-message2').should('have.text', 'Todos los campos son obligatorios');
  // });

  // it('Debe permitir el registro si los campos son válidos', () => {
  //   cy.get('#email').type('correo@example.com');
  //   cy.get('#password').type('contraseña');
  //   cy.get('#confirm-password').type('contraseña');
  //   cy.get('#register-btn').click();
  //   cy.get('#success-message').should('have.text', 'Se ha registrado correctamente');
  // });
});
