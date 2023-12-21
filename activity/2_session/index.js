// Ejercicio 1

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4

// Ejercicio 5

// Ejercicio 6

let loginWithUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
      setTimeout(() => {
      if (username === "admin" && password === "passwd") {
          resolve("User logged in");
      } else {
          rejected("Error: invalid username or password");
      }
      }, 200);
  });
}

// Ejercicio 5

// Botón loginSuccess

const loginSuccessButton = document.getElementById("loginSuccess");
loginSuccessButton.addEventListener("click", async () => {
  // Creamos un objeto login correcto
  const login = {
      username: "admin",
      password: "passwd",
  };

  // Llamamos a la función login
  const result = await loginWithUsername(login.username, login.password);

  // Imprimimos el resultado en la consola
  console.log(result);
});

// Botón loginFailure

const loginFailureButton = document.getElementById("loginFailure");
loginFailureButton.addEventListener("click", async () => {
  // Creamos un objeto login incorrecto
  const login = {
      username: "pepe",
      password: "bad",
  };

  // Llamamos a la función login
  const result = await loginWithUsername(login.username, login.password);

  // Imprimimos el resultado en la consola
  console.log(result);
});

// Ejercicio 6

// Botón loginSuccessAsync

const loginSuccessAsyncButton = document.getElementById("loginSuccessAsync");
loginSuccessAsyncButton.addEventListener("click", async () => {
  // Creamos un objeto login correcto
  const login = {
      username: "admin",
      password: "passwd",
  };

  // Llamamos a la función loginWithUsername
  const result = await loginWithUsername(login.username, login.password);

  // Imprimimos el resultado en la consola
  console.log(result);
});

// Botón loginFailureAsync

const loginFailureAsyncButton = document.getElementById("loginFailureAsync");
loginFailureAsyncButton.addEventListener("click", async () => {
  // Creamos un objeto login incorrecto
  const login = {
      username: "pepe",
      password: "bad",
  };

  // Llamamos a la función loginWithUsername
  try {
      const result = await loginWithUsername(login.username, login.password);
  } catch (error) {
      // Imprimimos el error en la consola
      console.log(error);
  }
});
