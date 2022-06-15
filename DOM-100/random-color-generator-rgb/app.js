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
	})


	// --hex
	hexColorChangeBtn.addEventListener("click", function(){
		const hexColor = ColorGeneratorHEX();
		body.style.backgroundColor = hexColor;
		hexColorCodeShow.innerHTML = hexColor;
		hexColorCodeShowInput.value = hexColor;
	})

	hexCopyCodeBtn.addEventListener("click",function(){
		window.navigator.clipboard.writeText(hexColorCodeShowInput.value) 
	})





}

function ColorGenerateRGB (){
	const R = Math.floor(Math.random() * 255);
	const G = Math.floor(Math.random() * 255);
	const B = Math.floor(Math.random() * 255);

	return  `rgb(${R},${G},${B})`;
}

// --------- for HEX color generate --------

function ColorGeneratorHEX (){
	const RR = Math.floor(Math.random() * 255);
	const GG = Math.floor(Math.random() * 255);
	const BB = Math.floor(Math.random() * 255);

	return  `#${RR.toString(16)}${GG.toString(16)}${BB.toString(16)}`;
}
