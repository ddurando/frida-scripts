# frida-scripts
this repo contains some [FRIDA](https://www.frida.re/) scripts I use for Android RE

the scripts are started by either attaching them to a running process with the `dropper_pid.py` script:
```
$ python dropper_pid.py <script-name> <pid_number>
```
or by attaching them at startup when launching the appby package name with the `dropper_startup.py`:
```
$ python dropper_startup.py <script-name> <package_name>
```
