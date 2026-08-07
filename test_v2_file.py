from playwright.sync_api import sync_playwright
import os

out_dir = os.path.abspath("out")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 1000})
    page.goto(f"file://{out_dir}/index.html")
    page.wait_for_timeout(800)
    page.screenshot(path="/home/claude/v2_file_home.png")
    page.click("text=Nosotros")
    page.wait_for_timeout(800)
    print("URL:", page.url)
    page.screenshot(path="/home/claude/v2_file_nosotros.png")
    browser.close()
