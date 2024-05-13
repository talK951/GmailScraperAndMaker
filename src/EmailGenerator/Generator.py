import sys

argv = sys.argv
id, name, email, info, instructions = argv

text = instructions[:]

instructions.replace("\{name\}", name)
instructions.replace("\{email\}", email)
instructions.replace("\{info\}", info)

print([id, text])