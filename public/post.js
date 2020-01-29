$(function () {
    var socket = io.connect('http://10.182.35.176:300');
    const log = console.log

    

    var editor = $('#editor');
    var bla = $('#bla');
    var blaa = $('#parsData');
    var post = $('#postt');
    var buttoon = $('#buttoon')
    var postname = $('#postName');
    var findButton = $('#findbutton');
    var findtext = $('#find');

    var updateWebsite = $('#updateWebsite');
    
    
    
    buttoon.click(function() {
        socket.emit('green', {message : postname.val()});
        console.log('emited button to sever ')
    });

    updateWebsite.click(function() {
        socket.emit('loadjson');
        console.log("websiteupdated");
    })

    socket.on('green', (data) => {
        console.log(data); 

      

        post.append("<div name='divv"+ data.length + "' id='divv" + data.length + "' style='background-color: green; width: 200px; padding: 10px; margin-left:65px; margin-top: 30px; float:left;'> </div>")
            $('#divv'+i).mouseover(function() {
                $(this).css("background-color", "red");
            }).mouseout(function() {
                $(this).css("background-color", "green");
            });
            $('#divv'+i).append("<p id='message' name='message' style='margin-left: 50px; '>" + data.message + "</p>");
            $('#divv'+i).append("<img src='" + data.filename + "'" + "alt='Smiley face' height='64' width='64' id='pic' name='pic' style='margin-left: 50px;' >");
            $('#divv' + i).append("<p id='message' name='message' style='margin-left: 50 px;'>" + data.idnumber + "</p>");
            
    });

    socket.on("loadjson" , (data) => {

        console.log(data);
        console.log(data.message.length);
        for(var i = 0; i < data.message.length; i++) {
            console.log(data.message[i]);
            var blue = "'#0F0'";
            post.append("<div name='divv" + i + "' id='divv" + i + "' style='background-color: green; width: 200px; padding: 10px; margin-left:65px; margin-top: 30px; float:left;'> </div>")
            $('#divv'+i).mouseover(function() {
                $(this).css("background-color", "red");
            }).mouseout(function() {
                $(this).css("background-color", "green");
            });
            $('#divv'+i).append("<p id='message' name='message' style='margin-left: 50px; '>" + data.message[i].text + "</p>");
            $('#divv'+i).append("<img src='" + data.message[i].courseData + "'" + "alt='Smiley face' height='64' width='64' id='pic' name='pic' style='margin-left: 50px;' >");
            $('#divv' + i).append("<p id='message' name='message' style='margin-left: 50 px;'>" + data.message[i].id + "</p>");
            
        }

    });
    
    findButton.click(function() {
        socket.emit('findbutton', {message : findtext.val()});
        console.log("findbutton was pressed");
    })

    socket.on('findbutton', (data) =>{
        console.log("was pressed");
    });
    





});
