#!/bin/bash

# Script to convert HEIC files to JPEG format
# Requires ImageMagick to be installed

echo "Converting HEIC files to JPEG format..."

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "ImageMagick is not installed. Please install it first:"
    echo "brew install imagemagick"
    exit 1
fi

# Convert all HEIC files in the media folder
cd src/media

for file in *.HEIC; do
    if [ -f "$file" ]; then
        # Get filename without extension
        filename="${file%.*}"
        echo "Converting $file to $filename.jpg"
        
        # Convert HEIC to JPEG with good quality
        magick "$file" -quality 85 "$filename.jpg"
        
        if [ $? -eq 0 ]; then
            echo "✓ Successfully converted $file"
        else
            echo "✗ Failed to convert $file"
        fi
    fi
done

echo "Conversion complete!"
echo "You can now update the References.js file to use the converted JPEG files."
