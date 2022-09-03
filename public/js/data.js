 import axios from 'axios';

const data= async (name, email,opinion)=>
{
    try{const res=await axios({
        method:'POST',
        url:'http://127.0.0.1:3000/api/v1/data/',
        data:{
            name,
            email,
            opinion
        }
    })} catch (err){console.log(err)}
}

document.querySelector('.form').addEventListener('submit',e=>{
    e.preventDefault();
    const Name=document.getElementById('Name').value;
   const email= document.getElementById('email').value;
  
   const opinion=document.getElementById('opinion').value;
   
   
data(Name,email,opinion)
window.alert("successfully sent the data to databasse")
});