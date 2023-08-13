let x = 1;

function func() {
  console.log(x); // *
  let x = 2;
}
func();

//ไม่สามารถเข้าถึง x ได้เพราะ เพราะประกาศxหลัง console.log
