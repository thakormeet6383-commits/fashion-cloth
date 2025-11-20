import json
import numpy as np
import pickle
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM, Embedding, Dropout
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.optimizers import Adam
from sklearn.metrics import classification_report, accuracy_score

# Load dataset
with open("clothes_data.json", "r", encoding="utf-8") as file:
    data = json.load(file)

# Prepare data
sentences = []
labels = []
classes = []

for intent in data["intents"]:
    tag = intent.get("tag")
    patterns = intent.get("patterns", [])

    if not tag:
        print("❌ Missing tag in intent:", intent)
        continue

    for pattern in patterns:
        sentences.append(pattern.lower())
        labels.append(tag)

    if tag not in classes:
        classes.append(tag)

classes = sorted(classes)

# Tokenization
tokenizer = Tokenizer(oov_token="<OOV>")
tokenizer.fit_on_texts(sentences)
word_index = tokenizer.word_index

sequences = tokenizer.texts_to_sequences(sentences)
max_len = max(len(seq) for seq in sequences)
X = pad_sequences(sequences, maxlen=max_len, padding="post")

# Encode labels
label_index = {c: i for i, c in enumerate(classes)}
y = np.array([label_index[label] for label in labels])
y = to_categorical(y, num_classes=len(classes))

# Save tokenizer and classes
pickle.dump(tokenizer, open("tokenizer.pkl", "wb"))
pickle.dump(classes, open("classes.pkl", "wb"))

# Build LSTM Model
model = Sequential()
model.add(Embedding(input_dim=len(word_index) + 1, output_dim=64, input_length=max_len))
model.add(LSTM(128, return_sequences=True))
model.add(Dropout(0.5))
model.add(LSTM(64))
model.add(Dropout(0.5))
model.add(Dense(len(classes), activation="softmax"))

model.compile(loss="categorical_crossentropy", optimizer=Adam(0.001), metrics=["accuracy"])
model.summary()

# Train
model.fit(X, y, epochs=200, batch_size=8, verbose=1)

# SAVE MODEL IN CORRECT KERAS 3 FORMAT
model.save("shop_bot.keras", save_format="keras")
print("✔ Model saved as shop_bot.keras")

# Evaluate
y_pred_prob = model.predict(X)
y_pred = np.argmax(y_pred_prob, axis=1)
y_true = np.argmax(y, axis=1)

accuracy = accuracy_score(y_true, y_pred)
print(f"\nTraining Accuracy: {accuracy:.4f}")

print("\nClassification Report:")
print(classification_report(y_true, y_pred, target_names=classes))
