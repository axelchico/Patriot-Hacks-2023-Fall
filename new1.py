from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import requests

url = 'https://www.gmu.edu/calendar?trumbaEmbed=view%3Devent%26eventid%3D980283731'

driver = webdriver.Firefox()

response = driver.get(url)

events_list = []
try:
    # Wait for some time to allow JavaScript to load content (adjust as needed)
    driver.implicitly_wait(20)
    divs_with_class = driver.find_elements(By.CSS_SELECTOR, 'div.p-5.flex.flex-col.rounded-lg.bg-secondary.transition-all.hover\\:shadow-2xl.hover\\:bg-gray-800')

    page_source = driver.page_source
    soup = BeautifulSoup(page_source, 'html.parser')
    print(soup)
    f = open("demofile.txt", "w")
    f.write(soup.text)
    f.close()
    events_list = soup.find("span", class_="twEDDescription")

finally:
    # Close the WebDriver
    driver.quit()