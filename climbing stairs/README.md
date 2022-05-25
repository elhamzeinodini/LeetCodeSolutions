<h1>You are climbing a staircase, it takes <span style="background-color: #E8E8E8">n</span> steps to reach the top</h1>

<br/>

<h2>each time you can either climb 1 or 2 steps, in how many distict (different) ways can you climb to the top ?</h2>

<br/>

<p>example : n = 2
<br/>
we need to climb two steps, we're standing at index 0, we are gonna climb the first stair so we move to index 1 and then we climb the second stair, which means we move from index 1 to index 2, 1 step + 1 step.
<br/>
another approach is that at the index of 0 we move to index 2 directly , we are climbing two stairs, 2 steps.
<br/>
another approach to understand this problem is by using a decision tree with the n = 5 (for example), the time complexity is 2 to the power of the height of the decision tree or 2^n, which is not supper efficient.
<br/>
<img src="./WhatsApp Image 2022-05-25 at 3.07.14 PM.jpeg" alt="decision tree">
<br/>
for example, in this decision tree when we get to 2, we're gonna calculate the number of items that has the result of 5, which is 3 so <b>3 steps + 2 steps</b> and we can calculate other ways like this.
<br/>
memoization : in the decision tree we can see that if we take 2 steps we have to take 3 steps to reach the n steps, and we can see there's another 2 so we can cache the result of this value (starting at step 2) so when we get to the second 2 we can say we already cached this value, so we don't have to draw this again, we can do the same starting at step 3, we cache the value and we don't draw that again, so when we eliminate all of the duplicate solutions we can see that the run time of our algorithm is o(n) linear because we are solving each sub problem once.
<br/>
dynamic programming : suppose n = 5 , we have an array, we start from the end
so because we're at the best case, if we start here how many steps do we need to get to 5, it's 1 : [x,x,x,x,x,1].
<br>
then we are at 4th steps, how many steps do we need to get to the 5th ? we need 1 step : [x,x,x,x,1,1]
<br/>
then we are at 3rd steps, how many steps do we need to get to the 5th ? we already computed starting at 4th step and we also calculated starting from 5th step so for the 3rd step we can conclude that we need 2 steps, [x,x,x,2,1,1]
<br/>
we're at 2nd step, we already calculated starting from 3rd step and the 4th step so we need 2 + 1 = 3 steps to get to the 5th step, [x,x,3,2,1,1]
<br/>
we're at the 1st step, we already calculated how many steps do we need to get to the 5th step starting from the 2nd step, 3rd step, so we need 3 + 2 = 5 steps, [x,5,3,2,1,1]
<br/>
we're at index 0, we already calculated how many steps we need starting from step index 1 and index 2, we need 5 + 3 = 8 ways. [8,5,3,2,1,1]
<br/>
as you can see, we have a memory comlexity of o(n) because of the array, we can see that index 5th and index 4th is 1 so we can set two variables one and two to 1 and 1, and loop from 0 to (n-1) or 5.
</p>