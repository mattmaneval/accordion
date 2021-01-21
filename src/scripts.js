const accordianButton = document.querySelectorAll('.accordian-step-button');
const closeButton = document.querySelector('.accordian-step-button-close');

const handleClick = (event) => {
  const button = event.currentTarget;
  const content = button.closest('.accordian-step').querySelector('.accordian-step-content');

  const icon = button.firstElementChild;
  const iconMinus = button.lastElementChild;

  icon.classList.toggle('hidden');
  iconMinus.classList.toggle('hidden');
  content.classList.toggle('hidden');
}

accordianButton.forEach(button => button.addEventListener('click', handleClick));
