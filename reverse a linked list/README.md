<h2>Input: 1 -> 2 -> 3 -> 4 -> 5 -> null</h2>
<h2>Input: 5 -> 4 -> 3 -> 2 -> 1 -> null</h2>

<p>
<b>null -> 1 -> 2 -> 3 -> null</b> we have two pointers : previous pointer and current pointer. now, the head is 1 and previous is null and current is 1. For 1 the pointer is gonna be reversed, we also shift our two pointers
</p>

<p>
<b>null <- 1  2 -> 3 -> null</b> previous is on 1 , current is on 2, we reverse the pointer of 2 and shift our pointers.
</p>

<p>
<b>null <- 1 <- 2  3 -> null</b> previous is on 1 , current is on 2, we reverse the pointer of 2 and shift our pointers.
</p>

<p>
<b>null <- 1 <- 2 <- 3  null</b> previous is on 2 , current is on 3, we reverse the pointer of 3 and shift our pointers, now previous is 3 and current is null , now that we're finished with the list, time complexity = o(n) and memory complexity = o(1).
</p>