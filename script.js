const msg1 = document.querySelector(".message1")
const msg2 = document.querySelector(".message2")
const msg3 = document.querySelector(".message3")

const answer = Math.floor(Math.random() * 100) + 1
let no_of_guesses = 0
const guesses_nums = []

document.querySelector(".my_btn").addEventListener("click", play)

function play() {
  const user_guess = Number(document.querySelector(".guess").value)

  if (user_guess < 1 || user_guess > 100) {
    alert("Please enter a number between 1 and 100.")
  } else {
    guesses_nums.push(user_guess)
    no_of_guesses++

    if (user_guess < answer) {
      msg1.textContent = "Your guess is too low."
      msg2.textContent = "No. Of Guesses: " + no_of_guesses
      msg3.textContent = "Guessed numbers are: " + guesses_nums
    } else if (user_guess > answer) {
      msg1.textContent = "Your guess is too high."
      msg2.textContent = "No. Of Guesses: " + no_of_guesses
      msg3.textContent = "Guessed numbers are: " + guesses_nums
    } else if (user_guess === answer) {
      msg1.textContent = "You're goddamn right!"
      msg1.style.color = "#0f0"
      msg2.textContent = "The number was: " + answer
      msg3.textContent = "Guessed numbers it in " + no_of_guesses + " guesses."
      document.querySelector('.my_btn').disabled = true
    }
  }
}
