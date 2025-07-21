import os
from PIL import Image

SUPPORTED_FORMATS = (".jpg", ".jpeg", ".png", ".bmp", ".tiff", ".tif", ".gif", ".heic")

def convert_images_to_webp(directory):
    for filename in os.listdir(directory):
        if not filename.lower().endswith(SUPPORTED_FORMATS):
            continue

        input_path = os.path.join(directory, filename)
        output_filename = os.path.splitext(filename)[0] + ".webp"
        output_path = os.path.join(directory, output_filename)

        try:
            with Image.open(input_path) as img:
                if img.mode in ("RGBA", "LA") or (img.mode == "P" and 'transparency' in img.info):
                    img = img.convert("RGBA")
                else:
                    img = img.convert("RGB")

                img.save(output_path, "webp", quality=85, method=6)
                print(f"[✓] {filename} → {output_filename}")
        except Exception as e:
            print(f"[✗] Ошибка при обработке {filename}: {e}")

if __name__ == "__main__":
    convert_images_to_webp(".")
