/* Create a simple madlib program that prompts for a noun, a verb, an 
 * adverb, and an adjective, and injects them into a story that you 
 * create.
 */

let noun = prompt('Enter a noun: ');
let verb = prompt('Enter a verb: ');
let adjective = prompt('Enter an adjective: ');
let adverb = prompt('Enter an adverb: ');

string = `Do you ${verb} your ${adjective} ${noun} ${adverb}? ` +
         `That's hilarious!`;

console.log(string);
