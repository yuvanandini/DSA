class Stack {
    constructor() {
        this.items = []; // This will hold the elements of the stack
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element off the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Print the elements in the stack
    print() {
        console.log(this.items.join(' '));
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element: " + stack.peek()); // Output: Top element: 30

stack.print(); // Output: 10 20 30

console.log("Popped element: " + stack.pop()); // Output: Popped element: 30
stack.print(); // Output: 10 20

console.log("Is stack empty? " + stack.isEmpty()); // Output: Is stack empty? False

