/*

1) Какое будет выведено значение: let x = 5; console.log( x++ ); // 5
Постфиксный инкремент сначала оставляет прежнее значение, а уже потом выдает новое знание, увеличенное на единицу 
А префиксная форма ++x сразу возвращает измененный результат, то же самое работает с декриментов

2) Чему равно такое выражение: [ ] + false - null + true; // NaN
Когда мы объединяет пустой массив с чем-либо, мы всегда получаем тип данных "строка", а когда мы пытаемся что-то отнять у строки всегда получает НЕ ЧИСЛО, то есть NaN

3) Что выведет этот код: let y = 1; let x = y = 2; console.log(x); // 2
Переменная X сначала присвоила себе по значению значение переменной y, то есть 1, а затем переопределила ее на значение 2ки 
То есть тут цепочка идет задом наперед, справа налево, то есть 2ой присваивается y, а y уже присваивается x


4) Чему равна сумма [ ] + 1 + 2; // 12
так как пустой массив это по факту пустая строка, а при конкатенации с пустой строкой всегда получается строка, то 1 и 2 превращаются в строки которые приплюсовали одна к другой, вот и выходит 12

5) Что выведет этот код: console.log( "1"[0] ); // 1
Мы у строки "1" решили выявить первый индекс, но так как тут единственный индекс, естественно выходит 1

6) Чему равно 2 && 1 && null && 0 && undefined; // null
"И" всегда спотыкается на лжи, а первая "ложь" здесь это null 

Есть ли разница между выражениями? !!( a && b ) и (a && b); // false
Два воскл знака приравнивают выражение к булиновому, так что булиновое выражение и НЕ булиновое, естественное разные выражения

Что выведет этот код: console.log( null || 2 && 3 || 4 ); // 3
Приоритетнее оператор И (&&) сначала выполняется он, и 2 и 3 это true, поэтом возращается последнее правдивое выражение
ИЛИ(||) спотыкается на правде, значит останавливается на выражении 2 && 3, а из него как мы знаем следует 3

let a = [1, 2, 3];
let b = [1, 2, 3]; Правда ли что a == b; // false 
Нет, у нас есть два РАЗНЫХ хранилища информации, просто у них одинаковые данные 


Что выведет этот код: console.log( +"Infinity" ); // Infinity
Унарный плюс приводит все в числовой тип данных, а Infinity это и есть числовой тип

Верно ли сравнение: "Ёжик" > "яблоко"; // false

Чему равно 0 || "" || 2 || undefined || true || falsе; // 2
ИЛИ всегда спотыкается на правде, первая правда здесь это 2ойка


 */
 