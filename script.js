const questions = [
  "🧠 What is the negative thought you're having?",
  "Have you ever faced something like this before? What helped you get through it?",
  "What's one thing this situation is teaching you about yourself?",
  "If you zoomed out, how might this challenge help you grow over time?",
  "What strengths or positive qualities do you bring to this moment?",
  "Who or what helps you feel supported when things are hard?",
  "What's one small thing you could do today to feel even a little bit better?",
  "How have you handled tough emotions in the past that you're proud of?",
  "What really matters to you deep down—and how can you live by that now?",
  "If your best friend was going through this, what would you tell them?",
  "💡 Now, how might you reframe your negative thought to be more supportive or encouraging?"
];

let answers = [];
let current = 0;
let initialMood = null;
let finalMood = null;
let showingWelcome = true;
let showingInitialMood = false;
let showingFinalMood = false;

const promptBox = document.getElementById("prompt-box");
const input = document.getElementById("user-input");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const summaryBox = document.getElementById("summary-box");
const summary = document.getElementById("summary");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");



function showWelcomePage() {
  promptBox.innerHTML = `
    <div class="welcome-page">
      <h2>Welcome to ChatterHeal 🌱</h2>
      <div class="welcome-content">
        <p><strong>What is ChatterHeal?</strong></p>
        <p>ChatterHeal is your personal thought reframing companion. We all have negative thoughts sometimes, and that's completely normal. But when these thoughts feel overwhelming, it can help to look at them from a different perspective.</p>
        
        <p><strong>How does it work?</strong></p>
        <p>Through a series of gentle, reflective questions, ChatterHeal guides you to:</p>
        <ul>
          <li>🧠 Identify and examine your negative thoughts</li>
          <li>💪 Recognize your inner strengths and past successes</li>
          <li>🔄 Reframe challenging situations in a more supportive way</li>
          <li>📈 Track how your mood changes through the process</li>
        </ul>
        
        <p><strong>Remember:</strong> This isn't about toxic positivity or pretending everything is fine. It's about finding a kinder, more balanced way to talk to yourself during difficult moments.</p>
        
        <p><strong>🔒 Your Privacy Matters:</strong> This tool is completely anonymous. Nothing you type is stored, saved, or shared anywhere. Your thoughts and responses exist only in your browser session and disappear when you close the page. Feel free to be completely honest and open.</p>
        
        <p>Ready to begin your journey toward gentler self-talk?</p>
      </div>
      <button class="start-btn" onclick="startJourney()">Start Your Journey</button>
    </div>
  `;
  input.style.display = "none";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  progressText.textContent = "Welcome";
  progressFill.style.width = "0%";
}

function startJourney() {
  showingWelcome = false;
  showingInitialMood = true;
  showInitialMoodTracker();
}

function showInitialMoodTracker() {
  promptBox.innerHTML = `
    <div class="mood-tracker">
      <h3>What is your mood today?</h3>
      <div class="mood-options">
        <div class="mood-option" onclick="selectInitialMood(1)" tabindex="0" data-mood="1">
          <div class="mood-emoji">😢</div>
          <div class="mood-label">Very Sad</div>
        </div>
        <div class="mood-option" onclick="selectInitialMood(2)" tabindex="0" data-mood="2">
          <div class="mood-emoji">😔</div>
          <div class="mood-label">Sad</div>
        </div>
        <div class="mood-option" onclick="selectInitialMood(3)" tabindex="0" data-mood="3">
          <div class="mood-emoji">😐</div>
          <div class="mood-label">Neutral</div>
        </div>
        <div class="mood-option" onclick="selectInitialMood(4)" tabindex="0" data-mood="4">
          <div class="mood-emoji">😊</div>
          <div class="mood-label">Happy</div>
        </div>
        <div class="mood-option" onclick="selectInitialMood(5)" tabindex="0" data-mood="5">
          <div class="mood-emoji">😁</div>
          <div class="mood-label">Very Happy</div>
        </div>
      </div>
      <p style="text-align: center; margin-top: 15px; color: #6B5391; font-size: 0.9rem;">
        <em>Use number keys 1-5 or click to select</em>
      </p>
    </div>
  `;
  input.style.display = "none";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  progressText.textContent = "Mood Check";
  progressFill.style.width = "0%";
  
  // Focus first mood option
  setTimeout(() => {
    const firstOption = document.querySelector('.mood-option');
    if (firstOption) firstOption.focus();
  }, 100);
}

