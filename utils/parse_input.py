import re

def clean_input(input_string):
    # Remove any non-alphanumeric characters
    cleaned_string = re.sub(r'[^a-zA-Z0-9\s]', '', input_string)
    # Convert all whitespace characters to a single space
    cleaned_string = re.sub(r'\s+', ' ', cleaned_string)
    # Convert the cleaned string to lowercase
    cleaned_string = cleaned_string.lower()
    # Remove leading and trailing whitespace
    cleaned_string = cleaned_string.strip()
    
    return cleaned_string
