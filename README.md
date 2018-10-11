# Судоку

##Введение

![Решение анимация](readme-assets/sequence.gif)
*Рисунок 1*. Анимация решения.

Судоку – логическая комбинаторная головоломка, которую необходимо решать при помощи чисел.  Она представляет собой решетку из клеток 3×3 и содержит цифры от 1 до 9.

Как правило, судоку частично предоставляет нам решение, которое выражается в виде уже заполненных числами клеток. Чтобы решить головоломку, нам нужно заполнить пустые квадраты так, как это показано на Рисунке 1.

К концу этой задачи у нас будет полностью функционирующий «решатель» Судоку, который запускается из командной строки. Нам будут представлены 15 неразрешенных головоломок Судоку. Паззлы можно найти в файле `sudoku_puzzles.txt`.

* Пять головоломок могут быть решены с помощью базовой логики.
* Пять требуют немного более продвинутой логики.
* Пять требуют «умного» угадывания.

Полное решение разрешит все 15 головоломок.

### Ограничения

 - Никаких глобальных переменных -  вы будете использовать только локальные переменные.
Для этого вы будете писать методы, которые принимают параметры в качестве входных данных и возвращают посчитанные значения. Вы должны написать большое количество методов(функций) и использовать их вместе для создания своего «судоку-решателя».


## Тестирование

Хорошие новости: вы создадите много небольших методов, а небольшие методы легче тестировать!

Количество тестов, которые Вы пишете, полностью зависит от Вас. Тестирование выполняется исключительно для Вас и поможет Вам писать код. Вы должны находить баланс между тестированием и необходимостью писать код. Помните, что тесты могут помочь вам быстрее достичь нужных результатов.


## Releases

### Pre-release: Понимание и моделирование Судоку

Компьютерная программа, которая решает Судоку, имитирует человека, играющего в нее. Понимание того, как человек играет в игру, является ключевым. Что делает человек при решении Судоку?

Давайте сыграем в настоящую головоломку Судоку, обращая внимание на то, как мы приближаемся к решению поставленной задачи.

- Какие стратегии мы принимаем и почему?
- Как мы выбираем, с чего начать?
- Как мы узнаем, когда действительно следует поставить число в клетку?
- Что мы делаем, когда мы окончательно не знаем, как заполнить остальные клетки?

Размышляя о нашей человеческой стратегии, важно понимать, что иногда стратегии, которые работают для людей, будет трудно реализовать на компьютере. Однако верно и обратное: стратегии компьютера могут быть не всегда удобны для людей, потому что нам придется писать слишком много текста, использовать слишком много листов бумаги или помнить много информации, которую в состоянии запомнить компьютер, но не человек.

Прежде чем мы начнем писать код, давайте разработаем и напишем решение при помощи псевдокода для вашего «решателя».

### Release 0: Основная логика

Первые пять головоломок в файле `sudoku_puzzles.txt` могут быть решены с помощью базовой логики (многие клетки в начале игры имеют только одно возможное значение). Для этого релиза нам надо, чтобы наша программа могла решить первые пять головоломок.

- Мы создадим коллекцию методов, которые будут работать вместе для решения головоломок. Несколько методов уже есть для Вас в `sudoku.js`.
- Чтобы запустить наш «решатель», мы будем использовать `runner.js`, который использует методы из `sudoku.js`. Убедитесь, что Вы прочитали комментарии и код в `runner.js` и`sudoku.js`.
- Метод `solve` в` sudoku.js` примет строку `String`, представляющую собой чистую доску Судоку. Неразрешенные квадраты отмечены символом ` - `. Решенные квадраты содержат в себе цифру от «1» до «9». Например:
  `" 1-58-2 ---- 9--764-52--4--819-19--73-6762-83-9 ----- 61-5 --- 76 --- 3 -43--2-5-16--3-89 - "`

- Для этого релиза Ваша программа должна «сдаваться», если ей не удается решить задачу.
- Обязательно напишите метод `prettyBoard`, который берет доску, записанную в строчку, и возвращает отформатированный вариант, более привычный для нашего визуального восприятия. Например:

```
1 - 5 8 - 2 - - -
- 9 - - 7 6 4 - 5
2 - - 4 - - 8 1 9
- 1 9 - - 7 3 - 6
7 6 2 - 8 3 - 9 -
- - - - 6 1 - 5 -
- - 7 6 - - - 3 -
4 3 - - 2 - 5 - 1
6 - - 3 - 8 9 - -
```
### Release 1: Более продвинутая логика

Головоломки 6-10 могут быть решены с использованием обычной логики, но при этом требуют больше, чем просто последовательный перебор клеток, которые могут иметь только одно возможное значение. Требуется улучшить механизм, чтобы программа могла решать эти новые головоломки.

* Примечание: * Ваш код все равно должен «сдаваться», если он не работает.

### Release 2: «Умное» угадывание

