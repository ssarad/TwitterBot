# TwitterBot
A script that can tweet back to users

# Guide

NOTE: It is recommended to install Node.js. You can also install "forever" to run the script 24/7.

Download NodeJS ---> https://nodejs.org/en

Fill in the credentials (secret token, API token and stuff) and then enter this in the command line.

```
node tweet.js
```
-> To use forever-npm

```
 $ sudo npm install forever -g
 $ forever start tweet.js 
```
 # Help - > forever-npm
 ```
 $ forever --help
  usage: forever [action] [options] SCRIPT [script-options]

  Monitors the script specified in the current process or as a daemon

  actions:
    start               Start SCRIPT as a daemon
    stop                Stop the daemon SCRIPT by Id|Uid|Pid|Index|Script
    stopall             Stop all running forever scripts
    restart             Restart the daemon SCRIPT
    restartall          Restart all running forever scripts
    list                List all running forever scripts
    config              Lists all forever user configuration
    set <key> <val>     Sets the specified forever config <key>
    clear <key>         Clears the specified forever config <key>
    logs                Lists log files for all forever processes
    logs <script|index> Tails the logs for <script|index>
    columns add <col>   Adds the specified column to the output in `forever list`
    columns rm <col>    Removed the specified column from the output in `forever list`
    columns set <cols>  Set all columns for the output in `forever list`
    cleanlogs           [CAREFUL] Deletes all historical forever log files

  options:
    -m  MAX          Only run the specified script MAX times
    -l  LOGFILE      Logs the forever output to LOGFILE
    -o  OUTFILE      Logs stdout from child script to OUTFILE
    -e  ERRFILE      Logs stderr from child script to ERRFILE
    -p  PATH         Base path for all forever related files (pid files, etc.)
    -c  COMMAND      COMMAND to execute (defaults to node)
    -a, --append     Append logs
    -f, --fifo       Stream logs to stdout
    -n, --number     Number of log lines to print
    --pidFile        The pid file
    --uid            DEPRECATED. Process uid, useful as a namespace for processes (must wrap in a string)
                     e.g. forever start --uid "production" app.js
                         forever stop production
    --id             DEPRECATED. Process id, similar to uid, useful as a namespace for processes (must wrap in a string)
                     e.g. forever start --id "test" app.js
                         forever stop test
    --sourceDir      The source directory for which SCRIPT is relative to
    --workingDir     The working directory in which SCRIPT will execute
    --minUptime      Minimum uptime (millis) for a script to not be considered "spinning"
    --spinSleepTime  Time to wait (millis) between launches of a spinning script.
    --colors         --no-colors will disable output coloring
    --plain          Disable command line colors
    -d, --debug      Forces forever to log debug output
    -v, --verbose    Turns on the verbose messages from Forever
    -s, --silent     Run the child script silencing stdout and stderr
    -w, --watch      Watch for file changes
    --watchDirectory Top-level directory to watch from
    --watchIgnore    To ignore pattern when watch is enabled (multiple option is allowed)
    -t, --killTree   Kills the entire child process tree on `stop`
    --killSignal     Support exit signal customization (default is SIGKILL),
                     used for restarting script gracefully e.g. --killSignal=SIGTERM
    -h, --help       You're staring at it

  [Long Running Process]
    The forever process will continue to run outputting log messages to the console.
    ex. forever -o out.log -e err.log my-script.js

  [Daemon]
    The forever process will run as a daemon which will make the target process start
    in the background. This is extremely useful for remote starting simple node.js scripts
    without using nohup. It is recommended to run start with -o -l, & -e.
    ex. forever start -l forever.log -o out.log -e err.log my-daemon.js
        forever stop my-daemon.js
 ```
