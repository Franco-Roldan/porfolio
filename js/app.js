const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'SENDING...';

   const serviceID = 'default_service';
   const templateID = 'template_m258y8q';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'SEND EMAIL';
        const message = document.querySelector('.content_message_env');
        message.setAttribute('style', 'display: block');
        
    }, (err) => {
      btn.value = 'SEND EMAIL';
      const message = document.querySelector('.content_message_error');
      message.setAttribute('style', 'display: block');
      
    });
    const reset_form = document.getElementById('form');
    reset_form.reset();
});