/* 
DOM events
1.Event Object
   -event type: Change,submit,load,unload,open,play.....
......canplay,pause,playing,progress,ended,resize,scroll,toggle etc.
     -properties: type,target,preventDefault().

    2. MouseEvent Object
    3.keyboardEvent object
    4.FocusEvent object
    5.DragEvent object

    Change Event working with-
    <input>-text,number,password,email,color,radio,checkbox,search,
    time, date,dateTime,week,month,url,tel,file,<select>,<textarea>,</textarea></select>
*/

/* Change Elements  */

//console.clear();

/*const input = document.querySelector("input");
input.addEventListener('change', changeHandler);

function changeHandler (e){
   //console.log(e.type);
   //console.log(e);
   //console.log(e.target);
   //console.log(e.target.className);
   //console.log(e.target.id);
   console.log(e.target.value);
}
*/

/*const programs = document.querySelectorAll("input[name=program]");
console.log(programs);
Array.from(programs).map((program)=>{
   program.addEventListener("change",programHandler)
})

function programHandler(e){
   if(e.target.checked){
      console.log(e.target.value);
   }
}
*/

/*
const department = document.querySelector('#department');
//console.log(department);
department.addEventListener('change', handleDepartment);

function handleDepartment(e){
   console.log(e.target.value);
}
*/

/* Textarea Javascript program */
/*
const textarea = document.querySelector('textarea');
textarea.addEventListener('input',function(event){
   console.log(event.target.value);
});
*/
/*
const textarea = document.querySelector('textarea');
textarea.addEventListener('focus',function(event){
   console.log('Textarea is focused');
});
*/
/*
const textarea = document.querySelector('textarea');
textarea.addEventListener('blur',function(event){
   console.log('blur textarea');
})
*/
/* 
// finding the elements 

const form = document.querySelector('form');
const name = form.querySelector('div #name');
const email = form.querySelector('div #email');
const password = form.querySelector('div #password');

form.addEventListener('submit',formHandler);

function formHandler(event){
   event.preventDefault();
   const userInfo ={
      name: name.value,
      email:email.value,
      password:password.value,
   };
   console.log(userInfo);

   name.value="";
   email.value="";
   password.value="";
}

*/

// Media Events JavaScript 

/* Audio & Video Events 
canplay,play,playing,pause,progress,ended,volumechange,waiting.
 */
/* 
const video = document.querySelector("video");

video.addEventListener("canplay",function(){
   console.log("canplay");
});
video.addEventListener("play",function(){
   console.log("play");
});
video.addEventListener("playing",function(){
   console.log("playing");
});
video.addEventListener("pause",function(){
   console.log("pause");
});
video.addEventListener("ended",function(){
   console.log("Thanks for watching!");
});
video.addEventListener("volumechange",function(){
   console.log("volumechange");
});
*/

/*

Dom Event || Event Object || 
Scroll,resize,toggle,load,unload.

 */
/* 
window.addEventListener("load",function(){
   console.log("load");
});
window.addEventListener("unload",function(){
   console.log("unload");
});
*/
/*
window.addEventListener("scroll",function(){
   console.log("scroll");
});
*/
/*
window.addEventListener("resize",function(){
   const width = window.outerWidth;
   const height = window.outerHeight;
   console.log(`width:${width},height:${height}`)
});
*/
/*
const details = document.querySelector("details");
details.addEventListener('toggle',function(event){
   //console.log('toggle');
   console.log(event.target.open);
});
*/
