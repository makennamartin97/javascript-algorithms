# Write a program that prints the numbers from 1 to 100. But for multiples 
# of three print Fizz instead of the number and for the multiples of five 
# print Buzz. For numbers which are multiples of both three and five print FizzBuzz

def fizzbuzz():
    for i in range(1, 101, 1):
        if i%3 == 0 and i%5 == 0:
            print("fizzbuzz")
        if i%3 == 0:
            print("fizz")
        if i%5 == 0:
            print("buzz")
        elif i%3 != 0 and i%5 != 0:
            print(i)
print(fizzbuzz())

