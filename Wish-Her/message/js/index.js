this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Happy birthday! to the girl who used to be my whole world but will forever hold a special place in my heart Last year humne sath m celebrate kiya tha tumhara birthday pr ab bhaut kch badal gya hai but my feelings toward you haven't. I am happy ki mane apni life k kch sabse khoobsurat moments tumhare sath spend kiye hai jo ki m kbhi ni bhul skta and nothing can take place that time we spend together. Special ho tum mere liye, aur aaj mere liye pure 1 saal ho gye tum se mile acche bina hug k, mai bss Varsha tum ko hug kr k bhaut ronaa chhta hu jaise uss dinn room m kiya tha miss you varsha bhaut jada aur haa bss senti waali baate ni kruga tumhara birthday hai bss khush raho hasste raho apni seti waali hassi se  \nILOVEYOU!";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 1
	},0.15);
}
