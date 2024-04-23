class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addFirst(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    addLast(value) {
        const newNode = new ListNode(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    remove(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                if (current.prev) current.prev.next = current.next;
                if (current.next) current.next.prev = current.prev;
                if (current === this.head) this.head = current.next;
                if (current === this.tail) this.tail = current.prev;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    printList() {
        let current = this.head;
        let output = '';
        while (current) {
            output += `${current.value}`;
            if (current.next) output += ' -> ';
            current = current.next;
        }
        return output || 'List is empty';
    }

    printReverseList() {
        let current = this.tail;
        let output = '';
        while (current) {
            output += `${current.value}`;
            if (current.prev) output += ' -> ';
            current = current.prev;
        }
        return output || 'List is empty';
    }
    search(value) {
let current = this.head;
let index = 0;
while (current !== null) {
    if (current.value === value) {
        return index;
    }
    current = current.next;
    index++;
}
return -1; // Value 
}
}

const list = new DoublyLinkedList();
const outputElement = document.getElementById('listOutput');

function addToList() {
    const value = parseInt(document.getElementById('inputValue').value, 10);
    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }
    list.addLast(value);
    updateOutput();
}
function searchInList() {
const value = parseInt(document.getElementById('inputValue').value, 10);
if (isNaN(value)) {
alert("Please enter a valid number");
return;
}
const index = list.search(value);
if (index === -1) {
alert("Value not found in the list.");
} else {
alert("Value found at position: " + index);
}
}

function addToBeginning() {
    const value = parseInt(document.getElementById('inputValue').value, 10);
    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }
    list.addFirst(value);
    updateOutput();
}

function removeFromList() {
    const value = parseInt(document.getElementById('inputValue').value, 10);
    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }
    const success = list.remove(value);
    if (!success) {
        alert("Value not found in list.");
    }
    updateOutput();
}

function printList() {
    outputElement.textContent = list.printList() || 'List is empty';
}

function printReverseList() {
    outputElement.textContent = list.printReverseList() || 'List is empty';
}

function updateOutput() {
    outputElement.textContent = list.printList() || 'List is empty';
}