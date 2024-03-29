document.querySelectorAll('a[href*="#"]')
 .forEach(anchor => {
 anchor.addEventListener("click", function (e) {
 e.preventDefault();
 document.querySelector(this.getAttribute("href")).scrollIntoView({
 behavior: "smooth"
 });
 });
 });

document.getElementById('contact-form').addEventListener('submit', function (event) {
 event.preventDefault();

 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const message = document.getElementById('message').value;

 const formData = {
 name,
 email,
 message
 };

 const url = '/api/contact';
 const options = {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 },
 body: JSON.stringify(formData)
 };

 fetch(url, options)
 .then(response => {
 if (response.ok) {
 alert('Thank you! Your message has been sent.');
 } else {
 throw new Error('Message could not be sent');
 }
 })
 .catch(error => {
 alert(`Error: ${error}`);
 });
});