---
layout: post
title: "Commands to get System Information in Linux"
modified: 2014-10-28 12:11:06 +0000
tags: [commands]
image:
  feature:
  credit:
  creditlink:
comments:
share:
---

If you want information about your system on linux, then these commands will help a lot.

### pwd
This command is short for ‘print working directory’, which is exactly what it does.

### ctrl-l
clear your terminal screen

### curl ifconfig.me
To find your external IP address

### > file.txt
Auto-empty any file without removing it

### sudo !!
Also if you want to open some file to make changes and right when you want to save it, you realise that you forgot to open it as root, there is nothing to worry. The command above is your solution.

### hostname
The machine that is currently being worked on is known as the local host. The command ‘netconf’ can be used to change the name of the local host and ‘hostname’ is used to print the local host’s name.

### whoami
As the name suggests, this command prints the user’s login name.

### id username
Unlike the above command, this one prints the user id of the user along with his group id, effective id and all the supplementary groups that are involved.

### date
This command can be used for both printing and changing the date and time of the operating system.

### time
The amount of time that a particular process is allowed to take can be changed using this command. It’s different from the date command.

### who
This command tells the user who all are logged into the machine.

### rwho -a
This is the same as the above, but it tells you the users that are logged into the network. In order for this to run, the rwho service has to be enabled.

### last
This one gives a list of users that were last logged in to the system that you are using.

### history | more
As the name suggests, the history command shows the previous commands that had been executed on the account that you are on.
The | more is used to make the display stop whenever the screen is full.

### uptime
This command gives you the time elapsed after the last reboot.

### ps
The print status command lists the processes that are being run on the system by the user.

### ps aux | more
This lists all the processes that are running.

### top
This command keeps on listing the processes that are running currently.

### uname -a
This command stands for Unix name with option ‘all’. It displays all the information about your local server.

### free
This gives information about available memory, which is displayed in kilo bytes.

### df -h
This one gives information about the file systems in a form that is understandable outside the machine.

### du / -bh | more
This command starts at the root level and prints the disk usage information for each subdirectory available.

### cat /proc/cpuinfo
There is a file called cpuinfo and this command shows the content in it.

### cat /proc/version
This command will tell you the Linux version that you are using and then some other information as well.

### cat /proc/filesystems
This command is responsible for showing the type of file systems, which are being used currently.

### cat /etc/printcap
This command can be used to see the printer setup.
