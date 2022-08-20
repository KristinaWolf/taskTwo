
/*исправить код таким образом, чтобы при фокусе у инпутов добавлялась красная рамка. Обработка событий должна происходить на formElement.*/

const formElement = document.forms['formElement'];

formElement.addEventListener ("focus", function(evt) {
    const activeElement = formElement.querySelector('.focused');
	if (activeElement) {
	    activeElement.classList.remove('focused');
    } 

    evt.target.classList.add('focused');
    
}, true);


formElement.addEventListener ("blur", function(evt) {
	const activeElement = formElement.querySelector('.focused');
    if (activeElement) {
     	activeElement.classList.remove('focused');   
    }
}, true);


