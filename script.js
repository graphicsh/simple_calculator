/*
	Простейший калькулятор на javascript.
	Написан специально для ютуб-канала graphics.h 
(https://www.youtube.com/channel/UCAwoqozl2nccku39rhL9_OA?sub_confirmation=1)
*/

//Глобальные переменные
var a = 0,b = 0;
var res = 0;

//Возвращает числовое значение поля для ввода числа а
function geta(){
	var a_str = document.getElementById("inputa").value;
	//return Number(a_str); //Прежний вариант преобразования типа
	return +a_str; //плюс преобразует строковый тип в числовой
}

//Возвращает числовое значение поля для ввода числа b
function getb(){
	var b_str = document.getElementById("inputb").value;
	//return Number(b_str);
	return +b_str;
}

/*
	Общий алгоритм работы:
	1) Получаем данные с инпутов (инпут числа a, инпут числа b)
	2) Выбираем арифметическую операцию
	3) Записываем результат
*/

//Функция сложения
function add(){
	a = geta();
	b = getb();
	res = a + b;
	document.getElementById("result").innerHTML = res;
}

//Функция вычитания
function sub(){
	a = geta();
	b = getb();
	res = a - b;
	document.getElementById("result").innerHTML = res;
}

//Функция деления
function div(){
	a = geta();
	b = getb();
	if (b == 0)
		{alert('На ноль делить нельзя!');}
	else
		{
			res = a / b;
			document.getElementById("result").innerHTML = res;
		}
}

//Функция умножения
function mul(){
	a = geta();
	b = getb();
	res = a * b;
	document.getElementById("result").innerHTML = res;
}
