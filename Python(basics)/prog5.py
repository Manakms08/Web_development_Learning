#If-else
'''
print("Enter two numbers")
number1=int(input())
number2=int(input())
print("Sum: ",number1+number2)
'''
print("Enter your marks")
number=int(input())
print("Marks: ",number)
if (number>90 and number<100):
    grade='A'
elif (number>80 and number<90):
    grade='B'
else:
    grade="Don't know"
print("The grade is ",grade)
