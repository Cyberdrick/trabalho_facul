let validator = new Validator();

// Função de validação
function validateForm() {
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const cpf = document.querySelector("#cpf").value;
  const password = document.querySelector("#password").value;
  const passwordconfirmation = document.querySelector("#passwordconfirmation").value;

  // Adicione aqui as condições de validação desejadas
  if (email === "" || name === "" || cpf === "" || password === "" || passwordconfirmation === "") {
    alert("Preencha todos os campos do formulário.");
    return false; // Impede o envio do formulário
  }

  if (password !== passwordconfirmation) {
    alert("As senhas não coincidem.")
    return false;
  }

  // Outras condições de validação, se necessário
  // Exemplo: Verificar se o e-mail tem um formato válido

  return true; // Permite o envio do formulário se a validação for bem-sucedida
}

// Função para salvar dados no localStorage

function saveDataToLocalStorage() {
  const isValid = validateForm();

    if (isValid) {
    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;
    const cpf = document.querySelector("#cpf").value;
    const password = document.querySelector("#password").value;
    const passwordconfirmation = document.querySelector("#passwordconfirmation").value;

    // Criar um objeto com os Dados
    const userData = {
      email: email,
      name: name,
      cpf: cpf,
      password: password,
      passwordconfirmation: passwordconfirmation,
    };

    // Converter o objeto em string JSON
    const userDataJSON = JSON.stringify(userData);

    // Armazenar a string JSON no localStorage
    localStorage.setItem("userData", userDataJSON);
  };

  // Converter o objeto em string JSON
  const userDataJSON = JSON.stringify(userData);

  // Armazenar a string JSON no localStorage
  localStorage.setItem("userData", userDataJSON);
}

