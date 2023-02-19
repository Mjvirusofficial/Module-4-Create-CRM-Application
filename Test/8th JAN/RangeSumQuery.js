// RANGE SUM QUERY 2.0

// Problem Statement

 

// Amy has an array A of R-L+1 integers such that A1 = L, A2 = L+1, …. , AR-L+1 = R.

 

// Anne gives her Q queries. Each query consists of two integers X and Y.

 

// Anne wants Amy to check if there exists at least one subsequence in A, such that the sum of subsequence lies between X and Y (both inclusive).

 

// You are given T independent test cases.

 

// NOTE: Subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. You can erase any elements, not necessarily going successively. The remaining elements preserve their order.

 

// Constraints

// 1 <= T <= 3
// 1 <= Q <= 10^5
// 1 <= L <= R <= 10^9
// 1 <= X<= Y <= 10^18
// All input values are integers.
 

// Input Format

// First-line contains T.
// First line of each test case consists of a three space separated integers integer Q, L and R.
// Next Q lines of each test case consists of two space separated integers X and Y.
 

// Output Format

// Print in a newline for each query: 1 if there exists a required subsequence otherwise print 0.
 

// Sample Input 1

// 1

// 2 1 3

// 6 7

// 9 9

 

// Sample Output 1

// 1

// 0

 

// Explanation of Sample 1

 

// For the 1st query, subsequence S = { A1, A2, A3} has sum 6 (A1+A2+A3 = 1+2+3 = 6). So, there is one possible subsequence whose sum lies between X = 6 and Y = 7.

 

// For 2nd query, there is no possible subsequence.

// Function candidate has to implement
function rangeSumQuery2(q, l, r, queries) {
    let sum = q + l + r;
    let count = 0;
    if(sum <= queries[0] ){
        for(let i = 0; i < queries.length-1; i++){
            count++;
        }
    }
   
    if(count == 0){
        return 0;
    } else{
        return count;
    }
}


// //Driver Code
// var t = readline();
// while (t--) {
//     var temp1 = readline().trim();
//     var temp2 = temp1.split(" ");
//     var q = Number(temp2[0]);
//     var l = Number(temp2[1]);
//     var r = Number(temp2[2]);
//     // var temp = readline().trim();
//     // var s = temp.split(" ");
//     var queries = [];
//     for (i = 0; i < q; i++) {
//         // s[i]=Number(s[i]);
//         temp1 = readline().trim();
//         temp2 = temp1.split(" ");
//         var x = Number(temp2[0]);
//         var y = Number(temp2[1]);
//         queries.push(x);
//         queries.push(y);
//     }
//     var num = rangeSumQuery2(q, l, r, queries);
//     for (i = 0; i < q; i++)
//         print(num[i]);
// }

let q = 2 , l = 1, r = 3;
let queries = []
queries[0] = 6;
queries[1] = 7;


console.log(rangeSumQuery2(q,l,r,queries))