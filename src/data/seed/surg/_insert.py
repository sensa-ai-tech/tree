import re
FILE="C:/project/vet-knowledge-tree/src/data/seed/surg/questions.ts"
DATA="C:/project/vet-knowledge-tree/src/data/seed/surg/_data.txt"
with open(DATA,"r",encoding="utf-8") as f: new_q=f.read()
with open(FILE,"r",encoding="utf-8") as f: content=f.read()
idx=content.rfind("];")
assert idx!=-1
content=content[:idx]+new_q+content[idx:]
with open(FILE,"w",encoding="utf-8") as f: f.write(content)
count=len(re.findall(r"id: .Q-SURG",content))
print(f"Done. Total: {count}")
