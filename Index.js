let user = document.getElementById('username')
sessionStorage.setItem('name' , 'none')
function check() {
    if (sessionStorage.getItem('name') == "none") {
        if (user.value == "กวี เกษตรภิบาล") {
            sessionStorage.setItem('name' , user.value)
            swal({
                title: "สำเร็จ!",
                text: "คุณได้เช็คชื่อแล้ว!",
                icon: "success",
                button: "ตกลง",
            });
            setTimeout(function() {
                window.location.href = "Thanks.html"
            }, 2000);
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