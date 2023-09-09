const prevbtn = document.querySelector("#prev-btn");
const nextbtn = document.querySelector("#next-btn");
const userImg = document.querySelector("#user-img");
const users = [
  {
    name: "John Tarkpor",
    degree: "Junior Front-end Developer",
    testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`,
    imageUrl: "./images/image-john.jpg",
  },
  {
    name: "Tanya Sinclair",
    degree: "UX Engineer",
    testomonial: `“ I’ve been interested in coding for a while but never taken the jump, until now.
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so
    excited about the future. ”`,
    imageUrl: "./images/image-tanya.jpg",
  },
];
 let imageIndex = 0; 

prevbtn.addEventListener("click", () => {
  console.log(imageIndex);

if(imageIndex === 0){
  imageIndex = users.length - 1;
  console.log(imageIndex);  
}
else{
  imageIndex--
}

  userImg.setAttribute("src", users[imageIndex].imageUrl);
});



nextbtn.addEventListener("click", () => {
  if(imageIndex === users.length - 1){
    imageIndex = 0;

    console.log(imageIndex);
  


  }else{
    imageIndex++
  }
  userImg.setAttribute("src", users[imageIndex].imageUrl);


});
