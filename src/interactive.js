export default function interactive(e) {
    if (e.target.checked) {
      e.target.nextElementSibling.classList.add('complete');
    } else {
      e.target.nextElementSibling.classList.remove('complete');
    }
  }