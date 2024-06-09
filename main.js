const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("ul");
const navListItem = document.querySelectorAll("header ul li");
const contactForm = document.getElementById("contact-form");

(function() {
  emailjs.init('jtHAzUFpkERYpukOg'); 
})();

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("submitted");

  const serviceID = 'service_jlhvmgb';  
  const templateID = 'template_xmrvbch';  

  emailjs.sendForm(serviceID, templateID, this).then(
    function() {
      alert("Email sent successfully!");
    },
    function(error) {
      alert("Failed to send email. Error: " + JSON.stringify(error));
    }
  );
});


hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});

navListItem.forEach((item) => {
  item.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});
