//Mostrar todos los campeones
function mostrarChamps() {
    // Hacer una solicitud a la API de League of Legends Static Data para obtener los datos de los campeones
    fetch('https://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_MX/champion.json')
    .then(response => response.json())
    .then(data => {
        const championsContainer = document.getElementById('champions-container');
        const championsData = data.data;
        

        // Iterar sobre los datos de los campeones y agregar cada grupo de tres a un div
        let championsInRow = 0;
        let rowDiv;
        
        for (const champion in championsData) {
            if (championsInRow === 0) {
                // Si no hay ningún campeón en la fila actual, crea un nuevo div de fila
                rowDiv = document.createElement('div');
                rowDiv.classList.add('row');
            }

            const championName = championsData[champion].name;
            const championTitle = championsData[champion].title;
            const championTags = championsData[champion].tags[0];
            const championDesc = championsData[champion].blurb;
            const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;
            const championColDiv = document.createElement('div');
            championColDiv.classList.add('col');
            championColDiv.classList.add('champion');
            championColDiv.innerHTML = `
            <img src="${championImage}" alt="${championName}"> <br>
            <h1>${championName}</h1>  <h4>${championTitle}</h4> <p>${championDesc}</p>
            <a href="detalles_campeon.html?champion=${encodeURIComponent(championName)}">Ver detalles</a>
        `;


            // Agregar el campeón a la fila actual
            rowDiv.appendChild(championColDiv);
            championsInRow++;

            // Si ya hay cuatro campeones en la fila actual, agregar la fila al contenedor principal y restablecer el contador
            if (championsInRow === 4) {
                championsContainer.appendChild(rowDiv);
                championsInRow = 0;
            }
        }

        // Si quedan campeones pendientes en la última fila, agrégala al contenedor principal
        if (championsInRow !== 0) {
            championsContainer.appendChild(rowDiv);
        }
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });
}

//Mostrar campeones que sean fighters
function mostrarFighters() {

        // Hacer una solicitud a la API de League of Legends Static Data para obtener los datos de los campeones
        fetch('https://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_MX/champion.json')
        .then(response => response.json())
        .then(data => {
            
            const championsData = data.data;
            const championsFighter = document.getElementById('champions-fighter');
    
            // Iterar sobre los datos de los campeones y agregar cada grupo de tres a un div
            let fightersInRow = 0;
            let rowDiv;
            for (const champion in championsData) {
                if (fightersInRow === 0) {
                    // Si no hay ningún campeón en la fila actual, crea un nuevo div de fila
                    rowDiv = document.createElement('div');
                    rowDiv.classList.add('row');
                }
                
                const championName = championsData[champion].name;
                const championTitle = championsData[champion].title;
                const championDesc = championsData[champion].blurb;
                const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;
                const fighterColDiv =  document.createElement('div');
                fighterColDiv.classList.add('col');
                fighterColDiv.classList.add('champion');
                if (championsData[champion].tags[0]=== 'Fighter') {
                    fighterColDiv.innerHTML = `
                    <img src="${championImage}" alt="${championName}"> <br>
                    <h1>${championName}</h1>  <h4>${championTitle}</h4> <p>${championDesc}</p>
                    <a href="detalles_campeon.html?champion=${encodeURIComponent(championName)}">Ver detalles</a>
                `;
                    // Agregar el campeón a la fila actual
                    rowDiv.appendChild(fighterColDiv);
                    fightersInRow++;
        
                    // Si ya hay cuatro campeones en la fila actual, agregar la fila al contenedor principal y restablecer el contador
                    if (fightersInRow === 4) {
                        championsFighter.appendChild(rowDiv);
                        fightersInRow = 0;
                    }
                }
            }
    
            // Si quedan campeones pendientes en la última fila, agrégala al contenedor principal
            if (fightersInRow !== 0) {
                championsFighter.appendChild(rowDiv);
            }
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });


}

