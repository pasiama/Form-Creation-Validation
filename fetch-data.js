// Define the asynchronous function to fetch user data
async function fetchUserData() {
      // API URL for fetching user data
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      
      // Select the element where data will be displayed
      const dataContainer = document.getElementById('api-data');
      
      try {
          // Fetch data from the API
          const response = await fetch(apiUrl);
          
          // Check if the response is ok (status in the range 200-299)
          if (!response.ok) {
              throw new Error('Network response was not ok.');
          }
  
          // Convert the response to JSON
          const users = await response.json();
          
          // Clear the loading message
          dataContainer.innerHTML = '';
  
          // Create a <ul> element
          const userList = document.createElement('ul');
          
          // Loop through the users array and create <li> elements
          users.forEach(user => {
              const listItem = document.createElement('li');
              listItem.textContent = user.name;
              userList.appendChild(listItem);
          });
          
          // Append the <ul> to the dataContainer
          dataContainer.appendChild(userList);
      } catch (error) {
          // Clear the existing content and display an error message
          dataContainer.innerHTML = 'Failed to load user data.';
          console.error('There was a problem with the fetch operation:', error);
      }
  }
  
  // Invoke fetchUserData when the DOM content has fully loaded
  document.addEventListener('DOMContentLoaded', fetchUserData);
  