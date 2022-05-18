### merge two sorted linked lists and return it as a new sorted list, the new list should be made by splicing together the nodes of the first two lists.
<br>

### example: input 1->2->4 , 1->3->4 
### output : 1->1->2->3->4->4
<br>

#### we start from the beginning and compare values we also gonna assume that our output is not empty and there's a dummy node in it, at the first node we have two 1s, it doesn't matter which one we pick but we'll go with the first one and insert it in our output :
#### output : dummyNode -> 1

#### moving on to the next node, we're gonna compare 2 from 1->2->4 to 1 from 1->3->4, 1 is smaller so we insert it to our output:
#### output : dummyNode -> 1 -> 1

#### next, we're comparing 2 from 1->2->4 to 3 from 1->3->4, 2 is smaller, we insert it to our output:
#### output: dummyNode -> 1 -> 1 -> 2


#### next, we're gonna compare 4 from 1->2->4 to 3 from 1->3->4, 3 is smaller and we insert it to our output:
#### output: dummyNode -> 1 -> 1 -> 2 -> 3 


#### then we compare 4 from 1->2->4 to 4 from 1->3->4, they're the same, we'll pick the first one:
#### output: dummyNode -> 1 -> 1 -> 2 -> 3 -> 4


#### in list 1 there are no values to compare but in list 2 we have another 4 left, we can take the remaining of list 2 and insert it to list 1 :
#### output: dummyNode -> 1 -> 1 -> 2 -> 3 -> 4 -> 4


#### time complexity = o(n) linear