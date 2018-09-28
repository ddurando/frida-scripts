# frida-scripts
this repo contains some [FRIDA](https://www.frida.re/) scripts I use for Android RE

the scripts are started by either attaching them to a running process with the `conn_pid.py` script:
```
$ python conn_pid.py <script-name> <pid_number>
```
or by attaching them at startup when launching the appby package name with the `conn_startup.py`:
```
$ python conn_startup.py <script-name> <package_name>
```