Головоломки 11-15 можно решить, делая обоснованные предположения о значениях неразрешенных квадратов, а затем пытаясь решить головоломки на основе этих уже угаданных значений. Угадывание должно начинаться после того, как Ваш основной код пройдет по всему полю Судоку и найдет все очевидные значения, либо сделает предположения о возможных значениях. Другими словами, подберите значения в как можно большем количестве клеток с помощью логики, а затем начинайте угадывать.

## Выводы

Написание решения Судоку заключает в себе множество проблем: определение логики, связанной с самой игрой, перекладывание этой логики на код, манипулирование структурами данных и т. д. Это обеспечивает хорошую всеобъемлющую задачу, суммируя навыки, которые мы развили до этого момента в Elbrus Bootcamp.









































# Sudoku

## Summary
![solving sequence animation](readme-assets/sequence.gif)  
*Figure 1*.  Animation solving a sudoku puzzle and partially verifying the solution.

[Sudoku](http://en.wikipedia.org/wiki/Sudoku) is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 sub-grids that compose the grid (also called "boxes") contains the digits from 1 to 9.

Generally, a puzzle provides a partial solution so that some squares already have numbers.  To solve the puzzle, we need to fill in the unsolved squares, as demonstrated in Figure 1.

By the end of this challenge we'll have a fully functioning Sudoku solver that runs from the command line.  We'll be presented with 15 unsolved Sudoku puzzles.  The puzzles can be found in the file `sudoku_puzzles.txt`.

 * Five puzzles can be solved with **basic logic**.
 * Five require slightly more **advanced logic**.
 * Five require **educated guessing**.
 
A complete solution to this challenge will solve all 15 puzzles.

### Restrictions

Failing to follow the following restrictions will result in an invalid submission:

 - Do not create classes, you will only be creating (many) methods.
 - No instance variables and no globals, you will only use local variables.

To accomplish this, you will be writing methods that accept arguments as inputs and return useful values representing their work. You should be writing many methods, and using them together to build up your solver.

## Testing
Good news: you will be creating many small methods, and small methods are easier to test.

The number of tests you write is completely up to you. Testing is for _you_, and will help you develop code. You must balance testing with the need to write code and make progress on the solution, but remember that being able to easily run tests that prove your code is working correctly can help you move faster.

## Releases

### Pre-release: Understanding and Modeling Sudoku
A computer program that solves Sudoku is simulating a person playing Sudoku.  Understanding how a person plays the game is key.  What does someone do when solving a Sudoku puzzle?

Let's play an actual Sudoku puzzle, paying attention to how we approach the problem.

- What strategies are we adopting and why?
- How do we choose where to start?
- How do we know when to really put a number in a square?
- What do we do when we don't definitively know how to fill in any more squares?

Reflecting on our human strategy, it's important to see that sometimes the strategies that work for humans would be difficult to implement on a computer.  However, the reverse is also true: strategies humans avoid because we'd have to write too much, use too many sheets of paper, or remember too much information are possible for a computer.

Before we begin coding, let's develop and write a pseudocode solution for your solver.

### Release 0: Basic Logic
The first five puzzles in the file `sudoku_puzzles.txt` can be solved with basic logic: identifying when a square has only one possible value.  For this release, we want to develop our solver to the point of solving these first five puzzles.

- We'll build a collection of methods that work together to solve puzzles. A few methods are already there for you in `sudoku.rb`.
- To run our solver we'll use `runner.rb`, which uses the methods in `sudoku.rb`. Make sure you read the comments and code in `runner.rb` and `sudoku.rb`.
- The `solve` method in `sudoku.rb` will take a `String` representing an unsolved Sudoku board. Unsolved squares are marked with a `"-"`.  Solved squares have a character from `"1"` to `"9"`. For example...
  `"1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"`

- For this release, your code should give up if it gets stuck
- Be sure to write the `pretty_board` method, which takes your board and returns a string that is well formatted for display to the screen. For example:
```
1 - 5 8 - 2 - - -
- 9 - - 7 6 4 - 5
2 - - 4 - - 8 1 9
- 1 9 - - 7 3 - 6
7 6 2 - 8 3 - 9 -
- - - - 6 1 - 5 -
- - 7 6 - - - 3 -
4 3 - - 2 - 5 - 1
6 - - 3 - 8 9 - -
```

### Release 1:  More Advanced Logic
Puzzles 6 - 10 can be solved using logic alone but require more than just identifying when a square has only one possible value.  Enhance the behavior your solve these new puzzles.

*Note:* Your code should still give up if it gets stuck.

### Release 2:  Educated Guessing
Puzzles 11 - 15 can be solved by making informed guesses about the values of unsolved squares and then trying to solve the puzzles based on those guessed values.  Guessing should be started once your solving code gets stuck.  In other words, solve as many squares as possible using logic and then start guessing.

## Conclusion
Writing a Sudoku solver presents a lot of problems:  identifying the logic involved in the game itself, translating that logic to code, manipulating data structures, etc.  It provides a nice comprehensive challenge, summing the skills that we've developed to this point at Dev Bootcamp.
