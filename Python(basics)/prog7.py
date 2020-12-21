#while loops
print("Enter a number")
number=int(input())

while(number>4):
    print("Number is greater than 4")
    number=int(input())
    if(number==9):
        break
    if(number==8):
        continue
    print("LOOP")