export default class DoublyLinkedList 
{
    head;
    tail;
    #size;

    constructor()
    {
        this.#size = 0;
        this.head = null;
        this.tail = null;
    }
    size() {
        return this.#size;
    }

    addLast(data)
    {
        if (this.tail === null)
        {
            this.head = this.createNode(data);
            this.tail = this.head;
            this.#size++;
            return
        }
        const newNode = this.createNode(data); // 
        newNode.prev = this.tail; // set new node to tail
        this.tail.next = newNode; // the entire node
        this.tail = newNode; 
        this.#size++;

    }

    addFirst(data)
    {
        if (this.head === null)
        {
            this.head = this.createNode(data);
            this.tail = this.head;
            this.#size++;
            return
        }
        const newNode = this.createNode(data); //
        newNode.next = this.head // 
        this.head.prev = newNode;
        this.head = newNode;
        this.#size++;
    }

    set(index, data)
    {
        if (index < 0 || index >= this.#size)
        {
            throw new RangeError(`index ${index} is invalid`);
        }
        let currentNode = this.head;
        for (let i = 0;i<this.#size;i++)
        {
            if (i === index)
            {
                currentNode.data = data;
                return
            }
            currentNode = currentNode.next;
        }
    }

    getFirst()
    {
        return this.head.data;
    }

    getLast()
    {
        return this.tail.data;
    }

    get(index)
    {
        if (index <0  || index >= this.#size)
        {
            throw new RangeError(` index ${index} is invalid `)
        }
        let currentNode = this.head;
        for (let i= 0;i<index;i++)
        {
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    getFirstNode()
    {
        return this.head;
    }

    getLastNode()
    {
        return this.tail;
    }

    getNode(index)
    {
        if (index < 0 || index > this.#size)
        {
            throw new RangeError(` index ${index} is invalid `)
        }
        let currentNode = this.head;
        for (let i = 0; i<index;i++)
        {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    printList()
    {
        let currentNode = this.head;
        for (let i = 0; i<this.#size;i++)
        {
            
            console.log(`${currentNode.data}`)
            currentNode = currentNode.next;
        }
    }

    createNode(data)
    {
        return {data:data, next:null, prev:null}
    }

    getNextNode(node)
    {
        return node.next;

    }
    getPreviousNode(node)
    {
        return node.prev;
    }

    insertAfterNode(node,data)
    {
        if (this.tail === node)
        {
            return this.addLast(data);
        }
        const newNode = this.createNode(data);
        newNode.prev = node;
        newNode.next = node.next;
        node.next = newNode;
        newNode.next.prev = newNode;
        this.#size++;
    }

    
}