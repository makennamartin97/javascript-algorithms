//implementing list node class
//contains 2 items: the data, and the pointer to the next node
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
//implementing linked list class
//if the head node is not passed, the head is initialised to null.
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    //linked list methods (size, clear, getlast, getfirst)
    print(){
        console.log("printing...")
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
        return current;
     
    }

    //size - returns the number of nodes present in the linked list.
    size(){
        let count = 0;
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        }
        console.log("# of nodes: " + count);
        return count;
    }
    //clear
    //This method empties out the list.
    clear(){
        this.head = null;
        return this.head;
    }
    //getLast
    //This method returns the last node of the linked list.
    getLast(){
        let lastnode = this.head;
        if(lastnode){
            while(lastnode.next !== null){
                lastnode = lastnode.next;
            }

        }
        console.log("The last node is: " + lastnode.data);
        return lastnode;
    }

}
//create 2 list nodes
let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(8)
let node4 = new ListNode(11)

//pointer to node2
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;
//creating linked list with node1
let list = new LinkedList(node1)
//accessing a val
console.log(list.head.next.data)
//getting size
list.size()
//getting last node val
console.log(list.getLast())
//clearing list
//list.clear();
//printing list
list.print();
