import requests
import time

proches_name = ["Le Zgaa", "snowreal", "Guillaume Winshester", "DEX", "Kops", "Uryuka"]
proches_co = []

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
        proches_co.append(i["name"])


    time.sleep(0.02)
    print("🎮 " + "Joueur " + str(counter) + ": " + i["name"])

print("❤️ Proches connectés : " + str(len(proches_co)))
for i in proches_co:
    print(i)
