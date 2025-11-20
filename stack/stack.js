export default class Stack 
{
    head = null;
    #size = 0;

    constructor()
    {
        this.head = null;
        this.#size = 0;
    }

    get size()
    {
        return this.#size;
    }

    push(data)
    {
        const newNode = {data:data, next:null}
        newNode.next = this.head; // b-node's next (a-node) points to a-node
        this.head = newNode; /* head value is now b-node because b-node 
                                is in the top of the stack */
        this.#size++;
    }

    pop()
    {
        if (this.head === null)
        { // if empty we return nothing
            return null;
        }
        const currentNode = this.head; // points to b node
        this.#size--;
        this.head = this.head.next // top stack points to next object in stack
        return currentNode.data; 
    }
}