function showFinalMoodTracker() {
  promptBox.innerHTML = `
    <div class="mood-tracker">
      <h3>After reframing your thought, what is your mood?</h3>
      <div class="mood-options">
        <div class="mood-option" onclick="selectFinalMood(1)" tabindex="0" data-mood="1">
          <div class="mood-emoji">😢</div>
          <div class="mood-label">Very Sad</div>
        </div>
        <div class="mood-option" onclick="selectFinalMood(2)" tabindex="0" data-mood="2">
          <div class="mood-emoji">😔</div>
          <div class="mood-label">Sad</div>
        </div>
        <div class="mood-option" onclick="selectFinalMood(3)" tabindex="0" data-mood="3">
          <div class="mood-emoji">😐</div>
          <div class="mood-label">Neutral</div>
        </div>
        <div class="mood-option" onclick="selectFinalMood(4)" tabindex="0" data-mood="4">
          <div class="mood-emoji">😊</div>
          <div class="mood-label">Happy</div>
        </div>
        <div class="mood-option" onclick="selectFinalMood(5)" tabindex="0" data-mood="5">
          <div class="mood-emoji">😁</div>
          <div class="mood-label">Very Happy</div>
        </div>
      </div>
      <p style="text-align: center; margin-top: 15px; color: #6B5391; font-size: 0.9rem;">
        <em>Use number keys 1-5 or click to select</em>
      </p>
    </div>
  `;
  input.style.display = "none";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  
  // Focus first mood option
  setTimeout(() => {
    const firstOption = document.querySelector('.mood-option');
    if (firstOption) firstOption.focus();
  }, 100);
}

function selectInitialMood(mood) {
  initialMood = mood;
  updateBodyMoodClass(mood);
  showingInitialMood = false;
  input.style.display = "block";
  nextBtn.style.display = "block";
  showQuestion(0);
}

function selectFinalMood(mood) {
  finalMood = mood;
  updateBodyMoodClass(mood);
  showingFinalMood = false;
  showSummary();
}

function updateBodyMoodClass(mood) {
  document.body.classList.remove('mood-sad', 'mood-neutral', 'mood-happy');
  
  if (mood <= 2) {
    document.body.classList.add('mood-sad');
  } else if (mood === 3) {
    document.body.classList.add('mood-neutral');
  } else {
    document.body.classList.add('mood-happy');
  }
}

function showQuestion(idx) {
  // Check if there's an existing negative thought box and remove it
  const existingBox = document.getElementById("negative-thought-box");
  if (existingBox) {
    existingBox.remove();
  }

  // Show negative thought box for question 11 (index 10)
  if (idx === 10 && answers[0]) {
    const negativeThoughtBox = document.createElement("div");
    negativeThoughtBox.id = "negative-thought-box";
    negativeThoughtBox.className = "negative-thought-box";
    negativeThoughtBox.innerHTML = `
      <h3>Your Negative Thought:</h3>
      <p>${answers[0]}</p>
    `;
    promptBox.parentNode.insertBefore(negativeThoughtBox, promptBox);
  }

  promptBox.textContent = questions[idx];
  input.value = answers[idx] || "";
  input.focus();
  progressText.textContent = `Question ${idx + 1} of ${questions.length}`;
  progressFill.style.width = `${((idx + 1) / questions.length) * 100}%`;
  
  // Show/hide previous button
  if (idx > 0) {
    prevBtn.style.display = "inline-block";
  } else {
    prevBtn.style.display = "none";
  }
}

// Debug check
console.log("script.js loaded");

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  // Only handle keyboard events when not on welcome page or mood trackers
  if (showingWelcome || showingInitialMood || showingFinalMood) return;
  
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    // Trigger next button click
    nextBtn.click();
  } else if (e.key === "ArrowLeft" && current > 0) {
    e.preventDefault();
    prevBtn.click();
  } else if (e.key === "ArrowRight" && current < questions.length - 1) {
    e.preventDefault();
    nextBtn.click();
  }
});

// Allow Shift+Enter for line breaks in textarea
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.shiftKey) {
    // Allow default behavior for Shift+Enter (new line)
    return;
  }
});

nextBtn.addEventListener("click", () => {
  const response = input.value.trim();
  if (!response) return;
  answers[current] = response;
  
  // Show emoji reaction and affirmation
  showEmojiReaction(current);
  
  current++;
  if (current < questions.length) {
    setTimeout(() => {
      showQuestion(current);
    }, 2000); // Wait for reaction animation
  } else {
    setTimeout(() => {
      showingFinalMood = true;
      showFinalMoodTracker();
    }, 2000);
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    showQuestion(current);
  }
});

