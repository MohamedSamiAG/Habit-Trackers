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
  
//creat tr
  const tr = document.createElement("tr");
  //Add main habit name
  tr.innerHTML = `<td style="padding: 0 5px;" ><i class="ri-bowl-line" style="padding: 0 4px;"></i>${input1.value}</td>
    <td><i class="ri-close-circle-line"></i></td>
    <td><i class="ri-verified-badge-line"></i></td>
    <td><i class="ri-verified-badge-line"></i></td>
    <td><i class="ri-close-circle-line"></i></td>
    <td><i class="ri-close-circle-line"></i></td>
    <td><i class="ri-verified-badge-line"></i></td>
    <td><i class="ri-verified-badge-line"></i></td>`;

//Add tr in table
habitTable.appendChild(tr);

//Add todayHabits
 AllHabits.innerHTML =`<div id="checkPart">
                    <div class="toggle_button">
                        <label class="switch" >
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>

                    </div>
                     <i class="ri-bowl-line" style="padding-left: 9px;"></i> 
                    
                    <h4>${input1.value}</h4> 

                </div>

                <div class="RegPart">
                    <button class="RegButton"><i class="ri-file-list-2-line" ></i></button>  <button class="RegButton"><i class="ri-pencil-line" ></i></button>  <button class="RegButton bin"><i class="ri-delete-bin-6-line" ></i></button>   
                </div>
` ;


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
