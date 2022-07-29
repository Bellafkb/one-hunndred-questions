import json


# the file to be converted to
# json format
filename = 'free/questions_English.txt'




# dictionary where the lines from
# text will be stored
saucy = list()
family = list()
questions = list()


# creating dictionary
with open(filename) as fh:

        for index,line in enumerate(fh):
            # reads each line and trims of extra the spaces
            # and gives only the valid words
            description = line.strip()
            item={"english":description.replace("*", "")}
            
            if "*" in description:
                saucy.append(item)
            else:
                family.append(item)

# creating json file
# the JSON file is named as test1
family_out = open("family.json", "w")
saucy_out = open("saucy.json", "w")

json.dump(family, family_out, indent=4, sort_keys=False)
json.dump(saucy, saucy_out, indent=4, sort_keys=False)

family_out.close()
saucy_out.close()
