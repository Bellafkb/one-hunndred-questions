import json
import queue

# the file to be converted to
# json format
filename = './free/questions_English.txt'


# dictionary where the lines from
# text will be stored
saucy = list()
family = list()
questions_eng = list()


# creating dictionary
with open(filename) as fh:
    for line in fh:
        # reads each line and trims of extra the spaces
        # and gives only the valid words
        description = line.strip()
        questions_eng.append(description)
        if "*" in description:
            saucy.append(description)
        else:
            family.append(description)

# creating json file
# the JSON file is named as test1
family_out = open("family_eng.json", "w")
saucy_out = open("saucy_eng.json", "w")
questions_eng_out = open("questions_eng.json", "w")

json.dump(family, family_out, indent=4, sort_keys=False)
json.dump(saucy, saucy_out, indent=4, sort_keys=False)
json.dump(questions_eng, questions_eng_out, indent=4, sort_keys=False)

family_out.close()
saucy_out.close()
questions_eng_out.close()
