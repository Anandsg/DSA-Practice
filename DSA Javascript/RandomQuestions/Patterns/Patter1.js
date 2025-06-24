/*

print below patter :
****
****
****
****

*/
let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}
