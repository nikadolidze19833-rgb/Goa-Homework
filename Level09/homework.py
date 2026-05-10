scores = [("Alice", 85), ("Bob", 92), ("Charlie", 78), ("David", 90)]
# 1. Calculate the average score
sum_scores = 0
for name, score in scores:
    sum_scores += score
average_score = sum_scores / len(scores)
print(f"The average score is: {average_score}")

for name, score in scores:
    if score <= 50:
        print(f"{name} has a failing score.")
    elif score >= 90:
        print(f"{name} has an excellent score.")
    else:
        print(f"{name} has a passing score.")




numbers = [ 5, 10 , 15, 20, 25 ]
total = 0
for num in numbers:
    total += num
    print("Current total:", total)



#check if 7 is in the list of the numbers
numbers = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]
if 7 in numbers:
    print("7 is in the list.")
else:
    print("7 is not in the list.")







#სხვადასხვა ტიპის  მნშვნელობებსის რაოდენობა
items = [10, "Hello", "python", 50, 3.14]
count = len(items)
print("ნივთი არის", count, "მნიშვნელობა")




# ყველაზე დიდი რიცხვის პოვნა
numbers = [12, 45, 7, 89, 34, 100, 56]
largest = numbers[0]
for num in numbers:
    if num > largest:
        largest = num
        print("ყველაზე დიდი რიცხვია:", largest)




        #სახელების მისალმება for ციკლით
        names = ["Nika", "Luka", "Ana", "Gio"]
for name in names:
    print("გამარჯობა", name)










    #smallest number in the list
    numbers = [15, 3, 8, 42,1]
    smallest = numbers[0]
    for num in numbers:
        if num < smallest:
            smallest = num
    print("ყველაზე მცირე რიცხვია:", smallest)
