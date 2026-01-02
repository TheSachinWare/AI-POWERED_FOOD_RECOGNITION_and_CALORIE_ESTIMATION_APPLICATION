# AI-Project-AI-Based-Web-Application-Firewall - Project Structure

## Overview
This is an AI-based nutrition analysis project that combines YOLOv5 object detection with a React frontend for food recognition and nutritional information analysis.

---

## Complete Directory Structure

```
AI-Project-AI-Based-Web-Application-Firewall/
│
├── detect.py                           # Main detection script (root level)
├── PROJECT_STRUCTURE.md                # This file
│
├── __pycache__/
│   └── detect.cpython-311.pyc          # Compiled Python cache
│
├── data/
│   └── food_calorie_data2.csv          # Food nutrition database (CSV)
│
├── images/
│   ├── your_test_image.jpg             # Test image
│   └── Jalebi_Resize_00000000_resized.png  # Sample food image
│
├── frontend/                           # React frontend application
│   ├── package.json                    # NPM dependencies
│   ├── package-lock.json               # Locked dependency versions
│   ├── postcss.config.js               # PostCSS configuration
│   ├── tailwind.config.js              # Tailwind CSS configuration
│   ├── README.md                       # Frontend README
│   ├── .gitignore                      # Git ignore rules
│   │
│   ├── public/                         # Static public assets
│   │   ├── index.html                  # Main HTML file
│   │   ├── manifest.json               # PWA manifest
│   │   ├── robots.txt                  # SEO robots file
│   │   ├── favicon.ico                 # Browser favicon
│   │   ├── logo192.png                 # PWA logo (192x192)
│   │   └── logo512.png                 # PWA logo (512x512)
│   │
│   └── src/                            # React source code
│       ├── index.js                    # React entry point
│       ├── index.css                   # Global styles
│       ├── App.js                      # Main App component
│       ├── App.jsx                     # App component (JSX version)
│       ├── App.css                     # App styles
│       ├── App.test.js                 # App tests
│       ├── setupTests.js               # Test setup
│       ├── reportWebVitals.js          # Web vitals reporting
│       ├── logo.svg                    # React logo
│       │
│       ├── components/                 # Reusable React components
│       │   ├── ImageUpload.jsx         # Image upload component
│       │   └── NutritionCard.jsx       # Nutrition display card component
│       │
│       └── services/                   # API services
│           └── nutritionService.js     # Nutrition API service
│
├── runs/                               # Detection output and results
│   └── detect/                         # Detection results directory
│       ├── api/                        # API endpoint results
│       │   ├── labels/                 # Detected labels (text format)
│       │   │   └── CholeBhature_Resize_00000002_resized.txt
│       │   │
│       │   └── [Multiple detected food images - PNG format]
│       │       ├── CholeBhature_Resize_00000001-007_resized.png
│       │       ├── Biryani_Resize_00000001,014,019,026_resized.png
│       │       ├── Dabeli_Resize_00000000,14_resized.png
│       │       ├── Dosa_Resize_00000000,16,27,33_resized.png
│       │       ├── Dhokla_Resize_00000002,17_resized.png
│       │       ├── Dal_Resize_00000004,18_resized.png
│       │       ├── Jalebi_Resize_00000000,03,05,07,19,24,30_resized.png
│       │       ├── Kathi_Resize_00000001,02,05,07,28_resized.png
│       │       ├── Kofta_Resize_00000004,06,08_resized.png
│       │       ├── Naan_Resize_00000000,02_resized.png
│       │       ├── Pakora_Resize_00000000,01,02,23_resized.png
│       │       ├── Panipuri_Resize_00000007_resized.png
│       │       ├── PaneerTikka_Resize_00000000,02,05,07,10,12,17,24,31,112_resized.png
│       │       ├── PavBhaji_Resize_00000000,01,03,04,06,18_resized.png
│       │       └── Vadapav_Resize_00000000,01,10,14,20,24,41,116_resized.png
│       │
│       └── colab/                      # Colab notebook results
│           ├── labels/                 # Detected labels
│           │   └── Jalebi_Resize_00000000_resized.txt
│           ├── your_test_image.jpg
│           └── Jalebi_Resize_00000000_resized.png
│
├── yolov5/                             # YOLOv5 object detection framework
│   ├── detect.py                       # YOLOv5 detection script
│   ├── export.py                       # Model export script
│   ├── train.py                        # Model training script
│   ├── val.py                          # Model validation script
│   ├── hubconf.py                      # Hub configuration
│   ├── benchmarks.py                   # Performance benchmarks
│   │
│   ├── requirements.txt                # Python dependencies
│   ├── pyproject.toml                  # Project configuration (PEP 517)
│   ├── LICENSE                         # YOLOv5 license
│   ├── README.md                       # YOLOv5 README (English)
│   ├── README.zh-CN.md                 # YOLOv5 README (Chinese)
│   ├── CONTRIBUTING.md                 # Contribution guidelines
│   ├── CITATION.cff                    # Citation format
│   │
│   ├── .gitignore                      # Git ignore for YOLOv5
│   ├── .gitattributes                  # Git attributes
│   ├── .dockerignore                   # Docker ignore
│   │
│   ├── .github/                        # GitHub configuration
│   │   ├── dependabot.yml              # Dependabot config
│   │   ├── workflows/                  # GitHub Actions workflows
│   │   │   ├── cla.yml                 # CLA workflow
│   │   │   ├── ci-testing.yml          # CI testing workflow
│   │   │   ├── docker.yml              # Docker build workflow
│   │   │   ├── format.yml              # Code format workflow
│   │   │   ├── links.yml               # Link check workflow
│   │   │   ├── merge-main-into-prs.yml # Auto-merge workflow
│   │   │   └── stale.yml               # Stale issue workflow
│   │   │
│   │   └── ISSUE_TEMPLATE/             # Issue templates
│   │       ├── bug-report.yml
│   │       ├── feature-request.yml
│   │       ├── question.yml
│   │       └── config.yml
│   │
│   ├── data/                           # Dataset configurations and utilities
│   │   ├── Argoverse.yaml              # Argoverse dataset config
│   │   ├── coco.yaml                   # COCO dataset config
│   │   ├── coco128.yaml                # COCO128 dataset config
│   │   ├── coco128-seg.yaml            # COCO128 segmentation config
│   │   ├── food.yaml                   # Food dataset config (CUSTOM)
│   │   ├── GlobalWheat2020.yaml        # GlobalWheat dataset config
│   │   ├── ImageNet.yaml               # ImageNet dataset config
│   │   ├── ImageNet10.yaml             # ImageNet10 subset config
│   │   ├── ImageNet100.yaml            # ImageNet100 subset config
│   │   ├── ImageNet1000.yaml           # ImageNet1000 dataset config
│   │   ├── Objects365.yaml             # Objects365 dataset config
│   │   ├── SKU-110K.yaml               # SKU-110K dataset config
│   │   ├── VisDrone.yaml               # VisDrone dataset config
│   │   ├── VOC.yaml                    # VOC dataset config
│   │   ├── xView.yaml                  # xView dataset config
│   │   │
│   │   ├── hyps/                       # Hyperparameter configurations
│   │   │   ├── hyp.no-augmentation.yaml
│   │   │   ├── hyp.Objects365.yaml
│   │   │   ├── hyp.scratch-high.yaml
│   │   │   ├── hyp.scratch-low.yaml
│   │   │   ├── hyp.scratch-med.yaml
│   │   │   └── hyp.VOC.yaml
│   │   │
│   │   ├── images/                     # Sample images for datasets
│   │   │   ├── bus.jpg
│   │   │   └── zidane.jpg
│   │   │
│   │   └── scripts/                    # Dataset download scripts
│   │       ├── download_weights.sh     # Download weights
│   │       ├── get_coco.sh             # Download COCO
│   │       ├── get_coco128.sh          # Download COCO128
│   │       ├── get_imagenet.sh         # Download ImageNet
│   │       ├── get_imagenet10.sh       # Download ImageNet10
│   │       ├── get_imagenet100.sh      # Download ImageNet100
│   │       └── get_imagenet1000.sh     # Download ImageNet1000
│   │
│   ├── models/                         # YOLOv5 model definitions and weights
│   │   ├── __init__.py
│   │   ├── best.pt                     # Best trained model (CUSTOM - FOOD DETECTION)
│   │   ├── common.py                   # Common model components
│   │   ├── experimental.py             # Experimental model components
│   │   ├── tf.py                       # TensorFlow model support
│   │   ├── yolo.py                     # YOLO model class
│   │   │
│   │   ├── yolov5n.yaml                # YOLOv5 Nano config
│   │   ├── yolov5s.yaml                # YOLOv5 Small config
│   │   ├── yolov5m.yaml                # YOLOv5 Medium config
│   │   ├── yolov5l.yaml                # YOLOv5 Large config
│   │   ├── yolov5x.yaml                # YOLOv5 XLarge config
│   │   │
│   │   ├── hub/                        # Hub models (additional variants)
│   │   │   ├── anchors.yaml
│   │   │   ├── yolov3.yaml
│   │   │   ├── yolov3-spp.yaml
│   │   │   ├── yolov3-tiny.yaml
│   │   │   ├── yolov5-bifpn.yaml
│   │   │   ├── yolov5-fpn.yaml
│   │   │   ├── yolov5-p2.yaml
│   │   │   ├── yolov5-p34.yaml
│   │   │   ├── yolov5-p6.yaml
│   │   │   ├── yolov5-p7.yaml
│   │   │   ├── yolov5-panet.yaml
│   │   │   ├── yolov5l6.yaml
│   │   │   ├── yolov5m6.yaml
│   │   │   ├── yolov5n6.yaml
│   │   │   ├── yolov5s6.yaml
│   │   │   ├── yolov5s-ghost.yaml
│   │   │   ├── yolov5s-LeakyReLU.yaml
│   │   │   ├── yolov5s-transformer.yaml
│   │   │   └── yolov5x6.yaml
│   │   │
│   │   └── segment/                    # Segmentation model configs
│   │       ├── yolov5l-seg.yaml
│   │       ├── yolov5m-seg.yaml
│   │       ├── yolov5n-seg.yaml
│   │       ├── yolov5s-seg.yaml
│   │       └── yolov5x-seg.yaml
│   │
│   ├── classify/                       # Image classification module
│   │   ├── predict.py                  # Classification prediction
│   │   ├── train.py                    # Classification training
│   │   ├── val.py                      # Classification validation
│   │   └── tutorial.ipynb              # Classification tutorial
│   │
│   ├── segment/                        # Instance segmentation module
│   │   ├── predict.py                  # Segmentation prediction
│   │   ├── train.py                    # Segmentation training
│   │   ├── val.py                      # Segmentation validation
│   │   └── tutorial.ipynb              # Segmentation tutorial
│   │
│   ├── tutorial.ipynb                  # Main tutorial notebook
│   │
│   └── utils/                          # Utility functions and integrations
│       ├── __init__.py
│       ├── activations.py              # Custom activation functions
│       ├── augmentations.py            # Data augmentation utilities
│       ├── autoanchor.py               # Automatic anchor adjustment
│       ├── autobatch.py                # Automatic batch size selection
│       ├── callbacks.py                # Training callbacks
│       ├── dataloaders.py              # Data loading utilities
│       ├── downloads.py                # Download utilities
│       ├── general.py                  # General utility functions
│       ├── loss.py                     # Loss functions
│       ├── metrics.py                  # Evaluation metrics
│       ├── plots.py                    # Plotting utilities
│       ├── torch_utils.py              # PyTorch utilities
│       ├── triton.py                   # Triton inference server
│       │
│       ├── aws/                        # AWS integration utilities
│       │   ├── __init__.py
│       │   ├── mime.sh
│       │   ├── resume.py
│       │   └── userdata.sh
│       │
│       ├── docker/                     # Docker configuration
│       │   ├── Dockerfile              # Standard Docker image
│       │   ├── Dockerfile-cpu          # CPU-only Docker image
│       │   └── Dockerfile-arm64        # ARM64 Docker image
│       │
│       ├── flask_rest_api/             # Flask REST API
│       │   ├── README.md
│       │   ├── example_request.py
│       │   └── restapi.py
│       │
│       ├── google_app_engine/          # Google App Engine deployment
│       │   ├── Dockerfile
│       │   ├── additional_requirements.txt
│       │   └── app.yaml
│       │
│       ├── loggers/                    # Experiment logging integration
│       │   ├── __init__.py
│       │   │
│       │   ├── clearml/                # ClearML logging
│       │   │   ├── __init__.py
│       │   │   ├── README.md
│       │   │   ├── clearml_utils.py
│       │   │   └── hpo.py
│       │   │
│       │   ├── comet/                  # Comet.ml logging
│       │   │   ├── __init__.py
│       │   │   ├── README.md
│       │   │   ├── comet_utils.py
│       │   │   └── hpo.py
│       │   │
│       │   └── wandb/                  # Weights & Biases logging
│       │       ├── __init__.py
│       │       └── wandb_utils.py
│       │
│       └── segment/                    # Segmentation utilities
│           ├── __init__.py
│           ├── augmentations.py        # Segmentation augmentations
│           ├── dataloaders.py          # Segmentation data loading
│           ├── general.py              # Segmentation utilities
│           ├── loss.py                 # Segmentation loss functions
│           └── metrics.py              # Segmentation metrics
│
└── [Generated outputs]/                # Temporary/generated files
    └── [Detection results and temporary data]
```

