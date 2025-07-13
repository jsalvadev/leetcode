class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null && list2 === null) return null
  if (list1 === null) return list2
  if (list2 === null) return list1

  let head = new ListNode()
  let curr = head

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = new ListNode(list1.val)
      list1 = list1.next
    } else {
      curr.next = new ListNode(list2.val)
      list2 = list2.next
    }
    curr = curr.next
  }
  curr.next = list1 || list2

  return head.next
}

// Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4])
// Output: [1, 1, 2, 3, 4, 4]

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

console.log(mergeTwoLists(list1, list2))
console.dir(mergeTwoLists(list1, list2), { depth: null })
