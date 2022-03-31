const data = document.getElementsByTagName('input');
const cards = document.getElementById('outeritem3');
const enroll = document.querySelector('.outermost .infoform #buttons button');
const clear = document.getElementById('clear');

enroll.addEventListener('click', addInfo);
clear.addEventListener('click', clearInfo);

function clearInfo(e){
	for (let i = 0; i < 4; i++) {
		data[i].value = data[i].defaultValue;
	}
	for (let i = 4; i < 9; i++) {
		data[i].checked = false;
	}
}

function incompleteInfo(e){
	for (let i = 0; i < 4; i++) {
		if(data[i].value == data[i].defaultValue){
			return true;
		}
	}
	// for (let i = 6; i < 9; i++) {
	// 	if(data[i].checked == false){
	// 		return true;
	// 	}
	// }
	if(data[4].checked == false && data[5].checked == false){
		return true;
	}

	return false;
}

console.log(clear);
function addInfo(e){
	if(incompleteInfo()){
		alert('Kindly Enter Complete Details !!');
		return;
	}

	let name = data[0].value;
	let email = data[1].value;
	let website = data[2].value;
	let image = data[3].value;

	let gender = data[4].checked ? 'Male' : 'Female';
	let skills ='';
	skills += data[6].checked ? 'HTML ' : '';
	skills += data[7].checked ? 'Java ' : '';
	skills += data[8].checked ? 'Python ' : '';

	if(skills == ''){
		skills = 'NA';
	}
	// console.log(skills);
	
	let newItem1 = document.createElement('div');
	let newItem2 = document.createElement('div');
	
	newItem1.innerHTML = `<ul><li>Name : ${name}</li><li>Gender : ${gender}</li><li>Email : ${email}</li>
	<li>Website : ${email}</li>
	<li>Skills : ${skills}</li>
	</ul>`;

	newItem2.classList.add('photo');
	newItem2.innerHTML = `<img src="${image}"  height="180px" width="100%"></img>`;

	
	
	
	
	cards.appendChild(newItem1);
	cards.appendChild(newItem2);
	
	
	// console.log(data);
	setTimeout(() => {
		alert("Student Enrolled Successfully ");
	}, 200);
}


