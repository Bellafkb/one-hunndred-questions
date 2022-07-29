import json


# the file to be converted to
# json format
filename = 'questionpack2_english.txt'
filename_german = 'questionpack2_german.txt'





# dictionary where the lines from
# text will be stored
saucy = list()
family = list()
questions = list()
# creating dictionary
with open(filename) as fh:
    with open(filename_german) as fh_ger:

        for line in fh:
            # reads each line and trims of extra the spaces
            # and gives only the valid words
            description = line.strip()
            item={"english":description.replace("*", ""), "category": "SAUCY" if "*" in description else "FRIENDLY", "tag": "qp2"}
            
            questions.append(item)

        for index,line in enumerate(fh_ger):
                # reads each line and trims of extra the spaces
            # and gives only the valid words
            print(index)
            try:
                description = line.strip()
                questions[index]["german"]= description.replace("*", "")
                  
            except :
                pass
            

# creating json file
# the JSON file is named as test1
questions_out = open("questions.json", "w")


json.dump(questions, questions_out, indent=4, sort_keys=False)

questions_out.close()

