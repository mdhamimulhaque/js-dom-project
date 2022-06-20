// ------- global variable --------

let toastMsgDiv = null;



window.onload = () =>{
	main()
}

// --------- for RGB color generate --------
const main = () =>{
	const body = document.querySelector('#body');
	const rgbColorChangeBtn = document.querySelector('#rgb_colorChange_btn');
	const rgbCopyCodeBtn = document.querySelector('#rgb_copycode_btn');
    const rgbColorCodeShow = document.querySelector('#show_rgbcolor_code');
    const rgbColorCodeShowInput = document.querySelector('#show_rgbcolor_code_withInput');


	const hexColorChangeBtn = document.querySelector('#hex_colorChange_btn');
	const hexCopyCodeBtn = document.querySelector('#hex_copycode_btn');	
	const hexColorCodeShow = document.querySelector('#show_hexcolor_code');
	const hexColorCodeShowInput = document.querySelector('#show_hexcolor_code_withInput');
    // --rgb
    rgbColorChangeBtn.addEventListener("click", function(){
		const rgbColor = ColorGenerateRGB();
		body.style.backgroundColor = rgbColor;
		rgbColorCodeShow.innerHTML = rgbColor;
		rgbColorCodeShowInput.value = rgbColor;
	})
    
	rgbCopyCodeBtn.addEventListener("click",function(){
		window.navigator.clipboard.writeText(rgbColorCodeShowInput.value);

		// ---- toast msg
		if(toastMsgDiv !== null){
			toastMsgDiv.remove();
			toastMsgDiv = null;
		}
		createToastMessage(`${rgbColorCodeShowInput.value} copied successfully` );
	})


	// --hex
	hexColorChangeBtn.addEventListener("click", function(){
		const hexColor = ColorGeneratorHEX();
		body.style.backgroundColor = hexColor;
		hexColorCodeShow.innerHTML = hexColor;
		hexColorCodeShowInput.value = hexColor;
	})

	hexCopyCodeBtn.addEventListener("click",function(){
		window.navigator.clipboard.writeText(hexColorCodeShowInput.value);

		// ---- toast msg
		if(toastMsgDiv !== null){
			toastMsgDiv.remove();
			toastMsgDiv = null;
		}
		createToastMessage(`${hexColorCodeShowInput.value} copied successfully` );
	})
	
	


}

// --------- for RGB color code generate -------
function ColorGenerateRGB (){
	const R = Math.floor(Math.random() * 255);
	const G = Math.floor(Math.random() * 255);
	const B = Math.floor(Math.random() * 255);

	return  `rgb(${R},${G},${B})`;
}

// --------- for HEX color code generate --------

function ColorGeneratorHEX (){
	const RR = Math.floor(Math.random() * 255);
	const GG = Math.floor(Math.random() * 255);
	const BB = Math.floor(Math.random() * 255);

	return  `#${RR.toString(16)}${GG.toString(16)}${BB.toString(16)}`;
}

// ---------------- create toast message -----------------

function createToastMessage(x){
    toastMsgDiv = document.createElement("div");
	toastMsgDiv.className = "toast-message toast-msg-slide-in";
	toastMsgDiv.innerText = x;

	toastMsgDiv.addEventListener("click",function(){
		toastMsgDiv.classList.remove("toast-msg-slide-in");
		toastMsgDiv.classList.add("toast-msg-slide-out");

		toastMsgDiv.addEventListener("animationend",function(){
			toastMsgDiv.remove();
			toastMsgDiv = null;
		})
	})

	body.appendChild(toastMsgDiv);

   }