def transform_string(s):
    length = len(s)
    
    if length % 15 == 0:
        return s[::-1]
    elif length % 3 == 0:
        return s[::-1]
    elif length % 5 == 0:
        return ' '.join(str(ord(c)) for c in s)
    else:
        return s

input_string = input("Enter a string: ")
result = transform_string(input_string)
print("Transformed string:", result)
