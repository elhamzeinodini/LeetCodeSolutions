<h1>Given two sorted arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.</h1>

<h3>Note :</h3>
<ul>
    <li>the number initialized in nums1 and nums2 are m and n respectively</li>
    <li>you may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.</li>
</ul>

<h3>Inputs:
nums1 = <b>[1,2,3,0,0,0]</b>
<br/>
nums2 = <b>[2,5,6]</b>
</h3>

<br/>

<p>what if instead of merging nums2 into nums1, we create another array that is empty and it has the
same length as nums1, we can compare every item to one another and put the smaller one into the new array, then we're gonna copy the new array to the nums1 array.The only problem with this solution is in addition to time complexity which is o(n), we have a memory complexity of o(n)</p>

<br/>

<p>another approach: we merge nums2 into nums1, but we start from the end because the empty space of nums1 is at the end of it, we start from the end of nums2 we have a 6 and the last real value of nums1 is 3, 6 is greater so we put it at the end: [1 , 2 , 3 , 0 , 0 , 6]. Then, we move to 5, we compare 5 to 3, 5 is greater, so we put it : [1 , 2 , 3 , 5 , 6]. Then we compare 3 to 2, 2 is smaller so we put it : 
[ 1 , 2 , 3 , 5 , 6], now we move back from 3 to 2 in nums1, Then we compare 2 from nums2 to 2 from nums 1, we'll pick the first one and we put it : [1 , 2 , 2 , 3 , 5 , 6], then we compare 2 from nums 2 to 1 from nums 1, 1 is smaller so we put it : [1 , 2 , 2 , 3 , 5 , 6]</p>