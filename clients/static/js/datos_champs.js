// JavaScript para obtener los parámetros de la URL y mostrar los detalles del campeón correspondiente
const urlParams = new URLSearchParams(window.location.search);
const championName = urlParams.get('champion');


// Agrega el nombre del campeón a la URL de la API para obtener los detalles del campeón
fetch(`https://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_MX/champion/${championName}.json`)
.then(response => response.json())
.then(data => {

    const championData = data.data[championName];
    const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`;
    const championTitle = championData.title;
    const championDesc = championData.blurb;
    const skins = championData.skins;
    //datos de la tabla
    const championHp = championData.stats.hp;
    const championMp = championData.stats.mp;
    const championMovespeed = championData.stats.movespeed;
    const championArmor = championData.stats.armor;
    const championCrit = championData.stats.crit;
    const championAttackDm = championData.stats.attackdamage;
    const championAttackSp = championData.stats.attackspeed;
    
    const championDetailsHp = document.getElementById('hp');
    championDetailsHp.innerHTML =`${championHp}`

    const championDetailsMp = document.getElementById('mp');
    championDetailsMp.innerHTML =`${championMp}`

    const championDetailsMovespeed = document.getElementById('ms');
    championDetailsMovespeed.innerHTML =`${championMovespeed}`

    const championDetailsArmor = document.getElementById('armor');
    championDetailsArmor.innerHTML =`${championArmor}`

    const championDetailsCrit = document.getElementById('crit');
    championDetailsCrit.innerHTML =`${championCrit}`

    const championDetailsAttackDm = document.getElementById('attdam');
    championDetailsAttackDm.innerHTML =`${championAttackDm}`

    const championDetailsAttackSp = document.getElementById('attsp');
    championDetailsAttackSp.innerHTML =`${championAttackSp}`
    //fin datos de la tabla
    
    
    // Mostrar los detalles del campeón en el div #champion-details
    const championDetailsDiv = document.getElementById('champion-details');
    championDetailsDiv.innerHTML = `
        <h1>${championName}</h1>
        <img src="${championImage}" alt="${championName}" id="imgMain"> <br>
        <h4>${championTitle}</h4>
        <h2>${championDesc}</h2>
        
        
        
    `;

    // Iterar sobre las skins del campeón y mostrarlas
    const championSkins = document.getElementById('champions-skins');

    skins.slice(1).forEach(skin => {
        const skinImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin.num}.jpg`;
        const skinName = skin.name;
        championSkins.innerHTML += `
            <p>${skinName}</p>
            <img src="${skinImage}" alt="${skinName}" id="skinsChamp">
            
        `;
    });
    const championLoadSplash = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`;
    const championSplash = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`;
    const championIcon = `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/champion/${championName}.png`;
    
    const championSplashArt = document.getElementById('champion-splash');
    
    championSplashArt.innerHTML = `<h2>Loading Splash</h2><img src="${championLoadSplash}" id="splash1">
    <h2>SplashArt</h2><img src="${championSplash}" id="splash2">
    <h2>Icono Campeon</h2><img src="${championIcon}" id="splash3">
    `;
})  
.catch(error => {
    console.error('Error al obtener datos de la API:', error);
});
//Panel desplegable