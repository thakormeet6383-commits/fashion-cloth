import json
import pickle
import numpy as np
import gradio as gr
import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences
import random

# Load model (Keras 3 compatible)
model = tf.keras.models.load_model("shop_bot.keras", compile=False)

# Load tokenizer + classes
tokenizer = pickle.load(open("tokenizer.pkl", "rb"))
classes = pickle.load(open("classes.pkl", "rb"))

# Load intent data
with open("clothes_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

max_len = model.input_shape[1]

def clean_up_sentence(sentence):
    return sentence.lower()

def predict_class(sentence):
    cleaned = clean_up_sentence(sentence)
    seq = tokenizer.texts_to_sequences([cleaned])
    padded = pad_sequences(seq, maxlen=max_len, padding="post")
    pred = model.predict(padded, verbose=0)[0]
    idx = np.argmax(pred)
    return classes[idx]

def get_response(tag):
    for intent in data["intents"]:
        if intent["tag"] == tag:
            return random.choice(intent["responses"])
    return "Sorry, I didn't understand that."

# ChatInterface format
def chatbot(message, history):
    tag = predict_class(message)
    response = get_response(tag)
    return response

# UI
chat_ui = gr.ChatInterface(
    fn=chatbot,
    title="🛍 Clothing Assistant Bot",
    description="Ask about outfits, colors, brands, events, sizing & more!"
)

if __name__ == "__main__":
    chat_ui.launch(share=True)
