class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node at the beginning of the list
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Add a node at the end of the list
    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Get the size of the list
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Add a node at a specific index
    addAt(index, data) {
        if (index < 0 || index > this.size()) {
            console.log("Invalid Index");
            return;
        }
        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    // Remove the first node of the list
    removeTop() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    // Remove the last node of the list
    removeLast() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        if (!current.next) {
            this.head = null;
            return;
        }
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    // Remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            console.log("Invalid Index");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Print all nodes in the list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const linkedlist = new LinkedList();
linkedlist.addFirst(3);
linkedlist.addFirst(5);
linkedlist.addFirst(8);

linkedlist.addLast(9)
linkedlist.print(); // Output: 8 5 3
console.log(linkedlist.size())
