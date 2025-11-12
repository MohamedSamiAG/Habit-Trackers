const today = new Date();
let id = 0;
let habits = {};
const Cards = document.getElementById("bottom_habit");
const nwe = document.getElementById("nwe");
const AllHabits = document.getElementById("AllHabits");
const habitTable = document.getElementById("habitTable");

//==========================================Popup==============================================
function openPopup() {
  Cards.addEventListener("click", () => {
    nwe.innerHTML = `
      <div class="popups">
        <div class="popup">
          <div class="popup-box">
            <div class="header">
              <h2>Add Habit</h2>
              <i id="closeIcon" class="fa-solid fa-xmark closeX"></i>
            </div>
            <hr class="separator">
            <label for="habit">Name</label>
            <input type="text" id="habit" placeholder="e.g. Drink Water" class="sss">
            <label for="mH">Mode</label>
            <input type="text" id="mH" placeholder="Normal" class="sss">
            <div class="buttons">
              <button id="saveBtn">Save</button>
              <button id="closeBtn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    `;
    const saveBtn = document.getElementById("saveBtn");
    const input1 = document.getElementsByClassName("sss")[0];
    const input2 = document.getElementsByClassName("sss")[1];
    const closeIcon = document.getElementById("closeIcon");
    const closeBtn = document.getElementById("closeBtn");

        // نجيب العناصر بعد ما ظهرت
    // زر الإغلاق
    closeIcon.addEventListener("click", () => (nwe.innerHTML = ""));
    closeBtn.addEventListener("click", () => (nwe.innerHTML = ""));

    // 🔥 هنا ننادي دالة الحفظ مرة واحدة بعد ما الـ popup اتفتح
    saveAll(saveBtn, input1, input2, habitTable, AllHabits);
  });
}