//Mostrar campeones que sean Magos
function mostrarMagos() {

    // Hacer una solicitud a la API de League of Legends Static Data para obtener los datos de los campeones
    fetch('https://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_MX/champion.json')
    .then(response => response.json())
    .then(data => {
        
        const championsData = data.data;
        const championsMage = document.getElementById('champions-mage');

        // Iterar sobre los datos de los campeones y agregar cada grupo de tres a un div
        let magesInRow = 0;
        let rowDiv;
        for (const champion in championsData) {
            if (magesInRow === 0) {
                // Si no hay ningún campeón en la fila actual, crea un nuevo div de fila
                rowDiv = document.createElement('div');
                rowDiv.classList.add('row');
            }
            
            const championName = championsData[champion].name;
            const championTitle = championsData[champion].title;
            const championTags = championsData[champion].tags[0];
            const championDesc = championsData[champion].blurb;
            const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;
            const magesColDiv =  document.createElement('div');
            magesColDiv.classList.add('col');
            magesColDiv.classList.add('champion');
            if (championsData[champion].tags[0]=== 'Mage') {
                magesColDiv.innerHTML = `
                <img src="${championImage}" alt="${championName}"> <br>
                <h1>${championName}</h1>  <h4>${championTitle}</h4> <p>${championDesc}</p>
                <a href="detalles_campeon.html?champion=${encodeURIComponent(championName)}">Ver detalles</a>
            `;
                // Agregar el campeón a la fila actual
                rowDiv.appendChild(magesColDiv);
                magesInRow++;
    
                // Si ya hay cuatro campeones en la fila actual, agregar la fila al contenedor principal y restablecer el contador
                if (magesInRow === 4) {
                    championsMage.appendChild(rowDiv);
                    magesInRow = 0;
                }
            }




        }

        // Si quedan campeones pendientes en la última fila, agrégala al contenedor principal
        if (magesInRow !== 0) {
            championsMage.appendChild(rowDiv);
        }
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });

}

//Mostrar campeones que sean Asesinos
function mostrarAsesinos() {

    // Hacer una solicitud a la API de League of Legends Static Data para obtener los datos de los campeones
    fetch('https://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_MX/champion.json')
    .then(response => response.json())
    .then(data => {
        
        const championsData = data.data;
        const championsAssassin = document.getElementById('champions-assassin');

        // Iterar sobre los datos de los campeones y agregar cada grupo de tres a un div
        let AssassinInRow = 0;
        let rowDiv;
        for (const champion in championsData) {
            if (AssassinInRow === 0) {
                // Si no hay ningún campeón en la fila actual, crea un nuevo div de fila
                rowDiv = document.createElement('div');
                rowDiv.classList.add('row');
            }
            
            const championName = championsData[champion].name;
            const championTitle = championsData[champion].title;
            const championDesc = championsData[champion].blurb;
            const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;
            const AssassinColDiv =  document.createElement('div');
            AssassinColDiv.classList.add('col');
            AssassinColDiv.classList.add('champion');
            if (championsData[champion].tags[0]=== 'Assassin') {
                AssassinColDiv.innerHTML = `
                <img src="${championImage}" alt="${championName}"> <br>
                <h1>${championName}</h1>  <h4>${championTitle}</h4> <p>${championDesc}</p>
                <a href="detalles_campeon.html?champion=${encodeURIComponent(championName)}">Ver detalles</a>
            `;
                // Agregar el campeón a la fila actual
                rowDiv.appendChild(AssassinColDiv);
                AssassinInRow++;
    
                // Si ya hay cuatro campeones en la fila actual, agregar la fila al contenedor principal y restablecer el contador
                if (AssassinInRow === 4) {
                    championsAssassin.appendChild(rowDiv);
                    AssassinInRow = 0;
                }
            }




        }

        // Si quedan campeones pendientes en la última fila, agrégala al contenedor principal
        if (AssassinInRow !== 0) {
            championsAssassin.appendChild(rowDiv);
        }
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });

}


//Mostrar campeones que sean Tanques
function mostrarTanques() {

    // Hacer una solicitud a la API de League of Legends Static Data para obtener los datos de los campeones
    fetch('https://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_MX/champion.json')
    .then(response => response.json())
    .then(data => {
        
        const championsData = data.data;
        const championsTank = document.getElementById('champions-tank');
    
        // Iterar sobre los datos de los campeones y agregar cada grupo de tres a un div
        let TankInRow = 0;
        let rowDiv;
        for (const champion in championsData) {
            if (TankInRow === 0) {
                // Si no hay ningún campeón en la fila actual, crea un nuevo div de fila
                rowDiv = document.createElement('div');
                rowDiv.classList.add('row');
            }
    
            const championName = championsData[champion].name;
            const championTitle = championsData[champion].title;
            const championTags = championsData[champion].tags[0];
            const championDesc = championsData[champion].blurb;
            const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;
            const TankColDiv =  document.createElement('div');
            TankColDiv.classList.add('col');
            TankColDiv.classList.add('champion');
            if (championsData[champion].tags[0]=== 'Tank') {
                TankColDiv.innerHTML = `
                <img src="${championImage}" alt="${championName}"> <br>
                <h1>${championName}</h1>  <h4>${championTitle}</h4> <p>${championDesc}</p>
                <a href="detalles_campeon.html?champion=${encodeURIComponent(championName)}">Ver detalles</a>
            `;
                // Agregar el campeón a la fila actual
                rowDiv.appendChild(TankColDiv);
                TankInRow++;
    
                // Si ya hay cuatro campeones en la fila actual, agregar la fila al contenedor principal y restablecer el contador
                if (TankInRow === 4) {
                    championsTank.appendChild(rowDiv);
                    TankInRow = 0;
                }
            }

        }
        // Si quedan campeones pendientes en la última fila, agrégala al contenedor principal
        if (TankInRow !== 0) {
            championsTank.appendChild(rowDiv);
        }
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });
    }


