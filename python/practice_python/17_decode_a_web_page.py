# http://www.practicepython.org/exercise/2014/06/06/17-decode-a-web-page.html

"""
Use the BeautifulSoup and requests Python packages to print out a list of
all the article titles on the New York Times homepage.
"""

from bs4 import BeautifulSoup
import requests

webpage = requests.get("http://www.nytimes.com/")
contents = webpage.text
soup = BeautifulSoup(contents, "html.parser")

all_h2s = soup.find_all("h2", { "class": "story-heading" })
all_titles = []

for i in all_h2s:
  if i.a:
    all_titles.append(i.a.text)
  else:
    all_titles.append(i.text)

for i in all_titles:
  print i.strip()
