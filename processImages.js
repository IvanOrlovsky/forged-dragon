const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "public/category"; // Директория с изображениями
const watermarkPath = "public/watermark.svg"; // Путь к ватермарке

const processImage = async (imagePath) => {
	const extname = path.extname(imagePath);
	const imageName = path.basename(imagePath, extname);

	if (imageName.startsWith("wtm_")) {
		return; // Пропускаем уже обработанные изображения
	}

	const outputImagePath = path.join(inputDir, `wtm_${imageName}.webp`);

	try {
		const image = sharp(imagePath);
		const { width, height } = await image.metadata();

		// Добавляем ватермарку
		const watermark = await sharp(watermarkPath)
			.resize(Math.round(width / 2)) // Изменяем размер ватермарки
			.png()
			.toBuffer();

		const resultImage = await image
			.composite([{ input: watermark, gravity: "southeast" }]) // Наложение ватермарки
			.webp({ quality: 80 }) // Конвертация в webp с сжатием
			.toFile(outputImagePath);

		console.log(`Обработано: ${outputImagePath}`);
	} catch (error) {
		console.error(`Ошибка обработки файла ${imagePath}:`, error);
	}
};

// Проверка директории и обработка изображений
const processDirectory = async () => {
	const files = fs.readdirSync(inputDir);

	for (const file of files) {
		const fullPath = path.join(inputDir, file);
		const extname = path.extname(file).toLowerCase();

		// Обрабатываем только изображения
		if ([".jpg", ".jpeg", ".png", ".webp"].includes(extname)) {
			await processImage(fullPath);
		}
	}
};

processDirectory();
