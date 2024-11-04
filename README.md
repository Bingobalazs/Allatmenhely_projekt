# Állatmenhely

## Tulajdonságok

eletkor: int

nem: CSAK h / n (hím/nőstény)

chipszam: 16 pontosan

bekerules ideje: éééé-hh-nn

kutyamacska: CSAK k/m (kutya / macska)

## API-k

### Feltöltés GET
#### Minta:
  balgalazs.moriczcloud.hu/allat/beir/{nev}/{eletkor}/{fajta}/{szin}/{nem}/{oltas}/{chipszam}/{bekerulesideje}/{kutyamacska}
#### demo:
  https://balgalazs.moriczcloud.hu/allat/beir/3/Fido/3/Labrador/blue/h/veszett/1234567890123456/2024-01-01/k

### Módosítás PUT
#### Minta:
  balgalazs.moriczcloud.hu/allat/modosit/{nev}/{eletkor}/{fajta}/{szin}/{nem}/{oltas}/{chipszam}/{bekerulesideje}/{kutyamacska}
#### demo:
  https://balgalazs.moriczcloud.hu/allat/modosit/3/Fido/3/Labrador/blue/h/veszett/1234567890123456/2024-01-01/k

### Összes lekérdezése
https://balgalazs.moriczcloud.hu/allat/mind
