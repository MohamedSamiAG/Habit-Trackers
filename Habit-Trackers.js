const today = new Date();
let id = 0;
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

    const tr = document.createElement("tr");
    tr.id = `habit-${id}`;
    tr.innerHTML = `
      <td style="padding: 0 5px;">
        <div class="vbb">
          <i class="ri-bowl-line" style="padding: 0 2px;"></i>${input1.value} ${id}
        </div>
      </td>
      <td><i class="ri-checkbox-blank-circle-line" class="checkboxes-${id}"></i></td>
      <td><i class="ri-checkbox-blank-circle-line" class="checkboxes-${id}"></i></td>
      <td><i class="ri-checkbox-blank-circle-line" class="checkboxes-${id}"></i></td>
      <td><i class="ri-checkbox-blank-circle-line" class="checkboxes-${id}"></i></td>
      <td><i class="ri-checkbox-blank-circle-line" class="checkboxes-${id}"></i></td>
      <td><i class="ri-checkbox-blank-circle-line" class="checkboxes-${id}"></i></td>
      <td><i class="ri-checkbox-blank-circle-line" class="checkboxes-${id}"></i></td>
      
    
    `;
    habitTable.appendChild(tr);

    
    const habitDiv = document.createElement("div");
    habitDiv.id = `habit-${id}`;
    habitDiv.innerHTML = `
        <div class="checkPart">
        <div class="toggle_button">
          <label class="switch">
            <input type="checkbox" id="checkbox${id}">
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
      updateHabitCount();
       
// ==================================addValues====================================



  // ====================================addValues=========================
  
// =======
     //addNote and allNotes
       const addValue = document.getElementById(`addNote-${id}`)
       const addAll = document.getElementById(`allNote-${id}`)
       const addHome = document.getElementById(`addHome`)

// Variable to store the note
let savedNote = "";
       
       addValue.addEventListener("click", function () {
      
addHome.innerHTML += `
 <div class="popup">
   <div class="popup-box">
      <div class="header">
        <i class="fa-solid fa-comment-dots"></i>
        <h2>Add note</h2>
        <i class="fa-solid fa-xmark closeX" id="closeNoteIconAdd"></i>
      </div>

      <hr class="separator">
      
      <input id="noteAddInput" type="text">

      <div class="buttons">
  <button id="closeBtnadd">Cancel</button>
 
  <button class="btn-save"id="noteSave"><i class="fa-solid fa-check"></i> Save</button>
      </div>
   </div>
 </div>
`;

// بعد ما البوب أب اتعمل… نبدأ نجيب العناصر
const noteAddInput = document.getElementById("noteAddInput");
  const noteSave = document.getElementById("noteSave");
  const closeBtnadd = document.getElementById("closeBtnadd");
  const closeNoteIconAdd = document.getElementById("closeNoteIconAdd");

  // Save note 
  noteSave.addEventListener("click", () => {
    if (noteAddInput.value.trim() !== "") {
      savedNote = noteAddInput.value;
      addHome.innerHTML = ""; 

    } 
  });

  // Close button
 closeBtnadd.addEventListener("click", () =>{
  addHome.innerHTML=""
 });
 //icon close
 closeNoteIconAdd.addEventListener("click", () =>{
  addHome.innerHTML=""
 });


addAll.addEventListener("click", function () {
  
  const inputx = document.getElementById("inputx");
  const poup = document.getElementById("poup");

  poup.innerHTML += `
      <div class="popup-box">
        <div class="header">
           <i class="fa-regular fa-clipboard"></i>
           <h2>Notes</h2>
           <i class="fa-solid fa-xmark closeX" id="closeNoteIconAll"></i>
        </div>

        <hr class="separator">
       <div id="noteShowInput"  class="notesContent" >${savedNote}</div> 

      
<hr>
        <div class="buttons">
           <button id="closeNoteBtnall">Close</button>
        </div>
      </div>
  `;
const closeNoteBtnall = document.getElementById("closeNoteBtnall");
const closeNoteIconAll= document.getElementById("closeNoteIconAll");

  // Close buttons
closeNoteBtnall.addEventListener("click", () =>{
 poup.innerHTML="";
 });
 //iconclose
closeNoteIconAll.addEventListener("click", () =>{
  poup.innerHTML="";
 });


});

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

// =============================clear all===========================
const clearTodays_Habits = document.getElementById("clearTodays_Habits");
clearTodays_Habits.addEventListener("click",()=>{
    AllHabits.innerHTML =""
    habitTable.innerHTML=`<tr>
    <th>Habit</th>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr> `
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

