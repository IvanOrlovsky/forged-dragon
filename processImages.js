const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "public/category"; // Директория с изображениями
const watermarkPath = "public/watermark.svg"; // Путь к ватермарке

// Функция обработки изображения
const processImage = async (imagePath, outputDir) => {
	const extname = path.extname(imagePath);
	const imageName = path.basename(imagePath, extname);

	// Пропускаем изображения, которые уже были обработаны (начинаются с префикса 'wtm_')
	if (imageName.startsWith("wtm_")) {
		return; // Пропускаем уже обработанные изображения
	}

	const outputImagePath = path.join(outputDir, `wtm_${imageName}.webp`);

	try {
		const image = sharp(imagePath);
		const { width } = await image.metadata();

		// Добавляем ватермарку
		const watermark = await sharp(watermarkPath)
			.resize(Math.round(width / 2)) // Изменяем размер ватермарки
			.png()
			.toBuffer();

		// Создание изображения с ватермаркой и конвертация в webp
		await image
			.composite([{ input: watermark, gravity: "southeast" }]) // Наложение ватермарки
			.webp({ quality: 100, lossless: true }) // Конвертация в webp с минимальной потерей качества
			.toFile(outputImagePath);

		// Удаление оригинала после успешной обработки
		fs.unlinkSync(imagePath);

		console.log(`Обработано и заменено: ${outputImagePath}`);
	} catch (error) {
		console.error(`Ошибка обработки файла ${imagePath}:`, error);
	}
};

// Рекурсивная функция для обработки директорий
const processDirectory = async (dir) => {
	const files = fs.readdirSync(dir);

	for (const file of files) {
		const fullPath = path.join(dir, file);

		// Проверяем, является ли файл директорией
		if (fs.statSync(fullPath).isDirectory()) {
			// Рекурсивно обрабатываем подпапки
			await processDirectory(fullPath);
		} else {
			const extname = path.extname(fullPath).toLowerCase();
			// Обрабатываем только изображения
			if ([".jpg", ".jpeg", ".png", ".webp"].includes(extname)) {
				await processImage(fullPath, dir);
			}
		}
	}
};

// Запуск обработки
processDirectory(inputDir);
