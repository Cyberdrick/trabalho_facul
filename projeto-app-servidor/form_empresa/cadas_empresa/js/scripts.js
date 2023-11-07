function retrieveDataFromLocalStorage() {
  // recuperar a string JSON do localStorage
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData) {
    //Exiba os dados na página
    const dadosDiv = document.getElementById("dados");
    const emailParagrafo = document.createElement("p");
    emailParagrafo.textContent = `Email: ${userData.email}`;
    dadosDiv.appendChild(emailParagrafo);

    const nameParagrafo = document.createElement("p");
    nameParagrafo.textContent = `Nome: ${userData.name}`;
    dadosDiv.appendChild(nameParagrafo);

    const cnpjParagrafo = document.createElement("p");
    cnpjParagrafo.textContent = `CNPJ: ${userData.cnpj}`;
    dadosDiv.appendChild(cnpjParagrafo);

    const passwordParagrafo = document.createElement("p");
    passwordParagrafo.textContent = `Password: ${userData.password}`;
    dadosDiv.appendChild(passwordParagrafo);
  } else {
    document.getElementById("dados").textContent = "Nenhum dado encontrado no nosso banco.";
  }
}