---

## Project Components

### 1. **Backend - Python Detection System**
   - **Framework**: YOLOv5 (Object Detection)
   - **Main File**: `detect.py` (root level)
   - **Purpose**: Food detection and recognition
   - **Model**: `yolov5/models/best.pt` (Custom trained for food detection)
   - **Data**: Food nutrition database in `food_calorie_data2.csv`

### 2. **Frontend - React Application**
   - **Framework**: React.js with Tailwind CSS
   - **Location**: `frontend/` directory
   - **Key Components**:
     - `ImageUpload.jsx`: Handles image upload functionality
     - `NutritionCard.jsx`: Displays nutrition information
     - `nutritionService.js`: API communication service

### 3. **YOLOv5 Framework**
   - **Purpose**: Object detection backbone
   - **Key Modules**:
     - Detection: `detect.py`, `export.py`
     - Training: `train.py`, `val.py`
     - Classification: `classify/` directory
     - Segmentation: `segment/` directory
   - **Models**: Multiple model sizes (nano to x-large)
   - **Datasets**: Pre-configured for multiple datasets (COCO, ImageNet, Food, etc.)

### 4. **Results & Output**
   - **Location**: `runs/detect/`
   - **Subdirectories**:
     - `api/`: Results from API endpoint calls
     - `colab/`: Results from Colab notebook runs
   - **Output Types**: Annotated images (PNG), detection labels (TXT)

---

## Key Features

✅ **Food Detection**: Custom-trained YOLOv5 model for food item detection  
✅ **Nutrition Analysis**: Provides caloric and nutritional information  
✅ **Web Interface**: React-based user-friendly frontend  
✅ **REST API**: Flask-based API for integration  
✅ **Multiple Deployment Options**: Docker, Google App Engine, AWS support  
✅ **Segmentation Support**: Instance segmentation capabilities  
✅ **Classification Module**: Image classification functionality  

---

## File Statistics

- **Total Files Detected**: ~246
- **Python Scripts**: Multiple core and utility files
- **React Components**: 2 main components + services
- **Configuration Files**: 50+ YAML/config files
- **Documentation**: Multiple README and guide files
- **Docker Support**: 3 different Dockerfile variants

---

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Backend | Python, YOLOv5 |
| Frontend | React.js, Tailwind CSS |
| Detection | YOLOv5 (Object Detection) |
| Deployment | Docker, Flask, Google App Engine |
| ML Tracking | Weights & Biases, Comet, ClearML |
| Database | CSV (food_calorie_data2.csv) |

---

## Generated Document
*This structure was generated on: January 2, 2026*
