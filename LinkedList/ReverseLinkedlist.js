// Define a Node class to represent each node in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Define a LinkedList class to manage the list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Reverse the linked list iteratively
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next; // Store next node
            current.next = prev; // Reverse the pointer
            prev = current; // Move prev and current forward
            current = next;
        }
        this.head = prev; // Update the head to the new first node
    }

    // Print the linked list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original List:");
list.printList();

list.reverse();

console.log("Reversed List:");
list.printList();



