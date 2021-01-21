const accordionButton = document.querySelectorAll('.accordion-step-button');
const closeButton = document.querySelector('.accordion-step-button-close');

const handleClick = (event) => {
  const button = event.currentTarget;
  const content = button.closest('.accordion-step').querySelector('.accordion-step-content');

  const icon = button.firstElementChild;
  const iconMinus = button.lastElementChild;

  icon.classList.toggle('hidden');
  iconMinus.classList.toggle('hidden');
  content.classList.toggle('hidden');
}

accordionButton.forEach(button => button.addEventListener('click', handleClick));
