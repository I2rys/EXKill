//Main
require("child_process").exec("tasklist", function(err, stdout, stderr){
    if(err){ process.exit() }

    const explorer_pid = stdout.slice(stdout.indexOf("explorer.exe")+30, stdout.indexOf("explorer.exe")+34)

    require("child_process").execSync(`taskkill /F /PID ${explorer_pid}`)
})
