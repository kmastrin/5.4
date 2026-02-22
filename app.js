const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

text.style.color = "ffffff"; // change CSS with JS

changeColor.addEventListener("click", function() {
    text.classList.toggle("change");
}); // HTML Dom Manipulation

const userList = document.querySelectorAll(".inventory li");
console.log(userList);

for(user of userList) {
    user.addEventListener("click", function() {
        this.style.textDecoration = "line-through";
    });
} // For Loop

let i = 1;
while (i < 8) {
  console.log('Count:', i);
  i++;
} // While Loop