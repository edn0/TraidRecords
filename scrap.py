import requests
import time
import json
import sys, getopt
import os


proches_name = {
    "Guillaume Winshester":"Guigui",
    "edno":"Moi",
    "Le Zgaa":"Zga",
    "DEX":"Dex",
    "Kops":"Diego",
    "Uryuka":"Danzo",
    "laucl":"Georges",
    "[Sécurité Triad Records] Kenzy":"Kenzy",
    "Evan Balaz":"Evan"
    }

proches_co = [] # list qui reçoit les noms personnalisés des collègues

employees = {
    "Guillaume Winshester":False,
    "Camelia":False,
    "DEX":False,
    "edno":False,
    "Kops":False,
    "laucl":False,
    "[Sécurité Triad Records] Kenzy":False,
    "Evan Balaz":False
}

headers = {
    'authority': 'servers-frontend.fivem.net',
    'accept': '*/*',
    'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    'origin': 'https://shop.unityrp.io',
    'referer': 'https://shop.unityrp.io/',
    'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
}

response = requests.get('https://servers-frontend.fivem.net/api/servers/single/q8538p', headers=headers)


data = response.json()


counter = 0
for i in data["Data"]["players"]:
    counter = counter + 1

# check if name is in list
    if any(i["name"] == c for c in proches_name):
        print("YOOOOOOOOOOOOOOOOOOOOOOOOOO")
        proches_co.append(proches_name[i["name"]])
        employees[i["name"]] = True # sets the employee status to online

    # time.sleep(0.02)
    print(f"🎮 Joueur {str(counter)} : {i['name']}")



def write_to_json(employees):
    
    with open("proches.json", "r+") as f:
        f.truncate(0)
    with open("proches.json", "w") as file:
        json.dump(employees, file)

write_to_json(employees)



def check_arguments(argv):

    opts, args = getopt.getopt(argv,":s")

    for opt, arg in opts:
        if opt == "-s":
            print("Le contenu sera envoyé sur GitHub.")
                        
            os.system("git status")
            os.system("git add proches.json")
            os.system("git status")
            os.system("git commit -m 'majauto")
            os.system("git push origin main")


check_arguments(sys.argv[1:])

print("")
print("")
print("❤️ Proches connectés : " + str(len(proches_co)))

for i in proches_co:
    print(i)