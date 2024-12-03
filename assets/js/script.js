document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".custom-Dropdown");

  dropdowns.forEach((dropdown) => {
      const selectedOption = dropdown.querySelector(".dropdown-SelectedOption");
      const optionsContainer = dropdown.querySelector(".dropdown-OptionsContainer");
      const options = dropdown.querySelectorAll(".dropdown-Option");
      const selectedText = selectedOption.querySelector(".dropdown-SelectedText");

      selectedOption.addEventListener("click", (event) => {
          event.preventDefault();
          const isOpen = optionsContainer.style.display === "block";
          closeAllDropdowns();
          optionsContainer.style.display = isOpen ? "none" : "block";
          dropdown.classList.toggle("dropdown-active", !isOpen);
      });

      options.forEach((option) => {
          option.addEventListener("click", () => {
              // Find the <img> tag inside the selected option
              const flagImg = option.querySelector("img").outerHTML;

              // Set only the flag image as the selected text
              selectedText.innerHTML = flagImg;

              // Handle the visual selection
              options.forEach((opt) => opt.classList.remove("selected"));
              option.classList.add("selected");

              // Close the dropdown
              optionsContainer.style.display = "none";
              dropdown.classList.remove("dropdown-active");
          });
      });
  });

  document.addEventListener("click", function (event) {
      if (!event.target.closest(".custom-Dropdown")) {
          closeAllDropdowns();
      }
  });

  function closeAllDropdowns() {
      dropdowns.forEach((dropdown) => {
          dropdown.querySelector(".dropdown-OptionsContainer").style.display = "none";
          dropdown.classList.remove("dropdown-active");
      });
  }
});



  

  document.addEventListener('DOMContentLoaded', function () {
    // Select all country dropdowns
    const dropdowns = document.querySelectorAll('.country-Dropdown');

    dropdowns.forEach(dropdown => {
        const selectedOption = dropdown.querySelector('.country-SelectedOption');
        const optionsContainer = dropdown.querySelector('.country-OptionsContainer');
        const options = dropdown.querySelectorAll('.country-Option');
        const selectedText = selectedOption.querySelector('.country-SelectedText');

        // Toggle dropdown visibility when clicked
        selectedOption.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent default behavior
            const isOpen = optionsContainer.style.display === 'block';
            closeAllDropdowns();  // Close all other open dropdowns
            optionsContainer.style.display = isOpen ? 'none' : 'block';
            dropdown.classList.toggle('active', !isOpen);
        });

        // Handle option selection within the dropdown
        options.forEach(option => {
            option.addEventListener('click', () => {
                selectedText.innerText = option.innerText;
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                optionsContainer.style.display = 'none';  // Close the dropdown after selection
                dropdown.classList.remove('active');
            });
        });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.country-Dropdown')) {
            closeAllDropdowns();
        }
    });

    // Function to close all dropdowns
    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.country-OptionsContainer').style.display = 'none';
            dropdown.classList.remove('active');
        });
    }
});






  
  // password
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var togglePassword = document.querySelector(".toggle-password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.classList.remove("fa-eye-slash");
      togglePassword.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      togglePassword.classList.remove("fa-eye");
      togglePassword.classList.add("fa-eye-slash");
    }
  }