function sayHi(name) {
    let name = "Guest";
    console.log(name);
  }
  
  sayHi("Jim");


  
  //ไม่สามารถแสดงผลได้เพราะ name ได้ประกาศตัวแปรไปแล้ว ทำให้ชื่อซ้ำกัน(อยู่ในscropเดียวกันด้วย) ทำให้ไม่สามารถ let name ได้ 
  //แต่ถ้าเป็น name ="Guest" 
  //nameจะกลายเป็นค่า"Guest"