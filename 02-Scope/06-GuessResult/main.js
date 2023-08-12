
const sender = 'Matt';

function sendTo(from, to) {
    console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // *From matt to Sarah เราส่งค่าเข้าไปในparameter
sendTo(null); // **from null to undefind เป็น undefined เพราะไม่ได้ส่งค่าเข้าไปใน parameter

const sender = 'Matt';

function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // ***CC to max ส่งค่าเข้าไปใน parameter แต่ถ้าไม่ส่ง from จะเท่ากับ CC
sendTo('Ben', 'Jay'); // **** jay to ben เพราะส่งค่าเข้าไปในparameter ครบถ้วน
