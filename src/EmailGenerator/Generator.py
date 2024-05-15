import sys

argv = sys.argv
filename, id, name, email, info, instructions = argv
text = instructions[:]
text = text.replace("{name}", name)
text = text.replace("{email}", email)
text = text.replace("{info}", info)
print([id, text])