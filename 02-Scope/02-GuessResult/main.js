let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // *

//แจ้งเตือน Hello John ทำได้เพราะ ตัวแปร user ,phrase อยู่ด้านนอกScope function SayHi() ทำให้function sayhi()เข้าถึงตัวแปรได้