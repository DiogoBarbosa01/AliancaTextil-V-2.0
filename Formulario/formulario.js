document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    // You can add your form handling logic here, like sending data to a server
    // For now, let's just log the form data to the console
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach(function(value, key){
      formObject[key] = value;
    });
    console.log(formObject);
  });