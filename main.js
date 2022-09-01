
 var btn = document.querySelectorAll('#btn');

btn[0].style.padding='12px 16px';
btn[0].style.border='none';
btn[0].style.backgroundColor='#006837';
btn[0].style.color='#fff';

btn[1].style.padding='12px 16px';
btn[1].style.border='none';
btn[1].style.backgroundColor='#006837';
btn[1].style.color='#fff';

 var h = document.getElementsByTagName('h1');

h[0].style.color='red';
h[0].style.color='60px';


h[1].style.color='red';
h[1].style.color='60px';



 var p = document.getElementsByClassName('text');
   
   p[0].style.textDecoration='underline';
   p[0].style.color='red';
   p[0].style.fontSize='18px';

   p[1].style.textDecoration='underline';
   p[1].style.color='red';
   p[1].style.fontSize='18px';


// increment decrement section


var res = document.getElementById('Value');
var warningText = document.getElementById('warning')
var btn = document.querySelectorAll('button');
var Value = res.innerText;


 res.style.fontSize='80px'
 res.style.fontWeight='500'
 res.style.marginBottom='16px'

btn[2].addEventListener('click',function(){
	
	res.innerText = parseInt(res.innerText)+1;
	res.style.color='black';

	var val = parseInt(res.innerText);

	if (val >= 20){
		alert('Value Rich The Maximum Lavel! Please Stop!!!');
		res.innerText = '20';
		res.style.color='red';
	}
});

btn[3].addEventListener('click', function(){
	res.innerText = parseInt(res.innerText)-1;
	res.style.color='black';


	var val = parseInt(res.innerText);

	if (val <= 0){
		alert('Value Rich The Maximum Lavel! Please Stop!!!');
		res.innerText = '0';
		res.style.color='red';
	}
});

// love calcuator



function love(){
    var yourname = document.getElementById('yn').value;
    var lovename = document.getElementById('ln').value;

    if(yourname.length<=3){
        alert("Enter at Minimum 4 Characters in Your Name");
    }
    if(lovename.length<=3){
        alert("Enter at Minimum 4 Characters in Lover Name");
    }
    else{
        var random = Math.floor(Math.random()*100);
        document.getElementById('printr').innerHTML = yourname + ' AND ' +lovename+ " = " + random+ "% of love";
    }
    if(random<=30){
        document.getElementById('lovecoment').innerHTML= 'Fake RelationShip';
    }
    else if(random>30 && random<=60){
        document.getElementById('lovecoment').innerHTML='Good RelationShip';
    }
    else if(random>60 && random<=90){
        document.getElementById('lovecoment').innerHTML='Better RelationShip';
    }
    else{
        document.getElementById('lovecoment').innerHTML='Best RelationShip';
    }
}