function getMoodEmoji(mood) {
  const emojis = ["😢", "😔", "😐", "😊", "😁"];
  return emojis[mood - 1];
}

function getMoodLabel(mood) {
  const labels = ["Very Sad", "Sad", "Neutral", "Happy", "Very Happy"];
  return labels[mood - 1];
}

function showEmojiReaction(questionIndex) {
  const reactions = [
    { emoji: "💪", message: "That was brave to share ✨" },
    { emoji: "🌟", message: "You're reflecting beautifully 😌" },
    { emoji: "🧠", message: "That's some deep thinking! 💭" },
    { emoji: "🌱", message: "Growth mindset activated! 🚀" },
    { emoji: "✋", message: "High five for being honest ✋" },
    { emoji: "🤗", message: "Your support system matters 💙" },
    { emoji: "🌈", message: "Small steps, big changes ✨" },
    { emoji: "🏆", message: "You're stronger than you know 💪" },
    { emoji: "❤️", message: "Your values shine through 🌟" },
    { emoji: "🤝", message: "Kindness to yourself matters 💝" },
    { emoji: "🎉", message: "Beautiful reframe! You've got this! 🌟" }
  ];

  const reaction = reactions[questionIndex];
  
  // Create reaction overlay
  const overlay = document.createElement("div");
  overlay.className = "reaction-overlay";
  overlay.innerHTML = `
    <div class="reaction-content">
      <div class="reaction-emoji">${reaction.emoji}</div>
      <div class="reaction-message">${reaction.message}</div>
    </div>
  `;
  
  document.body.appendChild(overlay);
  
  // Trigger animation
  setTimeout(() => overlay.classList.add("show"), 100);
  
  // Remove after animation
  setTimeout(() => {
    overlay.classList.remove("show");
    setTimeout(() => overlay.remove(), 500);
  }, 1500);
  
  // Show breathing exercise only once after the first question
  if (questionIndex === 0) {
    setTimeout(() => showBreathingExercise(questionIndex), 1600);
  }
  
  // Show progress affirmation every 3 questions
  if ((questionIndex + 1) % 3 === 0 && questionIndex < 9) {
    setTimeout(() => showProgressAffirmation(questionIndex), 800);
  }
}

