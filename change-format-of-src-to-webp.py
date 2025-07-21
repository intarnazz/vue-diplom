import os
import re

# Папка, с которой начинать обход
root_dir = "./"  # укажи свой путь к проекту, если нужно

# Регулярка для замены форматов изображений
pattern = re.compile(
    r'(src\s*=\s*["\']@/assets/img/[^"\']+?)\.(jpg|jpeg|png|gif|bmp|tiff|svg)(["\'])',
    re.IGNORECASE,
)


def replace_image_extensions(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    new_content, count = pattern.subn(r"\1.webp\3", content)

    if count > 0:
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(new_content)
        print(f"Обновлено {count} ссылок в: {file_path}")


def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith((".js", ".jsx", ".ts", ".tsx", ".vue", ".html")):
                replace_image_extensions(os.path.join(root, file))


if __name__ == "__main__":
    process_directory(root_dir)
