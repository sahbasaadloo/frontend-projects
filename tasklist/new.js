document.addEventListener('DOMContentLoaded', function() {
    const inputbox = document.getElementById('input-box');
    const listcontainer = document.getElementById('list-container');
    const add = document.getElementById('addtask'); // اصلاح نام دکمه (از 'addtask' به 'addtask')

    // Function to add task
    function addtask() {
        if (inputbox.value === '') {
            alert('You Must Write Something');
        } else {
            let li = document.createElement('li');
            li.innerHTML = inputbox.value;
            listcontainer.appendChild(li);

            let span = document.createElement('span');
            span.innerHTML = '\u00d7'; // '×' symbol to remove task
            li.appendChild(span);
        }
        inputbox.value = ''; // Clear the input box
        saveData();
    }

    // Event listener for removing task or toggling checked state
    listcontainer.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked'); // Toggle checked class
            saveData();
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove(); // Remove task
            saveData();
        }
    }, false);

    // Save list to localStorage
    function saveData() {
        localStorage.setItem('data', listcontainer.innerHTML);
    }

    // Show saved tasks from localStorage
    function showlists() {
        listcontainer.innerHTML = localStorage.getItem('data');
    }

    showlists(); // Load tasks when page is loaded

    if (add) {
        add.addEventListener('click', addtask); // Add task when button is clicked
    }
});
