var mergeTwoLists = function(list1, list2) {
    if (!list1 || !list2) return list1 || list2
    let head = null
    if (list1.val < list2.val) {
        head = list1
        head.next = mergeTwoLists(list1.next,list2)
    } else {
        head = list2
        head.next = mergeTwoLists(list2.next,list1)
    }
    return head
};