//Mostrar campeones que sean Supports
function mostrarSoportes() {

    // Hacer una solicitud a la API de League of Legends Static Data para obtener los datos de los campeones
    fetch('https://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_MX/champion.json')
    .then(response => response.json())
    .then(data => {
    
    const championsData = data.data;
    const championsSupport = document.getElementById('champions-support');
    
    // Iterar sobre los datos de los campeones y agregar cada grupo de tres a un div
    let SupportInRow = 0;
    let rowDiv;
    for (const champion in championsData) {
        if (SupportInRow === 0) {
            // Si no hay ningún campeón en la fila actual, crea un nuevo div de fila
            rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
        }
    
        const championName = championsData[champion].name;
        const championTitle = championsData[champion].title;
        const championTags = championsData[champion].tags[0];
        const championDesc = championsData[champion].blurb;
        const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;
        const SupportColDiv =  document.createElement('div');
        SupportColDiv.classList.add('col');
        SupportColDiv.classList.add('champion');
        if (championsData[champion].tags[0]=== 'Support') {
            SupportColDiv.innerHTML = `
            <img src="${championImage}" alt="${championName}"> <br>
            <h1>${championName}</h1>  <h4>${championTitle}</h4> <p>${championDesc}</p>
            <a href="detalles_campeon.html?champion=${encodeURIComponent(championName)}">Ver detalles</a>
        `;
            // Agregar el campeón a la fila actual
            rowDiv.appendChild(SupportColDiv);
            SupportInRow++;
    
            // Si ya hay cuatro campeones en la fila actual, agregar la fila al contenedor principal y restablecer el contador
            if (SupportInRow === 4) {
                championsSupport.appendChild(rowDiv);
                SupportInRow = 0;
            }
        }
    
    }
    // Si quedan campeones pendientes en la última fila, agrégala al contenedor principal
    if (SupportInRow !== 0) {
        championsSupport.appendChild(rowDiv);
    }
    })
    .catch(error => {
    console.error('Error al obtener datos de la API:', error);
    });
    }

//Mostrar campeones que sean Tiradores
function mostrarTiradores() {
    
    // Hacer una solicitud a la API de League of Legends Static Data para obtener los datos de los campeones
    fetch('https://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_MX/champion.json')
    .then(response => response.json())
    .then(data => {
    
    const championsData = data.data;
    const championsMarksman = document.getElementById('champions-marksman');
    
    // Iterar sobre los datos de los campeones y agregar cada grupo de tres a un div
    let MarksmanInRow = 0;
    let rowDiv;
    for (const champion in championsData) {
        if (MarksmanInRow === 0) {
            // Si no hay ningún campeón en la fila actual, crea un nuevo div de fila
            rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
        }
    
        const championName = championsData[champion].name;
        const championTitle = championsData[champion].title;
        const championTags = championsData[champion].tags[0];
        const championDesc = championsData[champion].blurb;
        const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;
        const MarksmanColDiv =  document.createElement('div');
        MarksmanColDiv.classList.add('col');
        MarksmanColDiv.classList.add('champion');
        if (championsData[champion].tags[0]=== 'Marksman') {
            MarksmanColDiv.innerHTML = `
    <img src="${championImage}" alt="${championName}"> <br>
    <h1>${championName}</h1>  <h4>${championTitle}</h4> <p>${championDesc}</p>
    <a href="detalles_campeon.html?champion=${encodeURIComponent(championName)}">Ver detalles</a>
`;


            // Agregar el campeón a la fila actual
            rowDiv.appendChild(MarksmanColDiv);
            MarksmanInRow++;
    
            // Si ya hay cuatro campeones en la fila actual, agregar la fila al contenedor principal y restablecer el contador
            if (MarksmanInRow === 4) {
                championsMarksman.appendChild(rowDiv);
                MarksmanInRow = 0;
            }
        }
    
    }
    // Si quedan campeones pendientes en la última fila, agrégala al contenedor principal
    if (MarksmanInRow !== 0) {
        championsMarksman.appendChild(rowDiv);
    }
    })
    .catch(error => {
    console.error('Error al obtener datos de la API:', error);
    });
    }

document.addEventListener('DOMContentLoaded', function() {
    mostrarChamps();
    mostrarFighters();
    mostrarMagos();
    mostrarAsesinos();
    mostrarTanques();
    mostrarSoportes();
    mostrarTiradores();
});

//Panel desplegable
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
