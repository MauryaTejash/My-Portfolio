var tablink,tabcontent;
var tablinks = document.getElementsByClassName('tab-link');
var tabcontents = document.getElementsByClassName('tab-content');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('activate-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('activate-tab');
    }
    event.currentTarget.classList.add('activate-link');
    document.getElementById(tabname).classList.add('activate-tab');
}

var sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right = '0';
}
function closemenu(){
    sidemenu.style.right = '-200px';
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxiU02jynKrQue3t-9k6_X2sJJwqYtEQrkFYZkNfd5HD4bLvb4aIhbrZGFJyF9NDNDH/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent Succesfully"
        setTimeout(function(){
            msg.innerHTML = ''
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})