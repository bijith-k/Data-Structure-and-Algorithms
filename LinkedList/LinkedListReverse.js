class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }
  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }
  
  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalid index")
    }

    if (index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }
  print() {
    if (this.isEmpty()) {
      return console.log("There is nothing in the list to print");
    } else {
      let curr = this.head
      let values = ''
      while (curr) {
        values += `${curr.value} `
        curr = curr.next
      }
      console.log(values)
    }
  }
  reverse() {
    if (this.isEmpty()) {
      return console.log("List is empty")
    } else {
      let prev = null
      let curr = this.head
      while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
      }
      this.head = prev
    }
  }

}

const list = new LinkedList()
list.print()
list.prepend(10)
list.insert(12, 1)
list.insert(20, 2)
list.prepend(25)
list.print()
list.reverse()
list.print()