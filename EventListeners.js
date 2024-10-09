// Event bubbling and capturing concepts explained

// Event listener on grandparent (without third parameter, default is bubbling)
grandparent.addEventListener('click', e => {
    console.log("Grandparent (Bubbling) 1");
});

// Event listener on parent (without third parameter, default is bubbling)
parent.addEventListener('click', e => {
    console.log("Parent (Bubbling) 1");
});

// Event listener on child (without third parameter, default is bubbling)
child.addEventListener('click', e => {
    console.log("Child (Bubbling) 1");
});

// ---- Bubbling Concept ----
// By default, event listeners use the bubbling phase. 
// In bubbling, the event starts at the target element (child) and then "bubbles up" through its parents.
// So, if you click on the child element, the event will first trigger the child, then the parent, and finally the grandparent.
// Clicking on the child should log:
// Child (Bubbling) 1
// Parent (Bubbling) 1
// Grandparent (Bubbling) 1

// ---- Capturing Concept ----
// To use capturing, we pass 'true' as the third parameter to addEventListener.
// In capturing, the event travels from the outermost parent to the innermost child.
// So, when you click on the child element, the event will first trigger the grandparent, then the parent, and finally the child.

grandparent.addEventListener('click', e => {
    console.log("Grandparent (Capturing) 2");
}, true); // Using true for capturing phase

parent.addEventListener('click', e => {
    console.log("Parent (Capturing) 2");
}, true); // Using true for capturing phase

child.addEventListener('click', e => {
    console.log("Child (Capturing) 2");
}, true); // Using true for capturing phase

// If you click the child element now with capturing enabled, the output will be:
// Grandparent (Capturing) 2
// Parent (Capturing) 2
// Child (Capturing) 2

// ---- e.stopPropagation() ----
// stopPropagation() is used to stop the event from continuing to bubble or capture.
// Here we demonstrate how it works by stopping the event at the 'parent' element during bubbling.

parent.addEventListener('click', e => {
    console.log("Parent (Bubbling with stopPropagation) 3");
    e.stopPropagation(); // Stop the event from propagating further up
});

// Now if you click the child element, the output will be:
// Child (Bubbling) 1
// Parent (Bubbling with stopPropagation) 3
// (No Grandparent, because the event was stopped at the parent)

// ---- Summary of stopPropagation ----
// When e.stopPropagation() is called, it prevents further propagation of the event in the bubbling or capturing phase.
// This can be useful when you don't want an event to trigger handlers on parent elements.




