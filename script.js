const students = [

{
roll:"RTU21CS001",
dob:"2000-07-10",
name:"Rahul Sharma",
branch:"Computer Science",
maths:82,
physics:75,
programming:89
}

];

function checkResult(){

let roll=document.getElementById("roll").value;
let dob=document.getElementById("dob").value;

let student=students.find(s=>s.roll===roll && s.dob===dob);

let result=document.getElementById("result");

if(student){

result.innerHTML=`

<h3>${student.name}</h3>

<p>Roll No: ${student.roll}</p>

<p>Branch: ${student.branch}</p>

<table>

<tr>
<th>Subject</th>
<th>Marks</th>
</tr>

<tr>
<td>Maths</td>
<td>${student.maths}</td>
</tr>

<tr>
<td>Physics</td>
<td>${student.physics}</td>
</tr>

<tr>
<td>Programming</td>
<td>${student.programming}</td>
</tr>

</table>

<p><b>Result: PASS</b></p>

`;

}
else{

result.innerHTML="Invalid Roll Number or Date of Birth";

}

}
