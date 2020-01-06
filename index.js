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
// document.addEventListener( "DOMContentLoaded", () => {      // Nasłuchiwanie na wypełnienie formularzu
//     let form = document.getElementById( "form" );
//     form.addEventListener( "submit", function( e ) {
//         e.preventDefault();
//         let json = toJSONString( this );
//     }, false);
// });