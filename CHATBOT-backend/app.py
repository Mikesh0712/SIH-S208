from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torch.nn as nn
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image

app = Flask(__name__)
CORS(app)  # Allow frontend requests

# ----------------------------
# Classes
# ----------------------------
disease_classes_en = [
    "Apple scab","Apple black rot","Apple cedar rust","Apple healthy","Blueberry healthy",
    "Cherry Powdery Mildew","Cherry healthy","Corn Cercospora leaf spot Gray leaf spot",
    "Corn Common rust","Corn Northern Leaf Blight","Corn healthy","Grape Black rot",
    "Grape Esca Black Measles","Grape Leaf blight Isariopsis Leaf Spot","Grape healthy",
    "Orange Haunglongbing Citrus Greening","Peach Bacterial spot","Peach healthy",
    "Pepper bell Bacterial spot","Pepper bell healthy","Potato Early blight","Potato Late blight",
    "Potato healthy","Raspberry healthy","Soybean healthy","Squash Powdery Mildew",
    "Strawberry Leaf scorch","Strawberry healthy","Tomato Bacterial spot","Tomato Early blight",
    "Tomato Late blight","Tomato Leaf Mold","Tomato Septoria leaf spot",
    "Tomato Spider mites Two-spotted spider mite","Tomato Target Spot",
    "Tomato Yellow Leaf Curl Virus","Tomato Tomato mosaic virus","Tomato healthy"
]

disease_classes_hi = [
    "सेब का छाल रोग","सेब का काला सड़न","सेब का सीडर जंग","सेब स्वस्थ","ब्लूबेरी स्वस्थ",
    "चेरी पाउडरी मिल्ड्यू","चेरी स्वस्थ","मक्का Cercospora पत्ती धब्बा/ग्रे पत्ती धब्बा",
    "मक्का सामान्य जंग","मक्का उत्तर पत्ती ब्लाइट","मक्का स्वस्थ","अंगूर काला सड़न",
    "अंगूर Esca/काले धब्बे","अंगूर पत्ती ब्लाइट (Isariopsis पत्ती धब्बा)","अंगूर स्वस्थ",
    "संतरा हांगलोंगबिंग / सिट्रस हरींग","आड़ू बैक्टीरियल स्पॉट","आड़ू स्वस्थ",
    "शिमला मिर्च बैक्टीरियल स्पॉट","शिमला मिर्च स्वस्थ","आलू प्रारंभिक ब्लाइट","आलू देर ब्लाइट",
    "आलू स्वस्थ","रास्पबेरी स्वस्थ","सोयाबीन स्वस्थ","कद्दू पाउडरी मिल्ड्यू",
    "स्ट्रॉबेरी पत्ती जलन","स्ट्रॉबेरी स्वस्थ","टमाटर बैक्टीरियल स्पॉट","टमाटर प्रारंभिक ब्लाइट",
    "टमाटर देर ब्लाइट","टमाटर पत्ती फफूंदी","टमाटर सेप्टोरिया पत्ती धब्बा",
    "टमाटर मकड़ी कीड़ा / टू-स्पॉटेड मकड़ी कीड़ा","टमाटर टारगेट स्पॉट",
    "टमाटर येलो लीफ कर्ल वायरस","टमाटर टमाटर मोसाइक वायरस","टमाटर स्वस्थ"
]

# ----------------------------
# Load Model
# ----------------------------
num_classes = len(disease_classes_en)
model = models.mobilenet_v2(weights=None)
model.classifier[1] = nn.Linear(model.last_channel, num_classes)

# Load trained weights
model.load_state_dict(torch.load("plant_disease_model.pth", map_location=torch.device("cpu")))
model.eval()

# ----------------------------
# Image Transform
# ----------------------------
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225])
])

# ----------------------------
# Prediction Endpoint
# ----------------------------
@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    language = request.form.get("language", "en")  # Default English
    file = request.files["file"]
    image = Image.open(file).convert("RGB")
    img_tensor = transform(image).unsqueeze(0)

    with torch.no_grad():
        outputs = model(img_tensor)
        _, predicted = torch.max(outputs, 1)
        class_id = predicted.item()

    if language == "hi":
        prediction = disease_classes_hi[class_id]
    else:
        prediction = disease_classes_en[class_id]

    return jsonify({"prediction": prediction})

# ----------------------------
# Run Server
# ----------------------------
if __name__ == "__main__":
    app.run(debug=True)
