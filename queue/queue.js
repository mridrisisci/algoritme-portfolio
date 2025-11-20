export default class Queue 
{
	head = null;
	tail = null;
	#size = 0;

	constructor()
	{
		this.head = null;
		this.tail = null;
		this.#size = 0;
	}
	
	size()
	{
		return this.#size;
	}


	peek()
	{
		if (this.head === null)
		{
			return null
		}
		return this.head.data
	}

	enqueue(data)
	{
		if (this.head === null)
		{
			this.head = {data:data, next:null}
			this.tail = this.head
			this.#size++;
			return
		}
		const newNode = {data:data, next:null} // D node 
		this.tail.next = newNode; // C node points to D node
		this.tail = newNode; // D node is the new tail
		this.#size++;
		return
	}

	dequeue()
	{
		if (this.head === null)
		{
			return null;
		}
		const currentNode = this.head;
		this.#size--; 
		this.head = this.head.next; // A node points to b-node
		if (this.head === null)
		{ // if there is no head there must be no tail
			this.tail = null;
		}
		return currentNode.data // return a node 
	}

	get(index)
	{
		let currentNode = this.head;
		if (index < 0 || index >= this.#size)
		{
			return null;
		}
		for (let i = 0; i<index;i++)
		{
			currentNode = currentNode.next

		}
		return currentNode.data;
	}



}