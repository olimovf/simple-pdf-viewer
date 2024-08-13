# Simple PDF Viewer

This project is a simple PDF viewer built with React that allows users to view PDF documents and zoom in and out to adjust the viewing scale. It uses the [`react-pdf`](https://github.com/wojtekmaj/react-pdf) library for rendering PDF documents.

## Features

- **PDF Viewing**: Load and display PDF documents.
- **Zoom In/Out**: Adjust the scale of the PDF for better readability.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/olimovf/simple-pdf-viewer.git
   cd pdf-viewer
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Start the development server**:

   ```bash
   yarn start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

### Zoom Controls

- **Zoom In**: Increases the scale by 0.2. The maximum scale is 2.4.
- **Zoom Out**: Decreases the scale by 0.2. The minimum scale is 0.8.
- **Reset**: Resets the scale to the default value of 1.0.

The buttons are automatically disabled when the scale reaches its minimum, maximum, or default value to prevent unnecessary actions.

### File Upload

You can upload and view any PDF file by clicking the "Choose File" button. The viewer will display the selected PDF.

### Default PDF

If no file is uploaded, the viewer will attempt to load a default PDF named `sample doc.pdf` from the `public` directory.
