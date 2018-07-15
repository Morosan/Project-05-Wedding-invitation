
document.getElementById("respond-btn").onclick = function() {openModal()};
document.getElementById("x-close").onclick = function() {closeModal()};
document.getElementById("send-mail").onclick = function() {sendMail()};

function openModal () {
    document.getElementById("modal").style.display = "inline-block";
}
function closeModal () {
    document.getElementById("modal").style.display = "none";
}
function sendMail () {
    window.open('mailto:morosan.ionutandrei@gmail.com');
}