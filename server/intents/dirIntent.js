//dir intent
//call a child process to execute a command, and once complete return the output to the slack client.

const { spawn } = require('child_process');

module.exports.process = function process(intentData, cb) {

    //exec cmd
    const ls = spawn('ls', ['-lh', '/usr']);

        
    //event handler for exec cmd
    ls.stdout.on('data', data => {
        cb(false,`stdout: ${data}`);
    });

    //error event handler for exec cmd
    ls.stderr.on('data', data => {
        cb(`stderr: ${data}`);
    });

    //close event handler for exec cmd
    ls.on('close', code => {
        console.log(`DIR intent, child process exited with code ${code}`);
    });

    //callback, informing slack client the command is running, output to follow after.
    return cb(false, ("Requesting DIR output @ " + startTime() + ""));


};

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    return ( h + ":" + m + ":" + s );
   /*  t = setTimeout(function () {
        startTime()
     }, 500);
     */
}
