function func(ele)
{
   var clicked=document.getElementById(ele);
  hideAllContainers();
  if(ele==="todo")
      clicked.style.display="block"
  else if(ele==="user")
      clicked.style.display="block"
  else if(ele==="display")
      clicked.style.display="block"
  // else if(ele==="logout")
  //     clicked.style.display="block"
  }
function hideAllContainers()
{
  var a=document.getElementsByClassName("content")
  for(i=0;i<a.length;i++)
     a[i].style.display="none";
}

function logout()
{
var a=window.close();
a();
if(window.closed==false)
{
  var a=document.getElementsByClassName("content")
   for(i=0;i<a.length;i++)
      a[i].style.display="none";
  document.getElementById("todo").style.display="block";
}
}


function hidePrompt()
{
  let a = document.getElementsByClassName("itemlist");
  for (i = 0; i < a.length; i++)
  {
    a[i].style.display = "none";
  }
}


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      // a.addEventListener("click",function(){autoPopulateClick(a.input.value)});




      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });


  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }


  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
      
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

var countries = [];
function deleteRow(row) {
  let cellContent1=row.parentNode.parentNode.children[0];
  let cellContent=row.parentNode.parentNode.children[0].innerHTML;
  var i = row.parentNode.parentNode.rowIndex;
  deleteElementFromAutoPopulateArray(cellContent);
  document.getElementById('POITable').deleteRow(i);
}

function updateDetail(cell)
{
  let cellContent=cell.parentNode.parentNode.cells[0].innerHTML;
  console.log(cellContent);
  
  var person = prompt("Please enter your todo", "");
  
  if(!checkIfElementAlreadyExist(cellContent) && person != null)
  {
    deleteElementFromAutoPopulateArray(cellContent);
  // if (person != null) {
    cell.parentNode.parentNode.cells[0].innerHTML = person ;
    countries.push(person);
  }
  else
      window.alert("This element already exist in the todo list");

}


function autoPopulateClick()
{
  var inp1 = document.getElementById('input').value;
  if(inp1=="")
  {
      window.alert("Please enter the element to be searched..")
      return;  
  }
  
  if(checkIfElementAlreadyExist(inp1))
  {
  hideAllContainers();
  var ab=document.querySelector('#searchTable-content');
  
  //ab.removeChild(ab.children[0].children);
  var new_row = ab.rows[0].cloneNode(true);
  new_row.children[1].innerHTML='<a href="javascript:void(0)" id="editbutton" onclick="updateDetail(this)">Edit</a>';
  new_row.children[2].innerHTML='<a href="javascript:void(0)" id="delbutton" onclick="deleteRow(this)">Delete</a>';
  new_row.cells[0].innerHTML = inp1;
  ab.children[0].appendChild(new_row);
  if(ab.children[0].children[2])
  ab.children[0].removeChild(ab.children[0].children[1]);
  document.querySelector('#searchTable').style.display="block";
  }
  else{
    window.alert("There is no such element in the todo list..");
  }
}

function deleteElementFromAutoPopulateArray(cellContent)
{
  for(let i=0;i<countries.length;i++)  
  if(countries[i]==cellContent)
     countries.splice(i,1);  
}

var trid=1;
var tdid=4;
function insRow() {
  hideAllContainers();
  var inp1 = document.getElementById('input').value;
  document.querySelector('#todo').style.display="block";
  if(checkIfElementAlreadyExist(inp1))
  {
    window.alert("This task already exist in your todo list");
    return;
  }
  
  if(inp1=="")
  {
  window.alert("Element to be added in the todo list cannot be empty..")
  return;  
  }
  var ab=document.querySelector('#POITable');
// ab.rows[0];

  // var x = document.getElementById('POITable');
  var new_row = ab.rows[0].cloneNode(true);
  new_row.setAttribute("id","tr"+trid);
 // new_row.style.display="block";
  
 // new_row.cells[0].innerHTML=trid++;
 new_row.children[0].setAttribute("id","td"+tdid++);
 new_row.children[1].setAttribute("id","td"+tdid++);
 new_row.children[1].innerHTML='<a href="javascript:void(0)" id="editbutton" onclick="updateDetail(this)">Edit</a>';
 new_row.children[2].setAttribute("id","td"+tdid++);
 new_row.children[2].innerHTML='<a href="javascript:void(0)" id="delbutton" onclick="deleteRow(this)">Delete</a>';
  //  new_row.cells[0].setAttribute("id","td"+tdid++);
  // new_row.cells[1].setAttribute("id","td"+tdid++);
  // new_row.cells[2].setAttribute("id","td"+tdid++);
  new_row.cells[0].innerHTML = inp1;
  ab.children[0].appendChild(new_row);
  countries.push(inp1);
  
}

function checkIfElementAlreadyExist(elementValue)
{
for(let i=0;i<countries.length;i++)
{
  if(countries[i]==elementValue)
      return true;
}
return false;
}
