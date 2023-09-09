const prevbtn = document.querySelector("#prev-btn");
const nextbtn = document.querySelector("#next-btn");
const userImg = document.querySelector("#user-img");
const user = [
  {
    name: "John Tarkpor",
    degree: "Junior Front-end Developer",
    testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`,
    imageUrl: "./images/image-john.jpg",
  },{
    name: "Tanya Sinclair",
    degree: "UX Engineer",
    testomonial: `“ I’ve been interested in coding for a while but never taken the jump, until now.
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so
    excited about the future. ”`,
    imgageUrl: "./images/image-tanya.jpg",

  }
  
]

prevbtn.addEventListener("click", () => {
    console.log(userImg);

    userImg.setAttribute("src", "./images/image-john.jpg");


});

nextbtn.addEventListener("click", () => {
    console.log(userImg);

    userImg.setAttribute("src", "./images/image-tanya.jpg");    
 
  }

);
