from pathlib import Path
import json, html, re
root=Path(__file__).resolve().parents[1]
src=root/"src"
read=lambda p:p.read_text(encoding="utf-8").rstrip("\n")
template=read(src/"layout.html")
header=read(src/"header.html")
footer=read(src/"footer.html")
pages=json.loads(read(src/"pages.json"))
for f,x in pages.items():
    h=re.sub(r"\{\{ACTIVE:([^}]+)\}\}",lambda m:' aria-current="page"' if m.group(1)==f or (m.group(1)=="solucoes.html" and f in ("industria.html","residencial.html","negocios.html")) else "",header)
    values={"TITLE":html.escape(x["title"],quote=True),"DESCRIPTION":html.escape(x["desc"],quote=True),"SEO":x["seo"],"HEADER":h,"BODY":read(src/"pages"/f),"FOOTER":footer}
    (root/f).write_text(re.sub(r"\{\{(TITLE|DESCRIPTION|SEO|HEADER|BODY|FOOTER)\}\}",lambda m:values[m.group(1)],template)+"\n",encoding="utf-8")
(root/"_not-found.html").write_text(read(root/"404.html")+"\n",encoding="utf-8")
