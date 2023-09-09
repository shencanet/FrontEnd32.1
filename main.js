const prevbtn = document.querySelector("#prev-btn");
const nextbtn = document.querySelector("#next-btn");
const userImg = document.querySelector("#user-img");

prevbtn.addEventListener("click", () => {
    console.log(userImg);

    userImg.setAttribute("src", "./images/image-john.jpg");


});

nextbtn.addEventListener("click", () => {
    console.log(userImg);

    userImg.setAttribute("src", "./images/image-tanya.jpg");    
 
  }

);
