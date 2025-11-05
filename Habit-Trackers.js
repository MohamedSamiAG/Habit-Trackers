const Cards = document.getElementById("bottom_habit");
const nwe = document.getElementById("nwe");
const AllHabits = document.getElementById("AllHabits");

let id = 0;
//  New Habit bottom_habit
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
  
  
  
  //save buttom
  const saveBtn = document.getElementById("saveBtn");
  const nooot = document.getElementById("nooot");
  const input1 = document.getElementsByClassName("sss")[0];
  const input2 = document.getElementsByClassName("sss")[1];
  
  saveBtn.addEventListener("click", () => {
  
      id++
      
      console.log(`Habit saved:", ${input1.value}${input2.value} ${id}`);
      
      //creat tr
      const tr = document.createElement("tr");
      // ..............Weekly Board..........
      tr.id = `habit-${id}`;
      tr.innerHTML = `<td  style="padding: 0 5px;" ><div class="vbb"><i class="ri-bowl-line" style="padding: 0 4px;"></i>${input1.value}${id}</di></td>
      <td><i class="ri-close-circle-line"></i></td>
    <td><i class="ri-verified-badge-line"></i></td>
    <td><i class="ri-verified-badge-line"></i></td>
    <td><i class="ri-close-circle-line"></i></td>
    <td><i class="ri-close-circle-line"></i></td>
    <td><i class="ri-verified-badge-line"></i></td>
    <td><i class="ri-verified-badge-line"></i></td>`;

//Add tr in table


habitTable.appendChild(tr);


//....Add todayHabits.....
const habitDiv = document.createElement("div");
habitDiv.id = `habit-${id}`;
habitDiv.innerHTML = `<div id="checkPart">
   <div class="toggle_button">
<label class="switch" >
<input type="checkbox">
<span class="slider round"></span>
                        </label>
                        
                    </div>
                    <i class="ri-bowl-line" style="padding-left: 9px;"></i> 
                    
                    <h4 class = "asdasd">${input1.value}${id}</h4> 
                    <div class="RegPart">
                    <button class="RegButton"><i class="ri-file-list-2-line" ></i></button>  <button class="RegButton"><i class="ri-pencil-line" ></i></button>  
                    <button class="RegButton bin"><i class="ri-delete-bin-6-line" id="deleteSingle-${id}"></i>
</button>   
                    </div>
                    </div>
                    
                
                
`;

AllHabits.appendChild(habitDiv);

                
const deleteSingle = document.getElementById(`deleteSingle-${id}`);
deleteSingle.addEventListener("click", function() {
  habitDiv.remove();
    tr.remove();  
});
                
                // inputsى
                input1.value = " ";
  input2.value = " ";
});



//....Add todayHabits.....
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
//  ....................................New Habit bottom_habit......................................






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
})
