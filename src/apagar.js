// export const postFuncionarios = (dados) => {
//     fetch("http://localhost:8080/employees", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dados),
//     })
//     .then((response) => response.json())
//     .then((dados) => {
//         console.log("Enviado com sucesso", dados)
//     })
//     .catch((erro) => console.error("Erro: ", erro))
// } 
/////////////////////////////////////////////////////////////////////////////////////////////
// const data = { username: "Victor Jordan" };

// fetch("https://backefront.com.br/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
/////////////////////////////////////////////////////////////////////////////////////
  const params = "605ab593ff78550015faff8f"
  
  const drinksAle = async () => {
    const response = await fetch(`https://whish-list-back-end.herokuapp.com/produtos/${params}`, requestOptions)
    const dados = await response.json()
    setEscolhido(dados);
  }

  const drinksAle = async () => {
    const response = await fetch('https://whish-list-back-end.herokuapp.com/produtos/', requestOptions)
    const dados = await response.json()
    setEscolhido(dados);
  }