import {проверка_моделей,  Символ, Не, И, Или, Импликация, Эквивалентность} from './logic.mjs'


let АРыцарь = new Символ("А - рыцарь.")
let АЛжец = new Символ("А - лжец.")

let БРыцарь = new Символ("Б - рыцарь.")
let БЛжец = new Символ("Б - лжец.")

let ВРыцарь = new Символ("В - рыцарь.")
let ВЛжец = new Символ("В - лжец.")

// Задача 0
// А сказал: "Я и лжец и рыцарь."
let знания0 = new И()
знания0.добавить(new Эквивалентность (new И(АРыцарь,АЛжец), АРыцарь));
знания0.добавить(new Эквивалентность (АРыцарь, new Не(АЛжец)));
// Добавьте

// Задача 1
// А сказал: "Мы оба лжецы."
// Б ни чего не сказал.
let знания1 = new И()
    // Добавьте
знания1.добавить(new Эквивалентность (АРыцарь, new Не(АЛжец)));
знания1.добавить(new Эквивалентность (БРыцарь, new Не(БЛжец)));
знания1.добавить(new Эквивалентность(new И (АЛжец,БЛжец), АРыцарь));

// Задача 2
// А сказал: "Мы одинаковые."
// Б сказал: "Мы разного вида."
let знания2 = new И()
    // Добавьте
знания2.добавить(new Эквивалентность (АРыцарь, new Не(АЛжец)));
знания2.добавить(new Эквивалентность (БРыцарь, new Не(БЛжец)));
знания2.добавить(new Эквивалентность(new Или(АЛжец,АРыцарь), АЛжец));
знания2.добавить(new Эквивалентность(new Или(БЛжец,БРыцарь), БРыцарь));

// Задача 3
// А сказал, но мы вы не услышали.
// Б сказал: "А сказал 'Я лжец'."
// Б сказал: "В - лжец."
// В сказал: "А - рыцарь."
let знания3 = new И()
    // Добавьте
знания3.добавить(new Эквивалентность (АРыцарь, new Не(АЛжец)));
знания3.добавить(new Эквивалентность (БЛжец, new Не(БРыцарь)));
знания3.добавить(new Эквивалентность (ВРыцарь, new Не(ВЛжец)));

знания3.добавить(new Эквивалентность (new И(АЛжец,БРыцарь,ВРыцарь),АЛжец));
знания3.добавить(new Эквивалентность (new И(ВЛжец,БРыцарь,АРыцарь),БРыцарь));
знания3.добавить(new Эквивалентность (new И(АРыцарь,ВРыцарь),БЛжец));
знания3.добавить(new Эквивалентность (new И(ВРыцарь,АРыцарь),АРыцарь));

let символы = [АРыцарь, АЛжец, БРыцарь, БЛжец, ВРыцарь, ВЛжец]
let задания = {
        "Задание 0": знания0,
        "Задание 1": знания1,
        "Задание 2": знания2,
        "Задание 3": знания3
    }

main()


function main()
{
	for(let задание in задания)
	{
		console.log(задание)
		if(задания[задание].операнды.length == 0)
		    console.log("    Пока не реализована.")
		else
		    for(let  символ of символы)
			if(проверка_моделей(задания[задание], символ))
			    console.log(`    ${символ.имя}`)
	}
}

