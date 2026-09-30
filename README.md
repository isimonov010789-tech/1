# Teacher Video

Минимальный Remotion-проект на React и TypeScript.

## Запуск

Требуется Node.js 22 или новее и npm.

```bash
npm ci
npm start
```

Откройте адрес Remotion Studio, который появится в терминале.

## Проверка и экспорт

```bash
npm run typecheck
npm run build
npm run render
```

Видео сохраняется в `out/teacher-video.mp4`.

Композиция `TeacherVideo`: 1920×1080, 30 кадров/с, 5 секунд.
Заголовок плавно появляется за первую секунду.

## Структура

- `src/index.ts` — регистрация проекта.
- `src/Root.tsx` — параметры композиции.
- `src/TeacherVideo.tsx` — содержимое видео.

Измените `TeacherVideo.tsx`, чтобы начать работу над своим видео.
