import json

import csv

# from datetime import datetime, timedelta
# from email.utils import parsedate_tz

# s = 'Tue Mar 29 08:11:25 +0000 2011'
  
from datetime import datetime, timedelta
from email.utils import parsedate_tz

def to_datetime(datestring):
    time_tuple = parsedate_tz(datestring.strip())
    dt = datetime(*time_tuple[:6])
    return dt - timedelta(seconds=time_tuple[-1])

def format(row):
    ret = row
    ret['created_at'] = to_datetime(row['created_at'])
    return ret

with open('newtrumpData.json') as f:
    data = json.load(f)

# {date: [tweets], etc.}
#  datetime.strptime('Thu Apr 23 13:38:19 +0000 2009','%a %b %d %H:%M:%S +0000 %Y').replace(tzinfo=pytz.UTC)
keyData = {}
for datum in data:
    date = datum['created_at'].encode('ascii', 'ignore')
    text = datum['text'].encode('ascii', 'ignore')
   

    # md = date[0:10]
    y = date[26:30]

    m = date[4:7]

    d = date[8:10]; 

    np = "00"
    if m=="Jan":
        np = "01"
    elif m == "Feb":
        np = "02"
    elif m == "Mar":
        np = "03"
    elif m == "Apr":
        np = "04"
    elif m == "May":
        np = "05"
    elif m == "Jun":
        np = "06"
    elif m == "Jul":
        np = "07"
    elif m == "Aug":
        np = "08"
    elif m == "Sep":
        np = "09"
    elif m == "Oct":
        np = "10"
    elif m == "Nov":
        np = "11"
    elif m == "Dec":
        np = "12"
 
    fdate = y + '-' + np + '-' + d

    if fdate in keyData:
        keyData[fdate].append(text)
    else:
        keyData[fdate] = []
        keyData[fdate].append(text)

# [{date: "", tweets: []}, etc.]
organized = []
for key in keyData:
    organized.append({'date': key, 'tweets': keyData[key]})



#nfieldnames = ("text", "created_at")
jsonfileT = open('formattedTrump.json', 'w')
#reader = json.DictReader(jsonfile, fieldnames)
outT = json.dumps([row for row in organized])
jsonfileT.write(outT)


csvfile = open('SP500.csv', 'r')
jsonfile = open('SP500.json', 'w')
fieldnames = ("DATE","SP500")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)

csvfile = open('DCOILWTICO.csv', 'r')
jsonfile = open('DCOILWTICO.json', 'w')
fieldnames = ("DATE","Crude Oil")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)

csvfile = open('VIXCLS.csv', 'r')
jsonfile = open('VIXCLS.json', 'w')
fieldnames = ("DATE","CBOE Volatility Index")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)

csvfile = open('NASDAQCOM.csv', 'r')
jsonfile = open('NASDAQCOM.json', 'w')
fieldnames = ("DATE","NASDAQ")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)


csvfile = open('DJIA.csv', 'r')
jsonfile = open('DJIA.json', 'w')
fieldnames = ("DATE","DJIA")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)


csvfile = open('DGS10.csv', 'r')
jsonfile = open('DGS10.json', 'w')
fieldnames = ("DATE","10-Yr Treasury Rate")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)

csvfile = open('DEXUSEU.csv', 'r')
jsonfile = open('DEXUSEU.json', 'w')
fieldnames = ("DATE","US/Euro Exchange Rate")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)

csvfile = open('DEXCHUS.csv', 'r')
jsonfile = open('DEXCHUS.json', 'w')
fieldnames = ("DATE","Yuan/US Exchange Rate")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)

csvfile = open('DEXJPUS.csv', 'r')
jsonfile = open('DEXJPUS.json', 'w')
fieldnames = ("DATE","Yen/US Exchange Rate")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)








