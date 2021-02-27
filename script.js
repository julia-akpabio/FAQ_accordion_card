let accordian = document.getElementsByClassName("question"); 
let i; 

for (i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling; 
        if (panel.style.display === "block") {
            panel.style.display = "none"; 
        } else {
            panel.style.display = "block";
        }
    });
}

function flipArrow() {
    let carrot = document.getElementById("arrow1");
        if (carrot.style.transform === "rotate(0.5turn)") {
            carrot.style.transform = "rotate(0turn)";
        } else {
            carrot.style.transform = "rotate(0.5turn)"; 
        } 
}

function flipArrow2() {
    let carrot = document.getElementById("arrow2");
        if (carrot.style.transform === "rotate(0.5turn)") {
            carrot.style.transform = "rotate(0turn)";
        } else {
            carrot.style.transform = "rotate(0.5turn)"; 
        } 
}

function flipArrow3() {
    let carrot = document.getElementById("arrow3");
        if (carrot.style.transform === "rotate(0.5turn)") {
            carrot.style.transform = "rotate(0turn)";
        } else {
            carrot.style.transform = "rotate(0.5turn)"; 
        } 
}
  
function flipArrow4() {
    let carrot = document.getElementById("arrow4");
        if (carrot.style.transform === "rotate(0.5turn)") {
            carrot.style.transform = "rotate(0turn)";
        } else {
            carrot.style.transform = "rotate(0.5turn)"; 
        } 
}

function flipArrow5() {
    let carrot = document.getElementById("arrow5");
        if (carrot.style.transform === "rotate(0.5turn)") {
            carrot.style.transform = "rotate(0turn)";
        } else {
            carrot.style.transform = "rotate(0.5turn)"; 
        } 
}
 



