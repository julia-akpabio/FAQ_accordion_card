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

/*TRYING TO FLIP ARROW ON CLICK
const flipArrow = document.getElementsByClassName("question-section");

flipArrow.addEventListener("click", function() {
    let carrot = document.getElementsByClassName("arrow"); 
    if (carrot.style.display === "block") {
        carrot.style.transform = "rotate(180deg)"; 
    } else { 
        carrot.style.transform = "rotate(180deg)"
 }
}
)
*/
