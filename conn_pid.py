import frida
import sys

scriptname = sys.argv[1]
pid = sys.argv[2]
with open(scriptname, "r") as f:
	script_content = f.read()

def on_message(message, data):
	print(message)

device = frida.get_usb_device(1)
session = device.attach(int(pid))
script = session.create_script(script_content)
script.on('message', on_message)
script.load()
sys.stdin.read()    