// === دالة الحفظ ===
function saveAll(saveBtn, input1, input2, habitTable, AllHabits) {
  saveBtn.addEventListener("click", () => {
    id++;
    console.log(`Habit saved: ${input1.value} ${input2.value} ${id}`);
    // Initialize habit in habits object
    
    habits[id] = {
      name: input1.value,
      week: [false, false, false, false, false, false, false],
     
    };

    const tr = document.createElement("tr");
    tr.id = `habit-${id}`;
    tr.innerHTML = `
      <td style="padding: 0 5px;">
        <div class="vbb">
          <i class="ri-bowl-line" style="padding: 0 2px;"></i>${input1.value}
        </div>
      </td>
      <td><i class="ri-checkbox-blank-circle-line week-checkbox" data-habit="${id}" data-day="0"></i></td>
      <td><i class="ri-checkbox-blank-circle-line week-checkbox" data-habit="${id}" data-day="1"></i></td>
      <td><i class="ri-checkbox-blank-circle-line week-checkbox" data-habit="${id}" data-day="2"></i></td>
      <td><i class="ri-checkbox-blank-circle-line week-checkbox" data-habit="${id}" data-day="3"></i></td>
      <td><i class="ri-checkbox-blank-circle-line week-checkbox" data-habit="${id}" data-day="4"></i></td>
      <td><i class="ri-checkbox-blank-circle-line week-checkbox" data-habit="${id}" data-day="5"></i></td>
      <td><i class="ri-checkbox-blank-circle-line week-checkbox" data-habit="${id}" data-day="6"></i></td>
    `;
    habitTable.appendChild(tr);

    // Add event listeners to weekly checkboxes
    const weekCheckboxes = tr.querySelectorAll('.week-checkbox');
    weekCheckboxes.forEach(icon => {
      icon.addEventListener('click', function() {
        const habitId = parseInt(this.dataset.habit);
        const dayIndex = parseInt(this.dataset.day);
        
        // Toggle the state
        habits[habitId].week[dayIndex] = !habits[habitId].week[dayIndex];
        
        // Update visual
        if (habits[habitId].week[dayIndex]) {
          this.classList.remove('ri-checkbox-blank-circle-line');
          this.classList.add('ri-checkbox-circle-fill');
        } else {
          this.classList.remove('ri-checkbox-circle-fill');
          this.classList.add('ri-checkbox-blank-circle-line');
        }
      });
    });

    
    const habitDiv = document.createElement("div");
    habitDiv.id = `habit-${id}`;
    habitDiv.innerHTML = `
        <div class="checkPart">
        <div class="toggle_button">
         <label class="switch">
            <input type="checkbox" class="todayCheck" data-habit="${id}">
            <span class="slider round"></span>
          </label>
        </div>
        <i class="ri-bowl-line" style="padding-left: 9px;"></i>
        <h4 class="asdasd">${input1.value} ${id}</h4>
        <div class="RegPart">
          <button class="RegButton"  id="allNote-${id}"><i class="ri-file-list-2-line"></i></button>
          <button class="RegButton" id="addNote-${id}"><i class="ri-pencil-line"></i></button>
          <button class="RegButton bin">
            <i class="ri-delete-bin-6-line" id="deleteSingle-${id}"></i>
          </button>
        </div>
      </div>
      `;
      AllHabits.appendChild(habitDiv);
      // Add listener to todaycheckbox
    const todayCheckbox = habitDiv.querySelector('.todayCheck');
    todayCheckbox.addEventListener("change", function() {
      const habitId = parseInt(this.dataset.habit);
      const isChecked = this.checked;
      toggleToday(habitId, isChecked); 
      updateProgressBarAndStreak();
    });


      updateHabitCount();
       
// ==================================addValues====================================



  // ====================================addValues=========================
  
// =======
     //addNote and allNotes
       const addValue = document.getElementById(`addNote-${id}`)
       const addAll = document.getElementById(`allNote-${id}`)


       const addHome = document.getElementById(`addHome`)

let savedNotes = []; 


addValue.addEventListener("click", () => {
  addHome.innerHTML = `
    <div class="popup">
      <div class="popup-box">
        <div class="header">
          <i class="fa-solid fa-comment-dots"></i>
          <h2>Add note</h2>
          <i class="fa-solid fa-xmark closeX" id="closeNoteIconAdd"></i>
        </div>

        <hr class="separator">

        <input id="noteAddInput-${id}" type="text">

        <div class="buttons">
          <button id="closeBtnadd">Cancel</button>
          <button class="btn-save" id="noteSave"><i class="fa-solid fa-check"></i> Save</button>
        </div>
      </div>
    </div>
  `;

  const noteInput = document.getElementById(`noteAddInput-${id}`);
  const noteSave = document.getElementById("noteSave");
  const closeBtnadd = document.getElementById("closeBtnadd");
  const closeIcon = document.getElementById("closeNoteIconAdd");

  noteSave.addEventListener("click", () => {
    const text = noteInput.value.trim();
    if (text !== "") {
      savedNotes.push(text);
      addHome.innerHTML = "";  
    }
  });

  closeBtnadd.addEventListener("click", () => addHome.innerHTML = "");
  closeIcon.addEventListener("click", () => addHome.innerHTML = "");
});


addAll.addEventListener("click", () => {

  poup.innerHTML = `
    <div class="popup">
      <div class="popup-box">
        <div class="header">
          <i class="fa-regular fa-clipboard"></i>
          <h2>Notes</h2>
          <i class="fa-solid fa-xmark closeX" id="closeNoteIconAll"></i>
        </div>

        <hr class="separator">

        <div class="notesContent">
          ${
            savedNotes.length > 0
              ? savedNotes.map(n => `<p>${n}</p><hr>`).join("")
              : "<p>No notes yet.</p>"
          }
        </div>

        <div class="buttons">
          <button id="closeNoteBtnall">Close</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("closeNoteBtnall").addEventListener("click", () => poup.innerHTML = "");
  document.getElementById("closeNoteIconAll").addEventListener("click", () => poup.innerHTML = "");
});
  
      // ===============================single delete=======================
      const deleteSingle = document.getElementById(`deleteSingle-${id}`);
      deleteSingle.addEventListener("click", function () {
        habitDiv.remove();
        tr.remove();
        updateHabitCount();
        updateProgressBarAndStreak();

         actif();
        
      });
      // ===============================single delete=======================
      const checkbox = habitDiv.querySelector('input[type="checkbox"]');
      checkbox.addEventListener("change", updateProgressBarAndStreak);

        actif();

      
  });
 };openPopup();
 //=== Weekly Board Functions ===
function getTodayIndex() {
  const day = new Date().getDay();
  return (day + 6) % 7; // Convert: 0=Mon, 1=Tue, ... 6=Sun
}

function toggleToday(habitId, checked) {
  const day = getTodayIndex();
  habits[habitId].week[day] = checked;
  updateWeeklyBoard(habitId, day); 
}

function updateWeeklyBoard(habitId, dayIndex) {
  const icon = document.querySelector(`[data-habit="${habitId}"][data-day="${dayIndex}"]`);
  
  if (icon) {
    if (habits[habitId].week[dayIndex]) {
      icon.classList.remove('ri-checkbox-blank-circle-line');
      icon.classList.add('ri-checkbox-circle-fill');
    } else {
      icon.classList.remove('ri-checkbox-circle-fill');
      icon.classList.add('ri-checkbox-blank-circle-line');
    }
  }
}


// =============================clear all===========================
const clearTodays_Habits = document.getElementById("clearTodays_Habits");
clearTodays_Habits.addEventListener("click",()=>{
    AllHabits.innerHTML =""
    habitTable.innerHTML=` <tr>
    <th>Habit</th>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  
`;
  updateHabitCount();
  updateProgressBarAndStreak();


 addv();
 
  actif();

})
// =============================clear all============================
//==========================================Popup==============================================
  
 
  
 



//....Add todayHabits.....
//close icon

//  ....................................New Habit bottom_habit......................................


//  =====updateProgressBarAndStreak===== updateHabitCount========

const numberParValue = document.getElementById("numberParValue");
const numberParStreak = document.getElementById("numberParStreak");
const fillB = document.getElementById("fillB");

function updateHabitCount() {
  const count = AllHabits.querySelectorAll(".checkPart").length;
  numberParValue.innerText = count;
  console.log(count);
  
  
};


function updateProgressBarAndStreak() {
  const checkboxes = AllHabits.querySelectorAll('.checkPart input[type="checkbox"]');
  const checked = AllHabits.querySelectorAll('.checkPart input[type="checkbox"]:checked').length;
  const count = checkboxes.length;

 
  const percentage = count > 0 ? (checked / count) * 100 : 0;
  fillB.style.width = `${percentage}%`;

 
  numberParStreak.innerText = checked;

  console.log(`✅ Checked: ${checked} / ${count} | ${percentage}%`);
   DayStreaks(checkboxes, checked, count);
   checks(checked)
}
//  =====updateProgressBarAndStreak===== updateHabitCount========
function onCheckboxChange() {
 updateProgressBarAndStreak();
  DayStreaks(); 
}
// =======================Day Streak================

const day = today.getDay();  
const DayStreak = document.getElementById("DayStreak")
let streak = 0;
let lastCheckDate = null;


function DayStreaks(checkboxes, checked, count) {
 

  if (!lastCheckDate) {
    if (checked > 0) {
      streak = 1;
      lastCheckDate = today;
    }
  } else {
    const diffTime = today - lastCheckDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {

      if (checked > 0) streak = streak; 
    } else if (diffDays === 1) {
      if (checked > 0) streak++;
      else streak = 0;
      lastCheckDate = today;
    } else {
     
      streak = 0;
      lastCheckDate = null;
    }
  }

  DayStreak.innerText = streak;
}

// =======================Day Streak================

const checkboxes =document.getElementsByClassName("checkboxes-${id}")
function checks(checked) {
  console.log(checked);
  
}

const nVp = document.getElementById("nVp");
function actif() {
  const count = AllHabits.querySelectorAll(".checkPart").length;
 nVp.innerText = count;
  
}

// =======================Checkek Day In weekly board================

  