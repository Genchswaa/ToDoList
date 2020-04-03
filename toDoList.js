
// Ik wil iets invullen en dat verschijnt beneden in de lijst.
// Dit moet door het indrukken van de button.
const addTaskNode = document.getElementById("addBtn");
addTaskNode.addEventListener('click', function(){
    const newli = document.createElement("li");
    const inputValue = document.getElementById("tekstInput").value;
    entry.appendChild(document.createTextNode(inputValue));
    list.appendChild(entry); 

    alert("test")
});

//Ik wil de taak zien verschijnen in beeld.

// Ik wil taak verwijderen door op prullenbak te klikken.
const removeBtn = document.getElementById("trashcan")
const liTaskListInput = document.querySelectorAll("li")
removeBtn.addEventListener('click', function(){
    const delLine = this.parentElement;
    delLine.style.display = "none";
    });

