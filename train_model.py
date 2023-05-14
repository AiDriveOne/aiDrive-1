import pandas as pd
import tensorflow as tf

# Load the data
url = 'https://raw.githubusercontent.com/highApp/aitaxi/main/data.csv'
data = pd.read_csv(url)

# Preprocess the data
X = data.drop('target', axis=1)
y = data['target']

# Define the model architecture
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(X.shape[1],)),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

# Compile the model with the appropriate loss and optimizer
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model on the preprocessed data
model.fit(X, y, epochs=10, batch_size=32)

# Save the trained model to a file
model.save('my_model.h5')
