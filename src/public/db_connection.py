# installer mysql-connector-python

# Connexion à la base MySQL
import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="phishing_db"
    )