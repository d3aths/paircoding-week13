class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    shift(){
        if(!this.length){
            return null
        }
        else{
            const nodeToRemove = this.head
            this.head = this.head.next
            this.lenght -= 1;
            if (!this.length){
                this.tail = null
            }
            return nodeToRemove
        }
    }
    
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
   set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}
var list = new SinglyLinkedList()

console.log(list.push("wake up"))
console.log(list.push("sdv class"))
console.log(list.push("have lunch"))
console.log(list.push("communication class"))
console.log(list.push("go home"))
console.log(list.push("go training"))
console.log(list)
console.log(list.get(2))

console.log(list.shift())
console.log(list)