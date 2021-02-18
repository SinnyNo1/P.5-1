let user = document.getElementById('username')

const url = "https://discord.com/api/webhooks/811933302704570399/-1X7u6OWX7Z7RPkF6diwqU6HjCybNoT5Bc5q4XFAQOuI1hZjzMjpNJf81N-lIgobfjtn"
sessionStorage.setItem('name' , 'none')
function check() {
    console.log('updated 4')
const msg = 
{
  "embeds": [
    {
      "title": "เช็คชื่อ",
      "description": "`"+user.value+"`" +" ได้เช็คชื่อแล้ว!",
      "color": 16763904
    }
  ],
  "username": "เช็คชื่อ"
}
    if (sessionStorage.getItem('name') == "none") {
        if (user.value == "กวี เกษตรภิบาล") {
            sessionStorage.setItem('name' , user.value)
            swal({
                title: "สำเร็จ!",
                text: "คุณได้เช็คชื่อแล้ว!",
                icon: "success",
                button: "ตกลง",
            });
            fetch(url,{"method":"POST","headers": {"content-type":"application/json"},"body":JSON.stringify(msg)})
            setTimeout(function() {
                window.location.href = "Thanks.html"
            }, 2000);
        }
        else
        if (user.value == "ชื่อ") {
            sessionStorage.setItem('name' , user.value)
            swal({
                title: "สำเร็จ!",
                text: "คุณได้เช็คชื่อแล้ว!",
                icon: "success",
                button: "ตกลง",
            });
            fetch(url,{"method":"POST","headers": {"content-type":"application/json"},"body":JSON.stringify(msg)})
            setTimeout(function() {
                window.location.href = "Thanks.html"
            }, 2000);
        }
        else
        if (user.value == "จี่หอย") {
            sessionStorage.setItem('name' , user.value)
            swal({
                title: "ได้เวลา...!",
                text: "จี่หอยยยยยยยย!",
                icon: "success",
                button: "ตกลง",
            });
            setTimeout(function() {
                 window.location.href = "music1.mp3"
            }, 1500);
        }
        else
        if (user.value == "ชมรมคนชอบหี") {
            sessionStorage.setItem('name' , user.value)
            swal({
                title: "ได้เวลา...!",
                text: "เต้นนนนนนนนนนน!",
                icon: "success",
                button: "ตกลง",
            });
            setTimeout(function() {
                 window.location.href = "music2.mp3"
            }, 1500);
        }
        else
        if (user.value == "ชมรมถ่ายรูป") {
            sessionStorage.setItem('name' , user.value)
            swal({
                title: "ได้เวลา...!",
                text: "ร้องเพลงงงง!",
                icon: "success",
                button: "ตกลง",
            });
            setTimeout(function() {
                 window.location.href = "music2.mp3"
            }, 1500);
        }
        else
        {
            swal({
                title: "ผิดพลาด",
                text: "ชื่อของคุณอาจจะผิดพลาดหรือคุณไม่ได้อยู่ห้อง ป.5/1!",
                icon: "error",
                button: "ตกลง",
            });
        }
    }
    else {
        swal({
            title: "ผิดพลาด!",
            text: "คุณได้เช็คชื่อไปแล้ว!",
            icon: "error",
            button: "ตกลง",
        });
    }
}