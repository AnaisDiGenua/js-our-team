const cardArray = [{
        image: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO'
    },
    {
        image: 'img/angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chief Editor'
    },
    {
        image: 'img/walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager'
    },
    {
        image: 'img/angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Manager'
    },
    {
        image: 'img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer'
    },
    {
        image: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer'
    }
];





// richiamo la funzione
printCard();




// aggiunta nuove card al click
const addBtn = document.getElementById('addMemberButton');
addBtn.addEventListener("click", addNewMember);




// funzione per stampare le card
function printCard() {
    for (let i = 0; i < cardArray.length; i++) {

        // richiamo la funzione
        generateCard(cardArray[i]);
    
    }
}
    



// funzione per generare le card
function generateCard(array) {

    // variabile contenitore card
    const container = document.querySelector('.team-container');
    container.innerHTML += 
        `
        <div class="team-card">
            <div class="card-image">
                <img src=${array['image']} alt=${array['name']}/> 
            </div>
            <div class="card-text">
                <h3>${array['name']}</h3>
                <p>${array['role']}</p>
            </div>
        </div>
        `;
}




// funzione per aggiungere un nuovo membro
function addNewMember() {

    // salvo i valori degli input
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const image = document.getElementById('image').value;
    console.log(name, role, image);

    // costruisco il nuovo oggetto
    const newMember = {
        image,
        name,
        role
    };

    cardArray.push(newMember);
    generateCard(newMember);
    
}









