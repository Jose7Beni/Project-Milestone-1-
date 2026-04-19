// Quiz grading logic for milestone 2

function gradeQuiz() {
  const resultsBox = document.getElementById("results");
  const summary = document.getElementById("summary");
  const details = document.getElementById("details");

  let score = 0;
  const totalQuestions = 5;
  let output = "";

  // Question 1: fill in the blank
  const q1 = document.getElementById("q1").value.trim().toLowerCase();
  const q1Correct = "technology";
  if (q1 === q1Correct) {
    score++;
    output += `<p class="correct">Question 1: Correct (1/1). Answer: technology</p>`;
  } else {
    output += `<p class="incorrect">Question 1: Incorrect (0/1). Correct answer: technology</p>`;
  }

  // Question 2: multiple choice
  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === "applepay") {
    score++;
    output += `<p class="correct">Question 2: Correct (1/1). Answer: Apple Pay</p>`;
  } else {
    output += `<p class="incorrect">Question 2: Incorrect (0/1). Correct answer: Apple Pay</p>`;
  }

  // Question 3: multiple choice
  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === "multifactor") {
    score++;
    output += `<p class="correct">Question 3: Correct (1/1). Answer: Multi-factor authentication</p>`;
  } else {
    output += `<p class="incorrect">Question 3: Incorrect (0/1). Correct answer: Multi-factor authentication</p>`;
  }

  // Question 4: multiple choice
  const q4 = document.querySelector('input[name="q4"]:checked');
  if (q4 && q4.value === "protect") {
    score++;
    output += `<p class="correct">Question 4: Correct (1/1). Answer: Converts data into coded form</p>`;
  } else {
    output += `<p class="incorrect">Question 4: Incorrect (0/1). Correct answer: Converts data into coded form</p>`;
  }

  // Question 5: multi-selection
  const q5Checked = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(item => item.value);
  const q5CorrectAnswers = ["phishing", "ransomware", "databreach"];
  const q5IsCorrect =
    q5Checked.length === q5CorrectAnswers.length &&
    q5CorrectAnswers.every(answer => q5Checked.includes(answer));

  if (q5IsCorrect) {
    score++;
    output += `<p class="correct">Question 5: Correct (1/1). Answers: Phishing, Ransomware, Data breach</p>`;
  } else {
    output += `<p class="incorrect">Question 5: Incorrect (0/1). Correct answers: Phishing, Ransomware, Data breach</p>`;
  }

  // Pass/fail result
  const percent = (score / totalQuestions) * 100;
  const passed = percent >= 60;

  summary.innerHTML = `
    <p class="${passed ? "correct" : "incorrect"}">
      Overall Result: ${passed ? "Pass" : "Fail"}
    </p>
    <p>Total Score: ${score} / ${totalQuestions} (${percent.toFixed(0)}%)</p>
  `;

  details.innerHTML = output;
  resultsBox.classList.remove("hidden");
}

// Reset quiz and clear results
function resetQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("summary").innerHTML = "";
  document.getElementById("details").innerHTML = "";
  document.getElementById("results").classList.add("hidden");
}