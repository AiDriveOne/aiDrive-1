import os

def search_files(keyword):
    data_folder = os.path.join(os.getcwd(), 'aidrive', 'data')
    matching_files = []
    
    # Iterate over all files in the data folder
    for root, dirs, files in os.walk(data_folder):
        for file in files:
            file_path = os.path.join(root, file)
            
            # Read the contents of the file
            with open(file_path, 'r') as f:
                contents = f.read()
                
                # Check if the keyword exists in the file contents
                if keyword in contents:
                    matching_files.append(file_path)
    
    return matching_files
