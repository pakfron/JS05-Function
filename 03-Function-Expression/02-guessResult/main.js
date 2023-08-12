
// const showModal = alert;
// showModal("Execute modal"); // *ให้ผลแจ้งเตือน Execute modal เพราะ กดหนดตัวแปรshowModal คือคำสั่ง alert จึง alertได้



const showModal = alert();
showModal("Execute modal"); // **ไม่สามารถ alert Execute modal ได้เพราะ alert ใส่()ไปแล้ว
