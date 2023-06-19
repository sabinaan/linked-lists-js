

class LinkedList {
    constructor() {
        this.head = null
    } 
    append(value){
        let newNode = new Node(value)
        
        if (this.head == null) {
            this.head = newNode
        }else{
            let pointer = this.head
            while (pointer.nextNode != null){
                pointer = pointer.nextNode
            }
            pointer.nextNode = newNode
        }
    }

    prepend(value){
        let newNode = new Node(value)
        if (this.head == null){
            this.head = newNode
        }else{
            newNode.nextNode = this.head
            this.head = newNode
        }
    }

    size(){

        if (this.head == null){
            return 0
        }else{
            let counter = 1
            let pointer = this.head
            while(pointer.nextNode != null){
                pointer = pointer.nextNode
                counter++
            }
            return counter
        }

    }
    listHead(){
        return this.head
     }

     listTail(){
        let pointer = this.head
        while (pointer.nextNode != null){
            pointer = pointer.nextNode
        }
        return pointer
    }

    at(index){
        let pointer = this.head;
        if (index <= 0) return null
        for (let i = 1; i < index; i++){
            if (pointer.nextNode == null){
                return null
            }
            else{
                pointer = pointer.nextNode
            }
        }
        return pointer
    }

    pop(){
        if (this.head == null) return // LinkedList is empty
        if (this.head.nextNode == null){ //Linkedlist has only one node
            this.head = null
        }else{
            this.at(this.size()-1).nextNode = null
        }

    }

    contains(value){
        let pointer = this.head;
        while (pointer != null){
            if (pointer.value == value) return true
            pointer = pointer.nextNode
        }
        return false
    }

    find(value){
        let index = 1
        let pointer = this.head;
        while(pointer != null){
            if (pointer.value == value) return index
            pointer = pointer.nextNode
            index++
        }
        return null
    }

    toString(){
        let string = ""
        let pointer = this.head
        if (pointer == null) return `-> null`
        while (pointer.nextNode != null){
            string = `${string} ( ${pointer.value} ) ->`
            pointer = pointer.nextNode
        } 
        string = `${string} ( ${pointer.value} ) -> null`
        return string
    }

    insertAt(value, index){
        if (index == 1){
            this.prepend(value)
            return
        }
        let pointer = this.at(index - 1)
        if (pointer != null){
            let newNode = new Node(value);
            newNode.nextNode = pointer.nextNode;
            pointer.nextNode = newNode;
        }else{
            console.log("Index is not valid")
        }
    }

    removeAt(index){
        let size = this.size()
        if (index == 1){  // remove the first node
            this.head = this.at(2)
        }else 
        if (index > 1 && index < size){ 
            let pointer = this.at(index - 1)
            pointer.nextNode = this.at(index + 1)
        }else
        if (index == size){ // remove the last node
            this.pop()
        }

    }

}

class Node{
    constructor(value){
        this.value = value || null ;
        this.nextNode = null
    }
}


let newLinkedList = new LinkedList
console.log(newLinkedList.at(1))
newLinkedList.append("test1")
newLinkedList.append("test2")

console.log(newLinkedList.toString())

console.log("pop test")
newLinkedList.pop()

console.log(newLinkedList.toString())
console.log("the size of newLinkedkList is " + newLinkedList.size())

newLinkedList.append("test3")
console.log(newLinkedList.toString())

newLinkedList.append("test4")
newLinkedList.prepend("test5")
newLinkedList.prepend("test6")
console.log(newLinkedList.toString())

console.log("the size of newLinkedkList is " + newLinkedList.size())
console.log("tail;")
console.log(newLinkedList.listTail())
console.log("head")
console.log(newLinkedList.listHead())
console.log("nodes at index 0, 1, 7:")
console.log(newLinkedList.at(0))
console.log(newLinkedList.at(1))
console.log(newLinkedList.at(7))

console.log(newLinkedList.contains("test1"))
console.log(newLinkedList.contains("test4"))
console.log(newLinkedList.contains("test"))

console.log(newLinkedList.find("test1"))
console.log(newLinkedList.find("test5"))
console.log(newLinkedList.find("test4"))
console.log(newLinkedList.find("test"))

console.log("insertAt")
newLinkedList.insertAt("test7", 4)
console.log(newLinkedList.toString())
newLinkedList.insertAt("test8", 1)
console.log(newLinkedList.toString())
newLinkedList.insertAt("test9", 12)
console.log(newLinkedList.toString())

console.log("removeAt")
newLinkedList.removeAt(5)
console.log(newLinkedList.toString())
newLinkedList.removeAt(1)
console.log(newLinkedList.toString())
newLinkedList.removeAt(6)
console.log(newLinkedList.toString())
newLinkedList.removeAt(5)
console.log(newLinkedList.toString())

