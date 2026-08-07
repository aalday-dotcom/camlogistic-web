from playwright.sync_api import sync_playwright
import os

out_dir = os.path.abspath("out")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 1000})
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    page.on("console", lambda m: errors.append(f"[console {m.type}] {m.text}") if m.type == "error" else None)

    page.goto(f"file://{out_dir}/index.html")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/claude/file_open_home.png")

    # click Nosotros link
    page.click("text=Nosotros")
    page.wait_for_timeout(1000)
    print("URL after click:", page.url)
    page.screenshot(path="/home/claude/file_open_nosotros.png")

    print("ERRORS:", errors)
    browser.close()
