/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

/* global variables*/

let listOfStudents = document.querySelectorAll('.student-item');
const itemsPerPage = 10;







/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
/*points to first student and last-range of students*/

const showPage = (list, page) =>{
   let indexStart = (page * itemsPerPage) - itemsPerPage;                
   let indexEnd = (page * itemsPerPage)-1;

for (let x=0;  x < list.length; x++){
if(x >=indexStart && x < indexEnd){
   list[x].style.display = '';
}
else {
   list[x].style.display = 'none';
}

}


}

console.log (x)

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





