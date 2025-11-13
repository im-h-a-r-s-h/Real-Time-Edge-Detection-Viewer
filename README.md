# 🌐 EdgeViewer — Android + Web Integration

A lightweight hybrid project combining **Android (NDK + OpenCV + OpenGL ES)** and a **TypeScript web viewer**, designed for real-time edge visualization and image processing.

---

## ✅ Features Implemented

### 📱 Android (NDK + OpenCV + OpenGL ES)
- Live camera preview using OpenGL ES surface rendering.
- Native frame processing via JNI for efficient edge detection.
- Integrated OpenCV (C++) for real-time frame transformations.
- Custom shader-based edge rendering for minimal latency.
- Optimized for Android devices with camera access.

### 💻 Web (TypeScript)
- TypeScript-based visualization module for displaying processed results.
- Lightweight canvas renderer for testing image output in browser.
- API-ready structure to receive frames from Android or any server endpoint.

---

| Android App | Web Preview |
|--------------|--------------|
| ![Web Preview](screenshots/Screenshot%202025-11-14%20004739.png) | ![Android App](screenshots/Screenshot%202025-11-14%20004812.png) |

---

## ⚙️ Setup Instructions

### 🧩 Prerequisites
- **Android Studio (latest version)**
- **NDK + CMake** installed via SDK Manager
- **OpenCV Android SDK**
- **Node.js + npm** (for web part)

---

### 🚀 Android Setup

1. Open the Android project:
   ```bash
   File > Open > EdgeViewerMinimal/android
   ```
2. Wait for Gradle sync to complete.

3. Connect a physical device (with camera enabled).

4. Build and run the project:
```bash
   run
   ```
5. Grant camera permission when prompted.

### 🚀 Web Setup

1. Navigate to the web folder.
2. Install dependencies:
3. Start the local server:
4. Open your browser at:http://localhost:5173

Architecture Overview

🧩 Android Native Flow
```bash
Camera → OpenGL Renderer → JNI Bridge → C++ (OpenCV) → Frame Output
```

🌐 Web Visualization Flow
```bash
Server / Native Output → TypeScript Canvas → Browser Display
```

📁 Project Structure
```bash
EdgeViewerMinimal/
├── android/        # Android Studio project (NDK + OpenGL + OpenCV)
├── web/            # TypeScript frontend
├── native-lib.cpp  # JNI + OpenCV core logic
├── README.md       # You are here
└── ...
```

## 🧩 Tech Stack
- **Android (Java + C++)**  
- **OpenCV (C++ API)**  
- **OpenGL ES 2.0**  
- **JNI / NDK**  
- **TypeScript + Vite**  


## ✨ Future Improvements
- Add streaming support between **Android ↔ Web**.  
- Include **frame rate optimization** and native profiling.  
- Implement **on-device AI inference** (TensorFlow Lite or ONNX).  


## 👨‍💻 Author
**Harsh Gupta**  
_Android • C++ • Web Integration Enthusiast_  
📧 [2k22.cse.2213543@gmail.com](mailto:2k22.cse.2213543@gmail.com)  
