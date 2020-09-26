/* Both of these solutions have a limitation that can lead to an 
 * incorrect result for certain inputs. What is this limitation and how 
 * does it affect the result?
 */

// FIRST IMPLEMENTATION
function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

// SECOND IMPLEMENTATION
function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

/* ANSWER / EXPLANATION
 * Both versions will run into issues if the program or user provides
 * 0 values for any of the non-required arguments. 0 is a falsy value
 * in JS, so the corresponding local function variables will be assigned
 * to default values rather than keeping 0 values.
 */
