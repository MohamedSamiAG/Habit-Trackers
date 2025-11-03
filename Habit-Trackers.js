const Cards = document.getElementById("bottom_habit");
const nwe = document.getElementById("nwe");


Cards.addEventListener("click", () => {
nwe.innerHTML = `
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
  `;
//save buttom
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {

  const input1 = document.getElementsByClassName("sss")[0];
  const input2 = document.getElementsByClassName("sss")[1];

  console.log("Habit saved:", input1.value, input2.value);

  // inputs
  input1.value = " ";
  input2.value = " ";
});
//close icon
const closeIcon = document.getElementById("closeIcon");
 closeIcon.addEventListener("click", () => {
   nwe.innerHTML = "";   
  });



  // close buttom
  const closeBtn = document.getElementById("closeBtn");

  closeBtn.addEventListener("click", () => {
   nwe.innerHTML = "";   
  });
});
