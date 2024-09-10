class Queue {
    constructor() {
        this.items = []; // This will hold the elements of the queue
    }

    // Enqueue: Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue: Remove and return the first element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift(); // Removes the first element in the array
    }

    // Peek: View the first element in the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Print the elements in the queue
    print() {
        console.log(this.items.join(' '));
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element: " + queue.peek()); // Output: Front element: 10

queue.print(); // Output: 10 20 30

console.log("Dequeued element: " + queue.dequeue()); // Output: Dequeued element: 10
queue.print(); // Output: 20 30

console.log("Is queue empty? " + queue.isEmpty()); // Output: Is queue empty? False
