import emailjs from 'emailjs-com';

const swalTranslations = {
  es: {
    successTitle: '¡Enviado!',
    successText: 'Tu mensaje fue enviado con éxito. ¡Gracias por contactarnos!',
    errorTitle: 'Error',
    errorText: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.',
    configError: 'Error de configuración. Verifica las credenciales de EmailJS.',
    sendingText: 'Enviando mensaje...'
  },
  en: {
    successTitle: 'Sent!',
    successText: 'Your message was sent successfully. Thank you for contacting us!',
    errorTitle: 'Error',
    errorText: 'There was a problem sending the message. Please try again.',
    configError: 'Configuration error. Please check EmailJS credentials.',
    sendingText: 'Sending message...'
  },
  pt: {
    successTitle: 'Enviado!',
    successText: 'Sua mensagem foi enviada com sucesso. Obrigado por nos contatar!',
    errorTitle: 'Erro',
    errorText: 'Houve um problema ao enviar a mensagem. Por favor, tente novamente.',
    configError: 'Erro de configuração. Verifique as credenciais do EmailJS.',
    sendingText: 'Enviando mensagem...'
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  const currentLang = form.getAttribute('data-lang') || document.documentElement.lang || 'en';
  const swalT = swalTranslations[currentLang] || swalTranslations.en;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Obtener las variables de entorno
    const serviceID1 = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID_1;
    const templateID1 = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID_1;
    const publicKey1 = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY_1;
    const serviceID2 = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID_2;
    const templateID2 = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID_2;
    const publicKey2 = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY_2;
    const toEmail = import.meta.env.PUBLIC_TO_EMAIL;
    
    // Verificar que las variables principales estén configuradas
    if (!serviceID1 || !templateID1 || !publicKey1) {
      console.error('EmailJS configuration missing:', { serviceID1, templateID1, publicKey1 });
      const Swal = (await import('sweetalert2')).default;
      Swal.fire({
        icon: 'error',
        title: swalT.errorTitle,
        text: swalT.configError,
        confirmButtonColor: '#d33',
      });
      return;
    }
    
    // Mostrar indicador de carga
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = swalT.sendingText;
    submitButton.disabled = true;
    
    try {
      // Preparar los datos del formulario
      const formData = new FormData(form);
      const emailData = {
        name: `${formData.get('name')} ${formData.get('surname')}`,
        email: formData.get('email'),
        cel: formData.get('cel'),
        notes: formData.get('message'),
        contact_type: formData.get('contactType'),
        to_email: toEmail,
      };
      
      // Enviar el primer email
      await emailjs.send(serviceID1, templateID1, emailData, publicKey1);
      
      // SOLO en producción intentar enviar el segundo mail
      if (serviceID2 && templateID2 && publicKey2) {
        await emailjs.send(serviceID2, templateID2, emailData, publicKey2);
      }
      
      // Limpiar formulario
      form.reset();
      
      // Mostrar mensaje de éxito
      const Swal = (await import('sweetalert2')).default;
      Swal.fire({
        icon: 'success',
        title: swalT.successTitle,
        text: swalT.successText,
        confirmButtonColor: '#3085d6',
      });
      
    } catch (error) {
      console.error('EmailJS error:', error);
      
      const Swal = (await import('sweetalert2')).default;
      Swal.fire({
        icon: 'error',
        title: swalT.errorTitle,
        text: swalT.errorText,
        confirmButtonColor: '#d33',
      });
    } finally {
      // Restaurar el botón
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
}); 