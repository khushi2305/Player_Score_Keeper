var span=document.querySelectorAll("span");
var buts=document.querySelectorAll("button");
var numInput=document.querySelector("input")
var gameover=false ;
var maxscore=5;
var score1;  var score2;


	buts[0].addEventListener("click",function(){
		if(!gameover){
		     score1=Number(span[0].textContent);
		     score1++;
		    if(score1===maxscore)
		         {gameover=true;
		    	span[0].classList.add("maxc");}
		    span[0].textContent=String(score1);
    }

	});
	buts[1].addEventListener("click",function(){
		if(!gameover){
		    score2=Number(span[1].textContent);
		    score2++;
		    if(score2==maxscore)
		  { gameover=true;
		span[1].classList.add("maxc");}
		    span[1].textContent=String(score2);
     }
	});
	buts[2].addEventListener("click",function(){
		span[0].textContent="0";
		span[1].textContent="0";
		gameover=false;
			span[0].classList.remove("maxc");
			span[1].classList.remove("maxc");

	})
numInput.addEventListener("change",function(){ // change event responds whenever 
	// the input value is changed 
	span[2].textContent=numInput.value;
       maxscore=Number(numInput.value);// input.value returns a string 
        span[0].textContent="0";
		span[1].textContent="0";
		gameover=false;
			span[0].classList.remove("maxc");
			span[1].classList.remove("maxc");

})



// Mouseover and Mouseout 
var lis=document.querySelectorAll("li");
for(var i=0;i<lis.length ;i++){
	lis[i].addEventListener("mouseover",function(){
		this.style.color="red";})
		lis[i].addEventListener("mouseout",function(){
		this.style.color="black";})
		lis[i].addEventListener("click",function(){
		this.style.color="yellow";})

}