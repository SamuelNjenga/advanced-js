// Generators
// A normal function follows a run to completion model -> Won't stop till last line is completed
 function normalFunction(){}

 // A generator function can pause the execution however -> Can stop midway and then continue from where it stopped
 function* generatorFunction(){
     yield 'Hello'
     yield 'World'
 }

 // Invoke generator function -> Returns a generator object which is an iterator(Can be used in for..of loops)
 const generatorObject = generatorFunction()
 for (const word of generatorObject){
     console.log(word);
 }