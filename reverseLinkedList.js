// Reverse a singly linked list.

/*
Definition for singly-linked list.
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */

const iterativeList = (head) => {
    let node = head,
    prev,
    temp
    if(node === null){
        return head
    }
    while(node){
        //save next before override node.next
        temp = node.next
        // reverse pointer
        node.next = prev
        // step forward
        prev = node
        node = temp
    }
    return prev
}

const recursiveList = (head) => {
    if (!head || !head.next) {
        return head;
      }
      let tmp = reverse(head.next);
      head.next.next = head;
      head.next = undefined;
      return tmp;
}