import requests, json

lines = requests.get("https://lichess.org/api/tv/feed", stream=True).iter_lines()
lines2 = requests.get("https://lichess.org/api/tv/feed", stream=True).iter_lines()

for line in lines:
    print(line)

for i in line2:
    print("zzz")