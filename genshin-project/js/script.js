document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const modal = document.getElementById('feedbackModal');
    const closeModalBtn = document.getElementById('closeModal');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();  
        
        submitButton.classList.add('loading');  
        modal.style.display = 'block';
        
        setTimeout(() => {
            submitButton.classList.remove('loading');  
            form.reset();  
        }, 3000);  
    });
    
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';  
    });
    
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';  
        }
    });
});