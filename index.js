var notes = [];


document.querySelector('.addNote').addEventListener('click', function(){
    console.log('Funkcja klikaj')
    basicPopup(); 
    showNotes();  
})

if(localStorage.getItem('notePocket') === null){
    localStorage.setItem('notePocket', JSON.stringify(notes));
}



document.getElementById('popup').style.display = 'none'

function basicPopup() {
    let mainStream = document.getElementById('mainStream');
    let popup = document.getElementById('popup')
    
    if (popup.style.display === "none"){
        mainStream.style.height = "25vw"
        popup.style.display = 'block'
    }else {
        mainStream.style.height = "5vw"
        popup.style.display = 'none'
    
    }

    //popupWindow = window.open("../popup.html",'popUpWindow','height=300,width=500,left=600,top=300,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=yes');
};
 document.addEventListener( "DOMContentLoaded", function()  {      // Nasłuchiwanie na wypełnienie formularzu
     var form = document.getElementById( "form" );
     form.addEventListener( "submit", function(e) {
         e.preventDefault();
         let json = JSON.stringify(this)
     }, false);
 });

 var getNotes = localStorage.getItem('notePocket');
 notes = JSON.parse(getNotes);    // tutaj są zapisane notatki juz w json


 function showNotes (){
     var note = document.getElementById('notes')
     for (let i = 1; i<note.childElementCount; i++)
     {
         note.removeChild[i]
     }
     
     notes.forEach(e =>{
        createNote()

        if(e.priority === 1){ //priorytet
            note.style.order = 1;
        }
            TODO //OPIS 
    })



 }

 var noteId = 0

 function createNote(){  //tworzy notatke
     notes.forEach(e, function(){
        let newNote = document.createElement('div');
        newNote.className = "note" // TODO dodac kolor
        note.id=noteId++
     })
 }
function addTextBoxes(){
    let noteTitle = document.createElement('textarea');
    noteTitle.className = 'noteTitle';
    noteTitle.value = e.title;
    noteTitle.disabled = true;
    
    let noteDescription = document.createElement('textarea');
    noteDescription.className = 'noteDescription';
    noteDescription.value = e.description;
    noteDescription.disabled = true;

    let noteFooter = document.createElement('textarea');
    noteFooter.className = 'noteFooter';
    noteFooter.value = e.description;
    noteFooter.appendChild(document.createTextNode("Created: " + e.date))
}