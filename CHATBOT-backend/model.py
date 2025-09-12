import torch
from torchvision import models, transforms
from PIL import Image
import io

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

def load_model():
    # same preprocessing used in training
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406],
                             [0.229, 0.224, 0.225])
    ])

    model = models.mobilenet_v2(pretrained=False)
    model.classifier[1] = torch.nn.Linear(model.last_channel, 38)  # 38 classes
    model.load_state_dict(torch.load("plant_disease_model.pth", map_location=device))
    model.to(device)
    model.eval()

    # classes list should match your training dataset
    # manually add or pickle them
    classes = [
        'Apple___Black_rot', 'Apple___healthy', 'Apple___Cedar_apple_rust', 
        # ... include all 38 class names ...
        'Tomato___Yellow_Leaf_Curl_Virus'
    ]

    return model, classes, transform

def predict_image(file, model, transform, classes):
    image = Image.open(file.stream).convert("RGB")
    image = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        outputs = model(image)
        _, pred = torch.max(outputs, 1)

    return classes[pred.item()]
