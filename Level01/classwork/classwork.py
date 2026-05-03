from turtle import *

# Create a turtle object
t = Turtle()

# Draw the base of the house (square)
for _ in range(4):
    forward(100)
    right(90)

# Move to the roof position
penup()
goto(0, 100)
pendown()

# Draw the roof (triangle)
left(90)
forward(100)
right(120)
forward(100)
right(120)
forward(100)

# Hide the turtle and exit on click
hideturtle()
exitonclick()