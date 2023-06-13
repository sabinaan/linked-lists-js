

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
    prepend(value){
        let newNode = new Node(value)
        newNode.nextNode = this.head.nextNode
        this.head.nextNode = newNode
        console.log(this.head)

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

    toString(){
        let string = ""
        let pointer = this.head
        while (pointer.nextNode != null){
            pointer = pointer.nextNode
            string = `${string} ( ${pointer.value} ) ->`
        } 
        string = `${string} null`
        return string
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
console.log(newLinkedList.toString())
newLinkedList.append("test4")
newLinkedList.prepend("test5")
newLinkedList.prepend("test6")

console.log("the size of newLinkedkList is " + newLinkedList.size())

console.log(newLinkedList.toString())
