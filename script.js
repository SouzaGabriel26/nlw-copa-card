document.addEventListener("DOMContentLoaded", handleCardInfo("souzagabriel26"))

let isIgnite = false

function changeCard(event) {
  const card = event.currentTarget

  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite

  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}

function handleCardInfo(gitHubUser) {
  const photo = document.getElementById("photo")
  const name = document.getElementById("name")

  fetch(`https://api.github.com/users/${gitHubUser}`)
    .then((res) => res.json())
    .then((userData) => {
      photo.setAttribute("src", userData.avatar_url)
      name.innerHTML = userData.name
    })
}
