
n debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/* ANSWER / EXPLANATION
 * This code snippet is an example of functions having lexical scope.
 * The logger function can access the constant variable assigned to the
 * String 'debugging'. As such, when debugIt() is called, it then
 * defines the logger() function, declares a constant variable status,
 * assigns 'debugging' to that variable. It then calls logger(), which
 * logs 'debugging' to the console.
 */
