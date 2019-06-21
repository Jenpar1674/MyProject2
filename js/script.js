/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



 //global variables that store DOM elements

let listOfStudents = document.querySelectorAll('.student-item');
const itemsPerPage = 10;

/*** 
   Creates`showPage` function to hide all of the items in the 
   list except for the ten we want***/

/*points to first student and last-range of students*/

const showPage = (list, page) =>{
   let indexEnd = (page * itemsPerPage);
   let indexStart = (indexEnd - itemsPerPage);                
   

   for (let i=0;  i < listOfStudents.length; i++){
      if(i >=indexStart && i < indexEnd){
         listOfStudents[i].style.display = 'block';
      }
      else {
         listOfStudents[i].style.display = 'none';
      }
      /*console.log('item ' +listOfStudents[i].innerHTML)*/
            } 
}


showPage(listOfStudents,1);

//creating append function
const pageAppend =(list)=>{
   

   let totalPages = Math.ceil(listOfStudents.length/itemsPerPage);  //determines total number of pages
  
   console.log(totalPages);

   let div = document.createElement('div');                  //creating nodes that allow manioulation of items in HTML
   let page = document.querySelector('.page');    
   let ul = document.createElement('ul');
   div.appendChild(ul);                                   //append nodes to access information we want
   div.setAttribute('class','pagination');
   page.appendChild(div);                                //append nodes to access information we want
   
   for (let i = 0; i < totalPages; i++){                 //loop for pagination
         let li =document.createElement('li');           //creates nodes for li and a              
         let a = document.createElement('a');
         
      a.textContent = i+1;       //for page number
      ul.appendChild(li);  //appends ul and li nodes
      li.appendChild(a);  //appends a node

      
      a.addEventListener('click',(e)=>{                                             //event listener
        
         const a = document.querySelectorAll('pagination li a');                    //querySelector for pagination class
         for (k = 0; k < a.length; k++){                                            //loop to select what isn't active and hide 
            a[k].className='not active';
         }
         
         e.target.className='active';                                               //makes event target class active s
         
         showPage (listOfStudents,e.target.textContent);                              // hows the 10 we want 
   });


}       
   }

showPage(listOfStudents,1);//calling function
 
 pageAppend();//calling function




