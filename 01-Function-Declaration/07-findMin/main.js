function max(a, b, c, d) {

    if(isNaN(a)){
        a=""
    }
    if(isNaN(b)){
        b=""
    }
    if(isNaN(c)){
        c=""
    }
    if(isNaN(d)){
        d=""
    }
   
    if(a>b&&a>c&&a>d){
        console.log(a)
    }
   
    if(b>a&&b>c&&b>d){
        console.log(b)
    }
   
    if(c>a&&c>b&&c>d){
        console.log(c)
    }
   
    if(d>a&&d>b&&d>c){
        console.log(d)
    }
   if(a==""&&b==""&&c==""&&d==""){
    console.log(undefined)
   }

    
}

max(); // undefined
max(2); // 2
max(3, 1); // 3
max(7, 3, 9, 2); // 9
