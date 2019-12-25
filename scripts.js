function confirmFunction(){
    validateName();
    validateSurname();
    showModal();
}

function validateName(){
    var name = document.getElementById("name").value;
    if  (name.toLowerCase() !== "michał"){
        $('#name-valid').text("Podano niepoprawne imię");
        document.getElementById('name').setAttribute("class","invalid form-control"); 
    } else{
        $('#name-valid').text("");
        document.getElementById('name').setAttribute("class","form-control"); 
    }
}

function validateSurname(){
    var surname = document.getElementById("surname").value;
    if  (surname.toLowerCase() !== "oleszko"){
        $('#surname-valid').text("Podano niepoprawne nazwisko");
        document.getElementById('surname').setAttribute("class","invalid form-control"); 
    } else{
        $('#surname-valid').text("");
        document.getElementById('surname').setAttribute("class","form-control"); 
    }
}

function showModal(){
    if($('#surname-valid').text() == "" && $('#name-valid').text("")){
        sendMail();
        $('#exampleModalCenter').modal('toggle');
    }
}

function sendMail(){
    const Http = new XMLHttpRequest();
    const url='https://api.elasticemail.com/v2/email/send?apikey=fe4b54fb-cf96-4228-a7d7-09801cb432f1&subject=Prezent&from=fm.kamil.oleszko@gmail.com&to=michaloleszkoole@gmail.com&bodyHtml=Login:%20fm.kamil.oleszko@gmail.com%20Hasło:%20NbaToJestTo';
    Http.open("POST", url);
    Http.send();
}