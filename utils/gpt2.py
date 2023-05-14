import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer

class GPT2Generator:
    def __init__(self, model_path):
        self.model = GPT2LMHeadModel.from_pretrained(model_path)
        self.tokenizer = GPT2Tokenizer.from_pretrained(model_path)
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        self.model.to(self.device)

    def generate_text(self, prompt, max_length=100, num_return_sequences=1, temperature=1.0):
        input_ids = self.tokenizer.encode(prompt, return_tensors='pt').to(self.device)
        output = self.model.generate(input_ids, max_length=max_length, num_return_sequences=num_return_sequences, temperature=temperature)
        generated_text = self.tokenizer.decode(output[0], skip_special_tokens=True)
        return generated_text

    def interact(self):
        while True:
            user_input = input('Enter your text: ')
            if user_input.lower() == 'exit':
                break
            generated_text = self.generate_text(user_input)
            print('Generated Text:', generated_text)

