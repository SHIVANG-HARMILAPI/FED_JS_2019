function func(ele)
{
   var clicked=document.getElementById(ele);
   
   var a=document.getElementsByClassName("content")
   for(i=0;i<a.length;i++)
      a[i].style.display="none";
//var clicked=document.getElementById(ele);
  if(ele==="home")
      clicked.style.display="block"
  else if(ele==="news")
      clicked.style.display="block"
  else if(ele==="contact")
      clicked.style.display="block"
  else if(ele==="about")
      clicked.style.display="block"
}


function hidePrompt()

{

  let a = document.getElementsByClassName("itemlist");

  for (i = 0; i < a.length; i++)

  {

    a[i].style.display = "none";



  }

}



function filterFunction()
{
  let input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  console.log(filter);
  a = document.getElementsByClassName("itemlist");
  for (i = 0; i < a.length; i++)
  {
    txtValue = a[i].textContent || a[i].innerText;
    if (!txtValue.startsWith(filter))
    {
      a[i].style.display = "none";
    }
    else
    {
      a[i].style.display = "block";
    }
  }
}

function populateTodoList()
{const fs = require('fs');
const json_data = require('../todo.JSON');

fs.readFile(json_data, 'utf8', function (err, data) {
  try {
    data = JSON.parse(data)
    for (let i in data){
    console.log('Name:',data[i].name)
    }
  } catch (e) {
    // Catch error in case file doesn't exist or isn't valid JSON
  }
});


}