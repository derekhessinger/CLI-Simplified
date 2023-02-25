let directory = ""; 
let file = ""; 

$('#terminal').terminal({
    pwd: function(){
        this.echo('/home/ \n You are currently on the home page. Next step: where to? HINT: command to list all files')
    },
    ls: function(){
        this.echo('home        page1 \npage2       page3 \nThese are the files you can go to. \nHINT: go to page 1' )
    },
    cd: function(destination){
        if (destination == "page1") {
            this.exec(window.location.href="/page1.html")
        }
        else if (destination == "home") {
            this.exec(window.location.href="/main.html")
        }
        else{
            this.echo("Sorry - for the purposes of this demo please type cd page1")
        }
    },
    mkdir: function(name){
        directory = name
        if(directory){
            this.echo("New directory "  + file + " made!")
        }

    },
    rmdir: function(remove){
        if (remove == directory){
            this.echo("You successfully removed the file!")
        }
        else{
            this.echo("ERROR: No such file exists. Did you misspell the directory you wanted to delete?")
        }
    },
    touch: function(name){
        file = name
        if(file){
            this.echo("New file "  + file + " made!")
        }

    },
    rm: function(remove){
        if (remove == file){
            this.echo("You successfully removed the file!")
        }
        else{
            this.echo("ERROR: No such file exists. Did you misspell the file you wanted to delete?")
        }
    }
}, {
    greetings: 'Dive into the terminal!'
});

