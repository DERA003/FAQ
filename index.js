document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  console.log(questions);
  questions.forEach((question) => {
    question.addEventListener("click", function () {
      // alert(123456)
      const answer = this.nextElementSibling;
      answer.classList.toggle("active");
    });
  });
});