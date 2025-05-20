document.querySelector('#ADD').onclick = function () {
    const input = document.querySelector('#newtask input');
    
    if (input.value.length == 0) {
        alert('Please add a task');
    } 
    else {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.style.opacity = '0';
        taskDiv.style.transform = 'translateY(20px)';
        
        taskDiv.innerHTML = `
            <span id="taskname">
                ${input.value}
            </span>
            <button class="delete">
                Delete
            </button>
        `; 

        document.querySelector('#task').appendChild(taskDiv);
        
        // Animation
        setTimeout(() => {
            taskDiv.style.transition = 'all 0.3s ease';
            taskDiv.style.opacity = '1';
            taskDiv.style.transform = 'translateY(0)';
        }, 10);

        // Clear input
        input.value = '';

        // Add delete functionality
        taskDiv.querySelector('.delete').onclick = function() {
            taskDiv.style.opacity = '0';
            taskDiv.style.transform = 'translateX(100px)';
            setTimeout(() => {
                taskDiv.remove();
            }, 300);
        }
    }
};

// Add ability to submit with Enter key
document.querySelector('#newtask input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('#ADD').click();
    }
});
