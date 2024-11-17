document.getElementById("form").addEventListener("submit", (ev) => {
  ev.preventDefault();

  let username = document.getElementById("username").value

  console.log(username);
  const url = `https://api.github.com/users/${username}`;


  fetch(url)
  .then(response => {
    if (! response.ok) {
      throw new Error("User not found");
    }
    return response.json();

  })
  .then(data => {
    console.log(data);
    console.log(data.avatar_url);

  }).catch(error =>{
    console.log("Error mahn :",error)
  })


});

// let username = "sainudheenp";


