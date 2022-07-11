import json

# the file to be converted to
# json format
filename = 'questions_English.txt'


# dictionary where the lines from
# text will be stored
saucy = list()
family = list()
# creating dictionary
with open(filename) as fh:
    for line in fh:
        # reads each line and trims of extra the spaces
        # and gives only the valid words
        description = line.strip()

        if "*" in description:
            saucy.append(description)
        else:
            family.append(description)

# creating json file
# the JSON file is named as test1
family_out = open("family_eng.json", "w")
saucy_out = open("saucy_eng.json", "w")
json.dump(family, family_out, indent=4, sort_keys=False)
json.dump(saucy, saucy_out, indent=4, sort_keys=False)
family_out.close()
saucy_out.close()