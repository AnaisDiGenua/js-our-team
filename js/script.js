const cardArray = [{
        image: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        position: 'Founder & CEO'
    },
    {
        image: 'img/angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        position: 'Chief Editor'
    },
    {
        image: 'img/walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        position: 'Office Manager'
    },
    {
        image: 'img/angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        position: 'Social Media Manager'
    },
    {
        image: 'img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        position: 'Developer'
    },
    {
        image: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        position: 'Graphic Designer'
    }
];




console.log(cardArray);






// funzione per generare le card
function addCard (array) {
    // variabile che conterrà il contenuto delle card
    let cardContent = '';

    for (let i = 0; i < array.length; i++) {

        cardContent += 
        `
        <div class="team-card">
            <div class="card-image">
                <img src=${array[i]['image']} alt=${array[i]['name']}/>
            </div>
            <div class="card-text">
                <h3>${array[i]['name']}</h3>
                <p>${array[i]['position']}</p>
            </div>
        </div>
        `;
    }

    return cardContent;
}


// stampo le card nel container
document.querySelector('.team-container').innerHTML = addCard(cardArray);


// aggiunta nuove card
const addBtn = document.getElementById('addMemberButton');
let newCard = '';

addBtn.addEventListener("click", function() {

    // salvo i valori degli input
    const addName = document.getElementById('name').value;
    console.log(addName);
    const addRole = document.getElementById('role').value;
    console.log(addRole);
    const addImage = document.getElementById('image').value
    console.log(addImage);


    // creazione nuova card
    newCard += 
    `
    <div class="team-card">
        <div class="card-image">
            <img src=${addImage} alt=${addName}/>
        </div>
        <div class="card-text">
            <h3>${addName}</h3>
            <p>${addRole}</p>
        </div>
    </div>
    `;

    // stampo nel container
    document.querySelector('.team-container').innerHTML += newCard;

})