function showBreathingExercise(questionIndex) {
  const breathingOverlay = document.createElement("div");
  breathingOverlay.className = "breathing-overlay";
  breathingOverlay.innerHTML = `
    <div class="breathing-content">
      <div class="breathing-circle"></div>
      <div class="breathing-text">
        <h3>Let's take a moment to breathe</h3>
        <p class="breathing-instruction">Breathe in...</p>
        <p class="breathing-timer">4</p>
        <button class="skip-breathing" onclick="skipBreathing()">Skip</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(breathingOverlay);
  
  // Store reference for skip function
  window.currentBreathingOverlay = breathingOverlay;
  
  setTimeout(() => breathingOverlay.classList.add("show"), 100);
  
  // Breathing cycle: 4 seconds in, 4 seconds out, repeat 3 times
  const circle = breathingOverlay.querySelector('.breathing-circle');
  const instruction = breathingOverlay.querySelector('.breathing-instruction');
  const timer = breathingOverlay.querySelector('.breathing-timer');
  
  let cycle = 0;
  const maxCycles = 3;
  
  function runBreathingCycle() {
    if (cycle >= maxCycles) {
      // End breathing exercise
      breathingOverlay.classList.remove("show");
      setTimeout(() => breathingOverlay.remove(), 500);
      window.currentBreathingOverlay = null;
      return;
    }
    
    // Breathe in phase
    circle.classList.add('breathing-in');
    instruction.textContent = "Breathe in...";
    
    let count = 4;
    const inInterval = setInterval(() => {
      timer.textContent = count;
      count--;
      if (count < 0) {
        clearInterval(inInterval);
        
        // Breathe out phase
        circle.classList.remove('breathing-in');
        circle.classList.add('breathing-out');
        instruction.textContent = "Breathe out...";
        
        count = 4;
        const outInterval = setInterval(() => {
          timer.textContent = count;
          count--;
          if (count < 0) {
            clearInterval(outInterval);
            circle.classList.remove('breathing-out');
            cycle++;
            setTimeout(runBreathingCycle, 500);
          }
        }, 1000);
      }
    }, 1000);
  }
  
  // Start breathing cycle after overlay is shown
  setTimeout(runBreathingCycle, 500);
}

function skipBreathing() {
  if (window.currentBreathingOverlay) {
    window.currentBreathingOverlay.classList.remove("show");
    setTimeout(() => {
      if (window.currentBreathingOverlay) {
        window.currentBreathingOverlay.remove();
        window.currentBreathingOverlay = null;
      }
    }, 500);
  }
}

function showProgressAffirmation(questionIndex) {
  const affirmations = [
    "🌟 You're doing amazing! Keep exploring these thoughts with curiosity.",
    "💫 Halfway there! Your self-awareness is growing with each question.",
    "🚀 Almost at the finish line! You're building incredible insight."
  ];
  
  const affirmationIndex = Math.floor(questionIndex / 3);
  const affirmation = affirmations[affirmationIndex];
  
  const affirmationEl = document.createElement("div");
  affirmationEl.className = "progress-affirmation";
  affirmationEl.innerHTML = `
    <div class="affirmation-content">
      ${affirmation}
    </div>
  `;
  
  document.body.appendChild(affirmationEl);
  
  setTimeout(() => affirmationEl.classList.add("show"), 100);
  
  setTimeout(() => {
    affirmationEl.classList.remove("show");
    setTimeout(() => affirmationEl.remove(), 500);
  }, 4000);
}

function showSummary() {
  document.getElementById("app").classList.add("hidden");
  summaryBox.classList.remove("hidden");
  
  let moodComparisonHTML = "";
  if (initialMood && finalMood) {
    const change = finalMood - initialMood;
    let changeText = "";
    if (change > 0) {
      changeText = "Your mood improved! 📈";
    } else if (change < 0) {
      changeText = "Your mood changed. That's okay - healing isn't always linear. 💙";
    } else {
      changeText = "Your mood stayed the same. Sometimes that's progress too. 💙";
    }
    
    moodComparisonHTML = `
      <div class="mood-comparison">
        <p><strong>Mood Before:</strong> ${getMoodEmoji(initialMood)} ${getMoodLabel(initialMood)}</p>
        <p><strong>Mood After:</strong> ${getMoodEmoji(finalMood)} ${getMoodLabel(finalMood)}</p>
        <p><em>${changeText}</em></p>
      </div>
    `;
  }
  
  summary.innerHTML = `
    ${moodComparisonHTML}
    <p><strong>🧠 Original Thought:</strong><br>${answers[0]}</p>
    <p><strong>💡 Reframed Perspective:</strong><br>${answers[10]}</p>
    <div class="inspiration-box">
      <p>🌱 <em>You're doing something courageous—take care of yourself.</em></p>
      <p>Feel free to come back any time.</p>
    </div>
    <button class="restart-btn" onclick="restart()">Restart</button>
  `;
}

function restart() {
  answers = [];
  current = 0;
  initialMood = null;
  finalMood = null;
  showingWelcome = true;
  showingInitialMood = false;
  showingFinalMood = false;
  
  // Remove any existing negative thought box
  const existingBox = document.getElementById("negative-thought-box");
  if (existingBox) {
    existingBox.remove();
  }
  
  summaryBox.classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  showWelcomePage();
}

// Global keyboard event handlers for mood selection and welcome page
document.addEventListener("keydown", (e) => {
  // Handle number keys for mood selection
  if (showingInitialMood || showingFinalMood) {
    const num = parseInt(e.key);
    if (num >= 1 && num <= 5) {
      e.preventDefault();
      if (showingInitialMood) {
        selectInitialMood(num);
      } else if (showingFinalMood) {
        selectFinalMood(num);
      }
    }
  }
  
  // Handle Enter key on welcome page
  if (showingWelcome && e.key === "Enter") {
    e.preventDefault();
    startJourney();
  }
  
  // Handle Enter/Space on focused mood options
  if ((showingInitialMood || showingFinalMood) && (e.key === "Enter" || e.key === " ")) {
    const focusedOption = document.activeElement;
    if (focusedOption && focusedOption.classList.contains('mood-option')) {
      e.preventDefault();
      const mood = parseInt(focusedOption.dataset.mood);
      if (showingInitialMood) {
        selectInitialMood(mood);
      } else if (showingFinalMood) {
        selectFinalMood(mood);
      }
    }
  }
});

// Start
showWelcomePage();
