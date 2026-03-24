export default function counterNumbers() {
  const numbers = Array.from(document.querySelectorAll(".about-number"));
  const numbersOriginal = numbers.map((n) => Number(n.innerText));

  numbers.forEach((n) => (n.innerText = 0));

  let hasAnimated = false;
  let counter;

  function randomValue(n) {
    if (n > 1000) return Math.floor(Math.random() * 2000);
    if (n > 10) return Math.floor(Math.random() * 100);
    return Math.floor(Math.random() * 5);
  }

  function animateNumbers() {
    counter = setInterval(() => {
      numbersOriginal.forEach((n, index) => {
        numbers[index].innerText = randomValue(n);
      });
    }, 33);

    setTimeout(() => {
      clearInterval(counter);
      numbers.forEach((n, index) => {
        n.innerText = "+" + numbersOriginal[index];
      });
    }, 900);
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAnimated) {
      animateNumbers();
      hasAnimated = true;
    }
  });

  observer.observe(numbers[0]);
}
