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



// variabile che conterrà il contenuto delle card
let cardContent = '';


// ciclo per generare le card
for (let i = 0; i < cardArray.length; i++) {

    cardContent += 
    `
    <div class="team-card">
        <div class="card-image">
            <img src=${cardArray[i]['image']} alt=${cardArray[i]['name']}/>
        </div>
        <div class="card-text">
            <h3>${cardArray[i]['name']}</h3>
            <p>${cardArray[i]['position']}</p>
        </div>
    </div>
    `;
}

// stampo le card nel container
document.querySelector('.team-container').innerHTML = cardContent;

