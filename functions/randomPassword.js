


function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var i = 0; i < length; i++) {
    var y = Math.floor(Math.random()*chars.length)
        pass += chars[y];
    }
        return pass;
}

        console.log(randomPassword(10)) 
