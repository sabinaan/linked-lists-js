

class LinkedList {
    constructor() {
        this.head = new Node()
    } 
    append(value){
        let pointer = this.head
        while(pointer.nextNode != null){
          pointer = pointer.nextNode   
        }
        pointer.nextNode = new Node(value)
        console.log(pointer.nextNode)

    }

    size(){
        let counter = 0
        let pointer = this.head
        while(pointer.nextNode != null){
            pointer = pointer.nextNode
            counter++
        }
        return counter
    }

}

class Node{
    constructor(value){
        this.value = value || null ;
        this.nextNode = null
    }
}


let newLinkedList = new LinkedList
newLinkedList.append("test1")
newLinkedList.append("test2")
console.log("the size of newLinkedkList is " + newLinkedList.size())
newLinkedList.append("test3")
newLinkedList.append("test4")

console.log("the size of newLinkedkList is " + newLinkedList.size())
