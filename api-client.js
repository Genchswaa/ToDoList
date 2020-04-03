
// Ik ga de data van de api fetchen met de async/await methode.
const getDataFromEndPoint = async function() {

    const dataBaseWebsite = `https://wincacademydatabase.firebaseio.com/gian.json`;
    try {
        // Ik fetch de data van de api. Methode GET want het is een get request.
      const response = await fetch(dataBaseWebsite, { method: "GET" });
      const dataBase = await response.json();
   
      let tasks = Object.keys(dataBase).map(key => ({
        id: key,
        description: dataBase[key].description,
        done: dataBase[key].done}))
        return tasks;
      // catch inbouwen om melding te geven als het is mislukt.
    } catch (err) {
      console.log(err);
    }
  };



// // NOG AFMAKENNNN________________________________________
// //   Van de data in de console wil ik nu een array maken. 
//   // Ik maak een functie aan waarmee ik de data ga omzetten.
//   const addTasksToDom = async function() {
//       const dataForDom = await getDataFromEndPoint()
//       //Check
//     //   De data moet worden omgezet in een array.
//     //   Ik maak een UL aan in HTML en koppel de arrays eraan.
//       const ulTaskslist = document.getElementById("TDLtest")
      
      
//       const taskValue = dataForDom.description //NOG UITZOEKEN WAAROM HET NIET WERKT!

//         taskValue.forEach(taskValue => {
//             const newLi = document.createElement("li");
//             const contentLi = document.createTextNode(
//                 `${taskValue.description}`
//             )
//             newLi.appendChild(contentLi)
//             ulTaskslist.append(li)
//         })
//     };
//   addTasksToDom();
//_______________________________________________________________
// Ik wil de input in de console in arrays zetten
// const makeArrayOfTasks = getDataFromEndPoint();
// getData undefined....makeArray komt wel terug.
// makeArrayOfTasks.forEach(taskInArray);
// function taskInArray(item) {
//   let ulList = document.getElementById("TDLtest").innerHTML
//   += "<li>" + item + "</li>";
// };

