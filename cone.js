// напишите функцию coneVolume(d,h) и используйте ее так,
// так, чтобы функция solve() показывала объем ведра
// либо сообщение "Недопустимые данные".

function solve() {
	// получаем данные в виде строк из полей ввода на странице
	let d1 = Number(document.getElementById("d1").value);
	let d2 = Number(document.getElementById("d2").value);
	let h = Number(document.getElementById("h").value);

	if(typeof(d1) === "number" && typeof(d2) === "number" && typeof(h) === "number" && d1>0 && d2>0 && h>0){
		let H = 0;
		let h2 = 0;
		let scv = 0;
		let cilV = 0;
		if(d1 == d2){
			cilV = Math.PI*((d1/2)**2)*h
			alert(cilV);
		}else{
			if(d2>d1){
				H = (h*d2)/(d2-d1);
				h2 = H-h;
				scv = coneVolume(d2,H)-coneVolume(d1,h2)
				alert(scv);
			}else{
				H = (h*d1)/(d1-d2);
				h2 = H-h;
				scv = coneVolume(d1,H)-coneVolume(d2,h2)
				alert(scv);
			}
		}
	}else{
		alert("Недопустимые данные");	
	}
}

function coneVolume(d, h){
	// вычисление объема полного конуса
	return (1/3)*Math.PI*((d/2)**2)*h;
}
