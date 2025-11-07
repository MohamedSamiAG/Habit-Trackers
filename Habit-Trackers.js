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

    // نجيب العناصر بعد ما ظهرت
    const saveBtn = document.getElementById("saveBtn");
    const input1 = document.getElementsByClassName("sss")[0];
    const input2 = document.getElementsByClassName("sss")[1];
    const closeIcon = document.getElementById("closeIcon");
    const closeBtn = document.getElementById("closeBtn");

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
          <i class="ri-bowl-line" style="padding: 0 4px;"></i>${input1.value} ${id}
        </div>
      </td>
      <td><i class="ri-close-circle-line"></i></td>
      <td><i class="ri-verified-badge-line"></i></td>
      <td><i class="ri-verified-badge-line"></i></td>
      <td><i class="ri-close-circle-line"></i></td>
      <td><i class="ri-close-circle-line"></i></td>
      <td><i class="ri-verified-badge-line"></i></td>
      <td><i class="ri-verified-badge-line"></i></td>
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
       

       const addValue = document.getElementById(`addNote-${id}`)
       const addAll = document.getElementById(`allNote-${id}`)
       const addHome = document.getElementById(`addHome`)
       
       addValue.addEventListener("click", function () {
         
         const inputx = document.getElementById(`inputx`)
addHome.innerHTML = `<div>hellloo
<input  id="inputx" type="text">
</div>`

       })
 addAll.addEventListener("click", function () {
  addAll.innerHTML = `
  
  <div class="allAdd">
    <input ${inputx.value} type="text">
</div>

  
  ${inputx.value}`
 })

  
      // زر الحذف الفردي
      const deleteSingle = document.getElementById(`deleteSingle-${id}`);
      deleteSingle.addEventListener("click", function () {
        habitDiv.remove();
        tr.remove();
        updateHabitCount();
        updateProgressBarAndStreak();
      
 
    });
    const checkbox = habitDiv.querySelector('input[type="checkbox"]');
checkbox.addEventListener("change", updateProgressBarAndStreak);

  });
}

 


openPopup();

// clear all
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
})
// clear all
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
  
};


function updateProgressBarAndStreak() {
  const checkboxes = AllHabits.querySelectorAll('.checkPart input[type="checkbox"]');
  const checked = AllHabits.querySelectorAll('.checkPart input[type="checkbox"]:checked').length;
  const count = checkboxes.length;

 
  const percentage = count > 0 ? (checked / count) * 100 : 0;
  fillB.style.width = `${percentage}%`;

 
  numberParStreak.innerText = checked;

  console.log(`✅ Checked: ${checked} / ${count} | ${percentage}%`);
}
//  =====updateProgressBarAndStreak===== updateHabitCount========



