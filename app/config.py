import os
print(os.environ.get('DATABASE_URL'))

class Config:
    SECRET_KEY = #enter key
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = #enter uri
    SQLALCHEMY_ECHO = True