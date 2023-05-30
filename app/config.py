import os
print(os.environ.get('DATABASE_URL'))

class Config:
    SECRET_KEY = 'lkasjdf09ajsdkfljalsiorj12n3490re9485309irefvn,u90818734902139489230'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:QHIZD5X2lfJ43046YMQj@containers-us-west-66.railway.app:5809/railway'
    SQLALCHEMY_ECHO = True