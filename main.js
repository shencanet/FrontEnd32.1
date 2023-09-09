const prevbtn = document.querySelector("#prev-btn");
const nextbtn = document.querySelector("#next-btn");
const userImg = document.querySelector("#user-img");
const userTestimonial = document.querySelector(".user-Testimonial");
const userName = document.querySelector(".user-name");
const userDegree = document.querySelector(".user-degree");
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
    testimonial: `“ I’ve been interested in coding for a while but never taken the jump, until now.
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so
    excited about the future. ”`,
    imageUrl: "./images/image-tanya.jpg",
  },
  {
    name: "David Guitierrez",
    degree: "Junior Back-end Developer",
    testimonial: `“ If you're looking to establish a rock-solid foundation, I highly suggest enrolling in this course. The level of detail covered by the instructors is truly remarkable. I'm now brimming with confidence as I embark on my journey towards becoming a skilled professional developer.”`,
    imageUrl: "./images/meme.png",
  },
];
let imageIndex = 0;

prevbtn.addEventListener("click", () => {
  console.log(imageIndex);

  if (imageIndex === 0) {
    imageIndex = users.length - 1;
    console.log(imageIndex);
  } else {
    imageIndex--;
  }

  userImg.setAttribute("src", users[imageIndex].imageUrl);
  userTestimonial.textContent = users[imageIndex].testimonial;
  userName.textContent = users[imageIndex].name;
  userDegree.textContent = users[imageIndex].degree;
});

nextbtn.addEventListener("click", () => {
  if (imageIndex === users.length - 1) {
    imageIndex = 0;

    console.log(imageIndex);
  } else {
    imageIndex++;
  }
  userImg.setAttribute("src", users[imageIndex].imageUrl);
  userTestimonial.textContent = users[imageIndex].testimonial;
  userName.textContent = users[imageIndex].name;
  userDegree.textContent = users[imageIndex].degree;
});
