positive = 0
negative = 0
numbers = [10, -5, 3, -2, 0, 7, -1]
for num in numbers:
    if num > 0:
        positive += 1
    elif num < 0:
        negative += 1
print("Positive numbers:", positive)
print("Negative numbers:", negative)






#ლუწი რიცხვების ჯამი
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_sum = 0
for num in numbers:
    if num % 2 == 0:
        even_sum += num
print("ლუწი რიცხვების ჯამი:", even_sum)



# guess the number game
secret_number = 22
guess = int(input("Guess the secret number: "))
while guess != secret_number:
    if guess < secret_number:
        print("Too low!")
    else:
        print("Too high!")
    guess = int(input("Guess the secret number: "))
print("Congratulations! You guessed the secret number!")





#საშვალოს გამოთვლა
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
num3 = float(input("Enter the third number: "))
average = (num1 + num2 + num3) / 3
print("The average is:", average)

if average > 50:
    print("passed")
else:  print("failed")