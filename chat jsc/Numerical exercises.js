let x = [15];
console.log(
  x.every(function (value) {
    return value % 2 == 0;
  })
);







function aood(arr) {
  let zoj = 0;
  let fard = 0;

  arr.forEach(function (value) {
    if (value % 2 === 0) {
      zoj += value;
    } else {
      fard += value;
    }
  });

  return { zoj, fard };
}
let m = aood([1, 2, 3, 4, 5, 6]);
console.log(m);






let jomle = "I love programming";
console.log(jomle);
console.log(jomle.replace("love", "hate"));







function hazf(e) {
  return [...new Set(e)];
}
let result = hazf([1, 1, 2, 2, 3, 3, 4, 4]);
console.log(result);







let v = ["1", "2", "3", "4", "5", "6"];
console.log(
  v.map(function (value) {
    return (value = Number(value));
  })
);





let b = [1, 5, 9, 7, 3, 10, 6, 1, 8, 4, 9];
console.log(
  b.sort(function (a, b) {
    if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return +1;
    }
  })
);






function makos(e) {
   return e==e.split("").reverse().join("");
}
let z = makos("madam") ;
console.log(z);








function date(d) {
    let today = new Date();
    today.setDate(today.getDate() + d);
  
     return today.toDateString();

}

let roz = date(10);
console.log(roz);









function adada(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] > arr[i+1]) {
      return false
    }else{
      return true
    }
    
  }
}
let pos = adada([10,2,3,4,5]);
console.log(pos);








function five(n) {
  let bom = 1
    for (let i = 2;i<=n; i++) {
     
        bom *=i
      
    }
    return bom
}
let ci = five(5);
console.log(ci);







function mitoni(ca) {
  let rosi = [...new Set(ca)].sort(function(a,b) {
    return rosi[1]
  })
}


