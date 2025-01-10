console.log("tables")
let a=5;
for (i=1;i<11;i++){
    console.log(i+"x"+ a +"=" +i*a );
}
console.log();
console.log();
console.log("sum of number");
let b=50;
let sum=0;
for(j=1;j<b+1;j++){
    sum+=j;
}
console.log(sum);
console.log();
console.log();
console.log("patten");
let s="";
for(l=0;l<5;l++){
    for(k=0;k<l;k++){
        s+="*"
    }
    console.log(s);
}
console.log();
console.log();
console.log("revese the number");
let num=123;
let rev=0;
console.log("the number is:"+num);
while(num>=1){
    rev=(rev*10)+(num%10);
    num/=10;
}
console.log("the reverse number is "+rev);