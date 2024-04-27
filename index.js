const app = document.getElementById('app');

const spinner = document.getElementById('spinner');

const wason = 'https://pbs.twimg.com/profile_images/905166030955315200/AUruGwaX_400x400.jpg'

spinner.innerHTML = `
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

console.log('1');

// Promesas, fetch, .then .cathc .finally ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

// Esta forma es mas anticuada <<<<<<<<<<<<<<<<<<<<<<<<

// fetch('data.json').then((respuestaA) => {
//     respuestaA.json().then((data) => {
//         app.innerHTML = `<h2>${data[1].name}</h2>`
//     });
// });

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Esta el la manera mas eficaz... Con fetch <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// fetch('data.json')
// .then((respuestaA) => {
//     if(!respuestaA.ok){
//         throw new Error('Revisa tu link');
//     }
//     return respuestaA.json();
// })
// .then((data) => {
//     data.forEach((item) => {
//         app.innerHTML += `
//         <div>
//         <h2>${item.name}</h2>
//         <p>Sale a la venta en ${item.year} con un estilo ${item.genre}. Actualmente quedan ${item.stock} en stock.</p>
//         <img src="${item.image}">
//         </div>`;

//         console.log(item); //Esta linea que muesta en consola los onjetos de datan.json se ve afecta por forEach, por eso pmuestra todos los objetos en pantalla.
//     })
// })  .catch(() => app.innerHTML = `
// <button class="btn btn-primary" type="button" disabled style="background: #0f0; color: #000;">
//   <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
//   <span role="status">Loading...</span>
// </button>`)
// .finally(() => (spinner.innerHTML = ""));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

// Este fetch es una manera especifica de entrar directo a la inforcmacion de un objeto en especifico ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

// fetch('data.json')
// .then((respuestaA) => {
//     if(!respuestaA.ok){
//         throw new Error('Revisa tu link')
//     }
//     return respuestaA.json();
// })
// .then((data) => {
//     cardContainer.innerHTML = `
//     <h2 id="title-card">${data[1].name}</h2>
//     <img alt="TheLegendOfZelda" src="${data[1].image}">
//     <p>Sale a la venta en ${data[1].year} con un estilo ${data[1].genre}. Actualmente quedan ${data[1].stock} en stock.</p>`;
//     })  .catch((fatalErrorA) => console.log(fatalErrorA.message));

// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

// Async mode ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

const fakePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola mundo");
    }, 1000)
})

const getGames = async() => {
    try {
        const hola = await fakePromise;
        const res = await fetch('data.json');

        if(!res.ok){
            throw new Error ('Error 404')
        }

        const data = await res.json();

        data.forEach(item => {

            app.innerHTML += `
            <div>
            <h2>${item.name}</h2>
            <p>Sale a la venta en ${item.year} con un estilo ${item.genre}. Actualmente quedan ${item.stock} en stock.</p>
            <img src="${item.image}">
            </div>`;
        })

    } catch (error) {

        console.log(error.message)
        app.innerHTML = `<img alt="wason" id="wason" src="${wason}">` + error.message + `<img alt="wason" id="wason" src="${wason}">`;

    } finally {

        spinner.innerHTML = "";

    }
};

getGames();

// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

console.log('3');