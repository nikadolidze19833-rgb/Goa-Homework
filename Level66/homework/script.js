const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".faq-icon");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    // Close every FAQ
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
      faq.querySelector(".faq-answer").hidden = true;
      faq.querySelector(".faq-icon").textContent = "+";
    });

    // Open the clicked FAQ
    if (!isOpen) {
      item.classList.add("active");
      answer.hidden = false;
      icon.textContent = "−";
    }
  });
});
