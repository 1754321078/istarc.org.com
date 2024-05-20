document.addEventListener('DOMContentLoaded', () => {
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  
    // Chatbot functionality
    const chatbotIcon = document.querySelector('.chatbot-icon');
    const chatbot = document.querySelector('.chatbot');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
  
    chatbotIcon.addEventListener('click', () => {
      chatbot.style.display = 'block';
      chatbotIcon.style.display = 'none';
    });
  
    chatbotClose.addEventListener('click', () => {
      chatbot.style.display = 'none';
      chatbotIcon.style.display = 'block';
    });
  
    chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && chatbotInput.value.trim() !== '') {
        const userMessage = chatbotInput.value.trim();
        const message = document.createElement('p');
        message.textContent = userMessage;
        chatbotMessages.appendChild(message);
  
        const botResponse = document.createElement('p');
        botResponse.textContent = getResponse(userMessage.toLowerCase());
        botResponse.style.backgroundColor = '#4b4b4b';
        chatbotMessages.appendChild(botResponse);
  
        chatbotInput.value = '';
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }
    });
  
    function getResponse(message) {
      const responses = {
        'privacy policy': 'Our privacy policy can be viewed on our Privacy Policy page.',
        'registration': 'Our privacy policy can be viewed on our Privacy Policy page.',
        'payment': 'Our privacy policy can be viewed on our Privacy Policy page.',
        'events': 'Our privacy policy can be viewed on our Privacy Policy page.',
    
    };
      for (const key in responses) {
        if (message.includes(key)) {
          return responses[key];
        }
      }
      return "Sorry, I didn't understand that. Can you please ask something else?";
    }
  
    // Make chatbot draggable
    let isDragging = false;
    let offsetX, offsetY;
  
    chatbot.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - chatbot.offsetLeft;
      offsetY = e.clientY - chatbot.offsetTop;
      chatbot.style.cursor = 'grabbing';
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        chatbot.style.left = `${e.clientX - offsetX}px`;
        chatbot.style.top = `${e.clientY - offsetY}px`;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
      chatbot.style.cursor = 'grab';
    });
  });
  