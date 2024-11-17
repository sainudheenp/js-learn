document.getElementById("form").addEventListener("submit", (ev) => {
  ev.preventDefault();

  let username = document.getElementById("username").value;

  console.log(username);
  const url = `https://api.github.com/users/${username}`;

  let ul = document.querySelector("ul");

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.avatar_url);
      let li = `Name : ${data.name}`;

      ul.append(data);
    })
    .catch((error) => {
      console.log("Error mahn :", error);
    });
});

// let username = "sainudheenp";
