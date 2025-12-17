var count = 0
document.querySelector(".myButton").addEventListener("mouseover", function() {
    var messageDiv = document.querySelector(".message");
    messageDiv.innerHTML = `Додали нове повідомлення: ${count} р.`;
    messageDiv.style.color = "red";
    count += 1;
})


//document.querySelector(".myButton").addEventListener("click", function() {
//    alert("Ура! Наше перше повідомлення!!!")
//})
// document.querySelector("#myIdButton").addEventListener("click", function() {
    //  alert("Ура! Наше перше повідомлення від ID!!!")
//})
//document.querySelector("button").addEventListener("click", function() {
    //   alert("Ура! Наше перше повідомлення від button!!!")
//})