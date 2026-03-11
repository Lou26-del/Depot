from passlib.hash import argon2

def hash_password(password: str) -> str:
    return argon2.hash(password)

def check_password(password: str, hashed: str) -> bool:
    return argon2.verify(password, hashed)

#check_password(password, hashed) → 
# prend le mot de passe en clair et le hash stocké, et renvoie True si ça correspond.
