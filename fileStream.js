var fs = require("fs");

fs.readFile("dosya1.txt", function(error, data){
    if (error){
        throw error;
    }
    console.log(data.toString())
});

fs.writeFile("dosya2.txt", "Espana - Madrid", function(error){
    if (error){
        throw error;
    }
    console.log("Succesful")
});

fs.appendFile("dosya2.txt", "\nEngland - London", function(error){
    if (error){
        throw error;
    }
    console.log("Successful")
});

fs.unlink("dosya3.txt", function(error){
    if (error){
        throw error;
    }
    console.log("Deleted")
});
