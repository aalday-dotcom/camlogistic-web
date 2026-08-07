import os, re

OUT = "out"

for root, dirs, files in os.walk(OUT):
    for fname in files:
        if not fname.endswith(".html"):
            continue
        fpath = os.path.join(root, fname)
        rel_dir = os.path.relpath(root, OUT)
        depth = 0 if rel_dir == "." else rel_dir.count(os.sep) + 1
        prefix = "../" * depth

        with open(fpath, "r", encoding="utf-8") as f:
            html = f.read()

        # Fix _next asset references
        html = html.replace('"/_next/', f'"{prefix}_next/')
        # Fix favicon / svg root assets
        for asset in ["favicon.ico", "file.svg", "globe.svg", "next.svg", "vercel.svg", "window.svg"]:
            html = html.replace(f'"/{asset}', f'"{prefix}{asset}')
        # Fix /images/ references (photos, logo)
        html = html.replace('"/images/', f'"{prefix}images/')

        # Fix internal page links (href="/xxx/" -> prefix + xxx/index.html)
        def link_repl(m):
            path = m.group(1)
            if path == "/":
                target = prefix + "index.html"
            else:
                clean = path.strip("/")
                # handle possible hash fragment like transportistas#postular already stripped by trailingSlash normalization
                target = prefix + clean + "/index.html"
            return f'href="{target}"'

        html = re.sub(r'href="(/(?:nosotros|servicios|empresas|transportistas|contacto)?/?)"', link_repl, html)

        # Fix links with hash fragments, e.g. /transportistas/#postular
        def link_hash_repl(m):
            path = m.group(1)
            frag = m.group(2)
            clean = path.strip("/")
            target = prefix + clean + "/index.html" + frag
            return f'href="{target}"'

        html = re.sub(
            r'href="(/(?:nosotros|servicios|empresas|transportistas|contacto)/?)(#[a-zA-Z0-9_-]+)"',
            link_hash_repl,
            html,
        )

        with open(fpath, "w", encoding="utf-8") as f:
            f.write(html)

print("done")
