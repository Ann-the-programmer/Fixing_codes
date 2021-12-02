def summing_arguments(numbers):
    sum_of_args = 0
    for i in numbers:
        sum_of_args += int(i)
    return sum_of_args

print("Please, enter some numbers separated with commas and spaces (e.g. '13, 15, 17, 23')")
user_input = input()
modified_user_input = user_input.split(", ")
print(summing_arguments(modified_user_input))
