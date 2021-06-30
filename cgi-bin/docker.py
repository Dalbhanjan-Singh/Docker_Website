#!/usr/bin/python3

print("context-type: text/html")
print()

import cgi
import subprocess

f = cgi.FieldStorage()
cmd = f.getvalue("in1")

o = subprocess.getstatusoutput("sudo " + cmd)

status = o[0]
out = o[1]

print(out)
