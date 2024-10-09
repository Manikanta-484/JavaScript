// Function that prints "Hi" to the console
function printHi() {
    console.log("Hi");
}

// Adding the event listener to the parent element
parent.addEventListener("click", printHi);

// After 2 seconds, remove the event listener from the parent element
setTimeout(() => {
    parent.removeEventListener("click", printHi); // Removes the event listener after 2 seconds
    console.log("Event listener removed");
}, 2000);

// ---- Explanation ----
// 1. The `parent.addEventListener("click", printHi)` line attaches an event listener to the parent element.
//    When you click the parent within 2 seconds, it will trigger the `printHi` function, logging "Hi" to the console.
// 2. `setTimeout` waits for 2000 milliseconds (2 seconds) before executing the code inside it.
// 3. After 2 seconds, `parent.removeEventListener("click", printHi)` is called, which removes the event listener from the parent element.
// 4. After the event listener is removed, clicking on the parent will no longer trigger the `printHi` function.
