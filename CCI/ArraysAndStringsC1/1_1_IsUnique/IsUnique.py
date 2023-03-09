
def is_unique(text):
    character_dict = []
    is_unique_char = True

    for character in text:
        if character in character_dict:
            is_unique_char = False
            break
        character_dict.append(character)
    
    return is_unique_char




if __name__ == '__main__':
    inputs = [
        'Hello, This is the first test',
        '#21ds2fhgQsq',
        'My other',
        'JEUSIiasi',
        'Unique char',
    ]

    for i in inputs:
        result = is_unique(i)
        result_print = f"""
        Result
            Input: {i}
            Output: {result}
        """
        print(result_print)
