function createGame(player1, hour, player2 ) {
return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong> ${hour} </strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
  </li>
 ` 
}

function createCard(date, day, game) {
  return `
  <div class="card">
  <div class="card1"></div>
  <h2>${date} <span>${day}</span></h2>
  <ul>
  ${game}
    
  </ul>
</div>
  `
}

document.querySelector("#cards").innerHTML =

 createCard('22/11', 'quinta',createGame('Brazil', '16:00', 'Serbia'))
 +
 createCard('22/11', 'segunda', createGame('Brazil', '13:00', 'Switzerland'))
 +
 createCard('02/12', 'sexta', createGame ('Brazil', '16:00', 'cameroon' ))

