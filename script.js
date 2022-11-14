$('#terminal').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what + '. Welcome to this terminal.');
        // this string can be written with ES6 - uncomment to test
        // this.echo(`Hello, ${what}. Wellcome to this terminal.`);
    }, 
    pwd: function(){
        this.echo('/home/ \n You are currently on the home page. To advance, find out where you can go. HINT: command to list all files')
    },
    ls: function(){
        this.echo('home        page1 \npage2       page3 \n these are the files you can go to. \nHINT: go to page 1' )
    },
    cd: function(destination){
        if (destination == "page1") {
            this.echo('nice!!')
        }
    }
}, {
    greetings: 'Dive into the terminal!'
});

