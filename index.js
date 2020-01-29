var express = require('express'),
app = express(); 
//http = require("http").Server(app).listen(300); 
upload = require("express-fileupload");
const fs = require('fs');
const server = app.listen(300); 
const io = require('socket.io')(server);

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(upload())
app.get('/admin/', function(req, res) {
    res.render('index');
});
app.get('/', function (req, res) {
    res.render('indexx');
});
app.get('/adminn', function (req, res) {
   res.render('index');
});


console.log('sever started')



let array = {};


function jsonSener(filename, name, Text, id) {

    
    

   //fs.readFile('paths.json', 'utf8', function readFileCallback(err, data) {
   //     let obj = {
   //         table: []
   //     };
   //     if(err) {
   //         console.log("did not write to json")
   //     }else{
   //        obj = JSON.parse(data);
   //         obj.table.push({name: map});
   //         json = JSON.stringify(obj);
   //         console.log(paths);
   //         fs.writeFile('paths.json', json, 'utf8', fin());
   //     }
   // });


    var data = fs.readFileSync('paths.json');
    
    


    //paths = JSON.parse(data);
    //pathss = JSON.parse(data);
    //data.word = "name: "; 
    //data.name = "NOX"
    //var dd = JSON.stringify(paths)
    //var word = data.word;
    //var name = data.name;
    //paths[word] = map;
    //pathss[word] = "fuck";
    
    //var dataa = JSON.stringify(paths); 

    //console.log(paths);


    
    var parseryes = true;
    let requestBody = "";
    let savedMaps = JSON.parse(data);


    for(var i = 0; i < savedMaps.length; i++) {
        if(savedMaps[i].courseData == filename) {
            console.log("that video is allread on the server");
            parseryes = false;

        }   
    }


    if(parseryes == true) {
        // Create dictionary for putting the new map in
        let mapData = {};

        // Set parameters
        mapData.name = name;
        mapData.text = Text;
        mapData.id = id;
        // Generate and set a unique id for the new course
        mapData.courseData = filename;


        // Add new map to saved maps
        savedMaps.push(mapData);


        fs.writeFile('paths.json', JSON.stringify(savedMaps), fin);
    }
    else{
        return;
    }
   

    

}
function readjson(jsonFile) {
    var data = fs.readFileSync(jsonFile);
    var info = JSON.parse(info);

    return info;
}

function find(id) {
    var data = fs.readFileSync('paths.json');
    let savedMaps = JSON.parse(data);
    let sw = false;
    // iterate over each element in the array
    for (var i = 0; i < savedMaps.length; i++){
    // look for the entry with a matching `code` value
        if (savedMaps[i].id == id){
            console.log(savedMaps[i]);
            savedMaps.splice(i, 1);
            fs.writeFileSync('paths.json', JSON.stringify(savedMaps), fin);
            sw = true;
        }
    }
    return sw;

}


function postt(json) {

    

}
function findFile(url) {



}

function loadJson() {
    

    return savedMaps;



}


function hello(filee, message, id) {
    io.sockets.emit('green', {
        message: message,
        filename: filee, 
        idnumber : id
    });
}
function load(data) {
    

}

function file(filename) {
    return filename;
}
function fin() {
    console.log("is done");
}



    io.on("connection", (socket) => {
        console.log('A new user just connceted to the website');
        var data = fs.readFileSync('paths.json');
        let savedMaps = JSON.parse(data);
        
        

        socket.emit('loadjson', {

            message: savedMaps

        });
        
        socket.on('findbutton', (data) => {
            console.log(find(data.message));
            if(find(data.message) == true) {
                console.log("passed");
                find(data.message);
                
            }else {
                console.log("did not fucking work");
            }

        });



        socket.on('green', (data)  => {
            console.log('button was pressed')
            function generateID() {
    
                return Math.floor((Math.random() * 900000) + 100000);
            }


            app.post("/", function (req, res) {
                if (req.files) {
                    var file = req.files.filename,
                        filename = file.name;

                    var postt = req.body.nameee
                    var Text = req.body.Text;
                    var id = generateID(); 
                    

                    file.mv("./public/" + filename, function (err) {
                        if (err) {
                            console.log(err);
                            res.send("error occured");
                        } else {
                            //postt(res);
                            res.render('index')
                            console.log(Text);
                            jsonSener(filename, postt, Text, id);
                            hello(filename, data.message, id);
                            
                        }
                    })
                }

            })





            

    })

    
    })




io.on('disconnect', function(socket) {
    console.log('user just disconnected from the website');
})
