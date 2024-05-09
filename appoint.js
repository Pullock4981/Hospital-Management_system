
  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var form = document.querySelector('.formbold-form-wrapper form');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Validate form fields
      if (validateForm()) {
        // If the form is valid, submit it
        form.submit();
      }
    });

    // Function to validate form fields
    function validateForm() {
      var name = document.getElementById('name').value;
      var phone = document.getElementById('phone').value;
      var age = document.getElementById('age').value;
      var email = document.getElementById('email').value;

      // Perform basic validation (you can add more complex validation as needed)
      if (name.trim() === '') {
        alert('Please enter your full name');
        return false;
      }
      if (phone.trim() === '') {
        alert('Please enter your phone number');
        return false;
      }
      if (age.trim() === '') {
        alert('Please enter your age');
        return false;
      }
      if (email.trim() === '') {
        alert('Please enter your email');
        return false;
      }
      
      // Optionally, you can perform additional validation for other fields
      
      // If all validations pass, return true
      return true;
    }
  });
