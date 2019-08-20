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