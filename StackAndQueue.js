
// Basic Stack
class Stack {
	constructor(){
		this.s = [];
	}
	pop (){
		return this.s.pop();
	}
	push(new_element){
		this.s.push(new_element);
	}	
	isempty(){
		return (!this.s.length>0);
	}
	getlength(){
		return this.s.length;
	}

}


// Basic Queue
class Queue{
	constructor(){
		this.q = [];
	}
	enqueue(new_element){
		this.q.push(new_element);
	}
	dequeue(){
		if(!this.isempty()){
			return this.q.splice(0,1)[0];
		}
		else{
			return null;
		}
	}
	isempty(){
		return (!this.q.length>0);
	}
	getlength(){
		return this.q.length;
	}
}


// Implement a stack using only data-structure Queue 
class StackUsingQ {
	constructor(){
		this.suq = new Queue();
	}
	
	pop (){
		if(this.suq.isempty()){
			return null;
		}
		var len = this.suq.getlength();		
		for(var i=0; i<len-1; i++){
			//var temp = this.suq.dequeue();
			//this.suq.enqueue(temp);
			this.suq.enqueue(this.suq.dequeue());
		}
		return this.suq.dequeue();
	}
	
	push(new_element){
		this.suq.enqueue(new_element);
	}
	
	isempty(){
		return this.suq.isempty();
	}	
}


// Implement a queue using only data-structure Stack 
class QueueUsingS{
	constructor(){
		this.qus = new Stack();
	}
	enqueue(new_element){
		this.qus.push(new_element);
	}
	dequeue(){
		if(this.qus.isempty()){
			return null;
		}		
		var temps = new Stack();
		var output = null;
		var len = this.qus.getlength();
		for(var i=0; i<len-1; i++){
			temps.push(this.qus.pop());
		}
		output = this.qus.pop();
		while(!temps.isempty()){
			this.qus.push(temps.pop());
		}
		return output;
	}
	isempty(){
		return this.qus.isempty();
	}
}
