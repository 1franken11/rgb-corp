import emailjs from 'emailjs-com';

const swalTranslations = {
  es: {
    successTitle: '¡Enviado!',
    successText: 'Tu mensaje fue enviado con éxito. ¡Gracias por contactarnos!',
    errorTitle: 'Error',
    errorText: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.'
  },
  en: {
    successTitle: 'Sent!',
    successText: 'Your message was sent successfully. Thank you for contacting us!',
    errorTitle: 'Error',
    errorText: 'There was a problem sending the message. Please try again.'
  },
  pt: {
    successTitle: 'Enviado!',
    successText: 'Sua mensagem foi enviada com sucesso. Obrigado por nos contatar!',
    errorTitle: 'Erro',
    errorText: 'Houve um problema ao enviar a mensagem. Por favor, tente novamente.'
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const currentLang = form.getAttribute('data-lang') || document.documentElement.lang || 'en';
  const swalT = swalTranslations[currentLang] || swalTranslations.en;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const serviceID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.PUBLIC_EMAILJS_USER_ID;
    try {
      await emailjs.sendForm(serviceID, templateID, form, userID);
      form.reset();
      const Swal = (await import('sweetalert2')).default;
      Swal.fire({
        icon: 'success',
        title: swalT.successTitle,
        text: swalT.successText,
        confirmButtonColor: '#3085d6',
      });
    } catch (error) {
      const Swal = (await import('sweetalert2')).default;
      Swal.fire({
        icon: 'error',
        title: swalT.errorTitle,
        text: swalT.errorText,
        confirmButtonColor: '#d33',
      });
    }
  });
}); 