

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

    tail(){
        let pointer = this.head
        while (pointer.nextNode != null){
            pointer = pointer.nextNode
        }
        return pointer
    }

    toString(){
        let string = ""
        let pointer = this.head
        while (pointer.nextNode != null){
            string = `${string} ( ${pointer.value} ) ->`
            pointer = pointer.nextNode
        } 
        string = `${string} ( ${pointer.value} ) -> null`
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
console.log(newLinkedList.toString())
console.log("the size of newLinkedkList is " + newLinkedList.size())
newLinkedList.append("test3")
console.log(newLinkedList.toString())
newLinkedList.append("test4")
newLinkedList.prepend("test5")
newLinkedList.prepend("test6")
console.log(newLinkedList.toString())

console.log("the size of newLinkedkList is " + newLinkedList.size())

console.log(newLinkedList.tail())
