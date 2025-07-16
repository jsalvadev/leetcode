class ListNode83 {
  val: number
  next: ListNode83 | null
  constructor(val?: number, next?: ListNode83 | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode83 | null): ListNode83 | null {
  if (head === null) return null

  let curr: ListNode83 = head
  let prev: ListNode83 = head

  while (curr.next) {
    curr = curr.next

    if (prev.val === curr.val) {
      prev.next = curr.next
    }
    else {
      prev = prev.next!
    }
  }

  return head
};

// Input: head = [1,1,2]
// Output: [1,2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// const head = new ListNode83(1, new ListNode83(1, new ListNode83(2)))
// console.log(deleteDuplicates(head))

// const head = new ListNode83(1, new ListNode83(1, new ListNode83(2, new ListNode83(3, new ListNode83(3)))))
// console.log(deleteDuplicates(head))

// [1,1,2,2,3,3,3]
const head = new ListNode83(1, new ListNode83(1, new ListNode83(2, new ListNode83(2, new ListNode83(3, new ListNode83(3, new ListNode83(3)))))))
console.log(deleteDuplicates(head))
