burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
navList = document.querySelector(".nav-list")
rightNav = document.querySelector(".rightnav")

burger = addEventListener("click",()=>{
    rightNav.classList.toggle("v-class-resp")
    navList.classList.toggle("v-class-resp")
    navbar.classList.toggle("h-nav-resp")

})
// let name = document.getElementById("name").value ;
// console.log("name");

// let phone = document.getElementById("phone").value ;
// console.log("phone");

// let email = document.getElementById("email").value ;
// console.log("email");

// let address = document.getElementById("address").value ;
// console.log("address");

// let text = document.getElementById("text").value ;
// console.log("text");

