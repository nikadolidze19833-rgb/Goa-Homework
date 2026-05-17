#1 enter name in standard format
name = input("Enter your name: ")
print(name.capitalize())

#2check email (".com")
email = input("Enter your email: ")
print(email.endswith(".com"))

#3 extra space removal
password = input("Enter your password: ")
print(password.strip())

#4 replace text
text = "i don't like school"
print(text.replace("don't", "do"))