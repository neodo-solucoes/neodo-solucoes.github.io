from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json
root=Path(__file__).resolve().parents[1]
pages=json.loads((root/"src/pages.json").read_text(encoding="utf-8"))
errors=[]
class Check(HTMLParser):
    def __init__(self,page):
        super().__init__()
        self.page=page
        self.ids=set()
        self.h1=0
        self.titles=0
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=="h1":self.h1+=1
        if tag=="title":self.titles+=1
        if a.get("id"):
            if a["id"] in self.ids:errors.append(f"{self.page}: ID repetido {a['id']}")
            self.ids.add(a["id"])
        if tag=="img" and "alt" not in a:errors.append(f"{self.page}: imagem sem alt")
        for k in ("href","src"):
            if not a.get(k):continue
            u=urlsplit(a[k])
            if u.scheme or u.netloc or not u.path:continue
            if not (root/unquote(u.path.lstrip("/"))).exists():errors.append(f"{self.page}: recurso ausente {a[k]}")
for p in pages:
    c=Check(p)
    c.feed((root/p).read_text(encoding="utf-8"))
    if c.h1!=1 or c.titles!=1 or "conteudo" not in c.ids:errors.append(f"{p}: estrutura inválida")
if errors:raise SystemExit("\n".join(errors))
print(f"{len(pages)} páginas verificadas.")
