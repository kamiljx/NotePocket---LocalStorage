var notes = [];
document.querySelector('.addNote').addEventListener('click', function(){
    console.log('Funkcja klikaj')
    basicPopup();   
})
if(localStorage.getItem('notePocket') === null){
    localStorage.setItem('notePocket', JSON.stringify(notes));
}

function basicPopup() {
    popupWindow = window.open("../popup.html",'popUpWindow','height=300,width=500,left=600,top=300,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=yes');
};
 document.addEventListener( "DOMContentLoaded", function()  {      // Nasłuchiwanie na wypełnienie formularzu
     var form = document.getElementById( "form" );
     form.addEventListener( "submit", function(e) {
         e.preventDefault();
         var json = toJSONString(this);
     }, false);
 });

 var getNotes = localStorage.getItem('notePocket');
 notes = JSON.parse(getNotes);    // tutaj są zapisane notatki juz w json


 function showNotes (){
     var note = document.querySelector('#notes')
     for (let i = 1; i<note.childElementCount; i++)
     {
         note.removeChild[i]
     }
 }

 function createNote(){
     var noteId = 0
     notes.forEach(e, function(){
        let newNote = document.createElement('div');
        newNote.className = "note" //TODO dodac kolor
     })
 }