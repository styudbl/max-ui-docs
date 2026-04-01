# 🎨 MAX UI: Полный справочник компонентов

**Сгенерировано:** 2025-04-01  
**Версия библиотеки:** @maxhub/max-ui  
**Пакет импорта:** `@maxhub/max-ui`

---

## 📑 Оглавление

### Avatar (7 компонентов)
- [Avatar](#avatar)
- [Avatar.Container](#avatarcontainer)
- [Avatar.Image](#avatarimage)
- [Avatar.Fallback](#avatarfallback)
- [Avatar.Status](#avatarstatus)
- [Avatar.Indicator](#avatarindicator)
- [Avatar.Group](#avatargroup)

### Button & Action Components
- [Button](#button)
- [IconButton](#iconbutton)
- [SvgButton](#svgbutton)
- [ToolButton](#toolbutton)

### Cell Components (5 компонентов)
- [CellAction](#cellaction)
- [CellHeader](#cellheader)
- [CellInput](#cellinput)
- [CellList](#celllist)
- [CellSimple](#cellsimple)

### Input Components (3 компонента)
- [Input](#input)
- [ClearableInput](#clearableinput)
- [SearchInput](#searchinput)

### Form Components
- [Textarea](#textarea)
- [Switch](#switch)
- [Counter](#counter)

### Layout Components
- [Container](#container)
- [Panel](#panel)
- [Flex](#flex)
- [Grid](#grid)

### Typography (6 компонентов)
- [Display](#display)
- [Headline](#headline)
- [Title](#title)
- [Body](#body)
- [Label](#label)
- [Action](#action)

### Utility Components
- [EllipsisText](#ellipsistext)
- [Spinner](#spinner)
- [Dot](#dot)
- [Ripple](#ripple)
- [Tappable](#tappable)
- [MaxUI](#maxui)
- [Profile](#profile)

---

## 📷 Avatar

Компонент для отображения аватара пользователя с поддержкой изображений, фолбэков, статусов и индикаторов.

### 📦 Импорт
```tsx
import { Avatar } from '@maxhub/max-ui';
```

### 📋 Props

#### Avatar.Root
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| size | `'xs' \| 's' \| 'm' \| 'l' \| 'xl'` | `'m'` | Размер аватара |
| shape | `'circle' \| 'square' \| 'rounded'` | `'circle'` | Форма аватара |
| asChild | `boolean` | `false` | Полимерфизм через Slot |

#### Avatar.Image
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| src | `string` | - | URL изображения |
| alt | `string` | `''` | Альтернативный текст |
| onError | `() => void` | - | Обработчик ошибки загрузки |

#### Avatar.Fallback
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| delayMs | `number` | `0` | Задержка показа фолбэка |
| children | `React.ReactNode` | - | Содержимое (инициалы, иконка) |

#### Avatar.Status
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| status | `'online' \| 'offline' \| 'busy' \| 'away'` | `'online'` | Статус пользователя |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Размер индикатора статуса |

#### Avatar.Indicator
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| position | `'top-right' \| 'bottom-right'` | `'top-right'` | Позиция индикатора |
| children | `React.ReactNode` | - | Кастомный индикатор |

#### Avatar.Group
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| max | `number` | `3` | Максимум видимых аватаров |
| spacing | `number` | `-8` | Отступ между аватарами (px) |
| total | `number` | - | Общее количество участников |

### 🎨 Примеры

```tsx
// Пример 1: Базовый аватар с изображением
<Avatar>
  <Avatar.Image src="https://example.com/avatar.jpg" alt="User" />
  <Avatar.Fallback>AB</Avatar.Fallback>
</Avatar>

// Пример 2: Аватар с онлайн-статусом
<Avatar>
  <Avatar.Image src="/user.jpg" alt="User" />
  <Avatar.Fallback>AB</Avatar.Fallback>
  <Avatar.Status status="online" />
</Avatar>

// Пример 3: Аватар только с фолбэком (инициалы)
<Avatar size="l">
  <Avatar.Fallback>John Doe</Avatar.Fallback>
</Avatar>

// Пример 4: Группа аватаров
<Avatar.Group max={3} total={10}>
  <Avatar><Avatar.Fallback>A</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>B</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>C</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>D</Avatar.Fallback></Avatar>
</Avatar.Group>

// Пример 5: Аватар с кастомным индикатором
<Avatar>
  <Avatar.Image src="/user.jpg" alt="User" />
  <Avatar.Indicator position="bottom-right">
    <Dot color="red" />
  </Avatar.Indicator>
</Avatar>

// Пример 6: Разные размеры
<Avatar size="xs"><Avatar.Fallback>XS</Avatar.Fallback></Avatar>
<Avatar size="s"><Avatar.Fallback>S</Avatar.Fallback></Avatar>
<Avatar size="m"><Avatar.Fallback>M</Avatar.Fallback></Avatar>
<Avatar size="l"><Avatar.Fallback>L</Avatar.Fallback></Avatar>
<Avatar size="xl"><Avatar.Fallback>XL</Avatar.Fallback></Avatar>

// Пример 7: Квадратная форма
<Avatar shape="square">
  <Avatar.Fallback>SQ</Avatar.Fallback>
</Avatar>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Avatar-size-xs` | 24px |
| `--MaxUi-Avatar-size-s` | 32px |
| `--MaxUi-Avatar-size-m` | 40px |
| `--MaxUi-Avatar-size-l` | 48px |
| `--MaxUi-Avatar-size-xl` | 64px |
| `--MaxUi-Avatar-bg-color` | Цвет фона фолбэка |
| `--MaxUi-Avatar-text-color` | Цвет текста инициалов |
| `--MaxUi-Avatar-status-online` | #22C55E (зеленый) |
| `--MaxUi-Avatar-status-offline` | #9CA3AF (серый) |
| `--MaxUi-Avatar-status-busy` | #EF4444 (красный) |
| `--MaxUi-Avatar-status-away` | #F59E0B (желтый) |
| `--MaxUi-Avatar-border-radius-circle` | 50% |
| `--MaxUi-Avatar-border-radius-square` | 0 |
| `--MaxUi-Avatar-border-radius-rounded` | 8px |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Avatar` | Корневой элемент |
| `.Avatar__image` | Контейнер изображения |
| `.Avatar__fallback` | Фолбэк-контейнер |
| `.Avatar__status` | Индикатор статуса |
| `.Avatar__indicator` | Кастомный индикатор |
| `.Avatar__group` | Группа аватаров |
| `.Avatar--size-{size}` | Модификатор размера |
| `.Avatar--shape-{shape}` | Модификатор формы |

### 🔧 Типы TypeScript
```ts
export type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type AvatarShape = 'circle' | 'square' | 'rounded';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';
export type IndicatorPosition = 'top-right' | 'bottom-right';

export interface AvatarProps {
  size?: AvatarSize;
  shape?: AvatarShape;
  asChild?: boolean;
  className?: string;
}

export interface AvatarImageProps {
  src: string;
  alt?: string;
  onError?: () => void;
}

export interface AvatarFallbackProps {
  delayMs?: number;
  children: React.ReactNode;
}

export interface AvatarStatusProps {
  status?: AvatarStatus;
  size?: 's' | 'm' | 'l';
}

export interface AvatarGroupProps {
  max?: number;
  spacing?: number;
  total?: number;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** `AvatarContext` предоставляет размер и форму всем дочерним компонентам
- **asChild:** Поддерживается во всех подкомпонентах через `@radix-ui/react-slot`
- **Адаптивность:** Размеры фиксируются через CSS-переменные
- **Lazy Fallback:** Фолбэк показывается только при ошибке загрузки изображения

### ⚠️ Важно
- Всегда указывайте `alt` для доступности
- `Avatar.Fallback` обязателен как резервный вариант
- В группе аватаров используйте отрицательный `spacing` для наложения
- Статус позиционируется абсолютно относительно корня Avatar

### ✅ Правильно
```tsx
<Avatar size="m">
  <Avatar.Image src="https://cdn.example.com/user.jpg" alt="Иван Петров" />
  <Avatar.Fallback>ИП</Avatar.Fallback>
  <Avatar.Status status="online" />
</Avatar>
```

### ❌ Неправильно
```tsx
// ❌ Лишний пробел в атрибуте
<Avatar.Container asChild>

// ❌ Неправильный импорт
import { Avatar } from '@maxhub/max-ui'

// ❌ Пробелы в атрибутах
<Avatar.Image src="https://..." alt="User" >

// ❌ Нет фолбэка
<Avatar>
  <Avatar.Image src="..." />
</Avatar>
```

### 🔗 Связанные компоненты
- [Dot](#dot) - Для кастомных индикаторов
- [Profile](#profile) - Профиль пользователя с аватаром

---

## 📷 Avatar.Container

Контейнер для аватара с поддержкой полиморфизма через Slot API.

### 📦 Импорт
```tsx
import { Avatar } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| asChild | `boolean` | `false` | Использовать Slot для рендеринга детей |
| size | `AvatarSize` | `'m'` | Размер контейнера |
| shape | `AvatarShape` | `'circle'` | Форма контейнера |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый контейнер
<Avatar.Container>
  <Avatar.Image src="/avatar.jpg" />
</Avatar.Container>

// Пример 2: Контейнер как ссылка (polymorphic)
<Avatar.Container asChild>
  <a href="https://example.com/profile">
    <Avatar.Image src="/avatar.jpg" />
  </a>
</Avatar.Container>

// Пример 3: Контейнер с разными размерами
<Avatar.Container size="xs">...</Avatar.Container>
<Avatar.Container size="s">...</Avatar.Container>
<Avatar.Container size="m">...</Avatar.Container>
<Avatar.Container size="l">...</Avatar.Container>
<Avatar.Container size="xl">...</Avatar.Container>

// Пример 4: Квадратный контейнер
<Avatar.Container shape="square">
  <Avatar.Image src="/avatar.jpg" />
</Avatar.Container>

// Пример 5: Контейнер с кастомными стилями
<Avatar.Container className="custom-avatar">
  <Avatar.Image src="/avatar.jpg" />
</Avatar.Container>

// Пример 6: Контейнер с закругленными углами
<Avatar.Container shape="rounded">
  <Avatar.Image src="/avatar.jpg" />
</Avatar.Container>

// Пример 7: Контейнер внутри кнопки
<Avatar.Container asChild>
  <button type="button">
    <Avatar.Fallback>U</Avatar.Fallback>
  </button>
</Avatar.Container>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Avatar-Container-width` | Ширина контейнера |
| `--MaxUi-Avatar-Container-height` | Высота контейнера |
| `--MaxUi-Avatar-Container-border-radius` | Радиус скругления |
| `--MaxUi-Avatar-Container-overflow` | overflow: hidden |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Avatar__container` | Корневой элемент контейнера |
| `.Avatar__container--as-child` | Модификатор для asChild режима |

### 🔧 Типы TypeScript
```ts
export interface AvatarContainerProps extends SlotProps {
  asChild?: boolean;
  size?: AvatarSize;
  shape?: AvatarShape;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Предоставляет контекст размера и формы дочерним компонентам
- **asChild:** Полная поддержка полиморфизма через Radix Slot
- **Адаптивность:** Наследует размеры от родителя или использует свои

### ⚠️ Важно
- При использовании `asChild` должен быть только один прямой потомок
- Контейнер устанавливает `overflow: hidden` для обрезки содержимого

### ✅ Правильно
```tsx
<Avatar.Container asChild>
  <a href="/profile">
    <Avatar.Image src="/avatar.jpg" alt="Profile" />
  </a>
</Avatar.Container>
```

### ❌ Неправильно
```tsx
// ❌ Лишний пробел перед >
<Avatar.Container asChild>

// ❌ Несколько детей с asChild
<Avatar.Container asChild>
  <div>First</div>
  <div>Second</div>
</Avatar.Container>
```

### 🔗 Связанные компоненты
- [Avatar](#avatar)
- [Avatar.Image](#avatarimage)

---

## 📷 Avatar.Image

Компонент изображения аватара с обработкой ошибок загрузки.

### 📦 Импорт
```tsx
import { Avatar } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| src | `string` | - | URL изображения (обязательно) |
| alt | `string` | `''` | Альтернативный текст |
| onError | `() => void` | - | Callback при ошибке загрузки |
| onLoad | `() => void` | - | Callback при успешной загрузке |
| loading | `'lazy' \| 'eager'` | `'lazy'` | Стратегия загрузки |
| crossOrigin | `string` | - | CORS настройка |

### 🎨 Примеры

```tsx
// Пример 1: Базовое изображение
<Avatar>
  <Avatar.Image src="https://example.com/avatar.jpg" alt="User" />
  <Avatar.Fallback>AB</Avatar.Fallback>
</Avatar>

// Пример 2: С обработчиком ошибки
<Avatar>
  <Avatar.Image 
    src="https://example.com/avatar.jpg" 
    alt="User"
    onError={() => console.log('Failed to load')}
  />
  <Avatar.Fallback>AB</Avatar.Fallback>
</Avatar>

// Пример 3: С загрузкой по требованию
<Avatar>
  <Avatar.Image src="/avatar.jpg" loading="eager" alt="User" />
  <Avatar.Fallback>AB</Avatar.Fallback>
</Avatar>

// Пример 4: С CORS настройкой
<Avatar>
  <Avatar.Image 
    src="https://cdn.example.com/avatar.jpg" 
    crossOrigin="anonymous"
    alt="User"
  />
  <Avatar.Fallback>AB</Avatar.Fallback>
</Avatar>

// Пример 5: С отслеживанием загрузки
<Avatar>
  <Avatar.Image 
    src="/avatar.jpg" 
    alt="User"
    onLoad={() => console.log('Loaded!')}
  />
  <Avatar.Fallback>AB</Avatar.Fallback>
</Avatar>

// Пример 6: Локальное изображение
<Avatar>
  <Avatar.Image src="/static/avatars/default.png" alt="Default" />
  <Avatar.Fallback>?</Avatar.Fallback>
</Avatar>

// Пример 7: Data URL
<Avatar>
  <Avatar.Image src="data:image/png;base64,..." alt="Inline" />
  <Avatar.Fallback>DB</Avatar.Fallback>
</Avatar>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Avatar-Image-object-fit` | cover |
| `--MaxUi-Avatar-Image-object-position` | center |
| `--MaxUi-Avatar-Image-width` | 100% |
| `--MaxUi-Avatar-Image-height` | 100% |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Avatar__image` | Элемент img |
| `.Avatar__image--loaded` | После успешной загрузки |
| `.Avatar__image--error` | При ошибке загрузки |

### 🔧 Типы TypeScript
```ts
export interface AvatarImageProps {
  src: string;
  alt?: string;
  onError?: () => void;
  onLoad?: () => void;
  loading?: 'lazy' | 'eager';
  crossOrigin?: string;
}
```

### 📱 Особенности
- **Context API:** Получает размер из AvatarContext
- **asChild:** Не поддерживается (всегда рендерит img)
- **Адаптивность:** Автоматически масштабируется под контейнер

### ⚠️ Важно
- `src` обязательный проп
- Всегда указывайте `alt` для доступности
- При ошибке загрузки автоматически показывается Fallback

### ✅ Правильно
```tsx
<Avatar>
  <Avatar.Image src="https://cdn.example.com/user.jpg" alt="Имя пользователя" />
  <Avatar.Fallback>ИП</Avatar.Fallback>
</Avatar>
```

### ❌ Неправильно
```tsx
// ❌ Пробел в атрибуте
<Avatar.Image src="https://..." >

// ❌ Нет alt
<Avatar.Image src="/avatar.jpg" />

// ❌ Неправильный импорт
import { Avatar } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Avatar.Fallback](#avatarfallback)
- [Avatar](#avatar)

---

## 📷 Avatar.Fallback

Резервный контент аватара, показывается при отсутствии изображения или ошибке загрузки.

### 📦 Импорт
```tsx
import { Avatar } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| delayMs | `number` | `0` | Задержка показа в мс |
| children | `React.ReactNode` | - | Содержимое (инициалы, иконка) |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Инициалы
<Avatar>
  <Avatar.Fallback>ИП</Avatar.Fallback>
</Avatar>

// Пример 2: Полное имя
<Avatar size="l">
  <Avatar.Fallback>Иван Петров</Avatar.Fallback>
</Avatar>

// Пример 3: С задержкой показа
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Fallback delayMs={300}>ИП</Avatar.Fallback>
</Avatar>

// Пример 4: С иконкой
<Avatar>
  <Avatar.Fallback>
    <UserIcon />
  </Avatar.Fallback>
</Avatar>

// Пример 5: С кастомными стилями
<Avatar>
  <Avatar.Fallback className="custom-fallback">?</Avatar.Fallback>
</Avatar>

// Пример 6: С генерацией цвета по имени
<Avatar>
  <Avatar.Fallback style={{ backgroundColor: getColorHash('Иван') }}>
    И
  </Avatar.Fallback>
</Avatar>

// Пример 7: Пустой фолбэк (только цвет)
<Avatar>
  <Avatar.Fallback></Avatar.Fallback>
</Avatar>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Avatar-Fallback-bg-color` | Фон фолбэка |
| `--MaxUi-Avatar-Fallback-text-color` | Цвет текста |
| `--MaxUi-Avatar-Fallback-font-size` | Размер шрифта инициалов |
| `--MaxUi-Avatar-Fallback-font-weight` | Жирность текста |
| `--MaxUi-Avatar-Fallback-display` | flex |
| `--MaxUi-Avatar-Fallback-align-items` | center |
| `--MaxUi-Avatar-Fallback-justify-content` | center |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Avatar__fallback` | Корневой элемент фолбэка |
| `.Avatar__fallback--delayed` | С задержкой показа |

### 🔧 Типы TypeScript
```ts
export interface AvatarFallbackProps {
  delayMs?: number;
  children: React.ReactNode;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Получает размер из AvatarContext для расчета шрифта
- **asChild:** Не поддерживается
- **Адаптивность:** Размер шрифта зависит от размера аватара

### ⚠️ Важно
- Должен быть внутри Avatar.Container
- Показывается только если нет успешного изображения
- `delayMs` полезен для предотвращения мерцания

### ✅ Правильно
```tsx
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Fallback>ИП</Avatar.Fallback>
</Avatar>
```

### ❌ Неправильно
```tsx
// ❌ Фолбэк без контейнера
<Avatar.Fallback>ИП</Avatar.Fallback>

// ❌ Слишком длинный текст для маленьких размеров
<Avatar size="xs">
  <Avatar.Fallback>Иван Петрович Петров</Avatar.Fallback>
</Avatar>
```

### 🔗 Связанные компоненты
- [Avatar.Image](#avatarimage)
- [Typography.Body](#body)

---

## 📷 Avatar.Status

Индикатор статуса пользователя (онлайн, офлайн, занят, отошел).

### 📦 Импорт
```tsx
import { Avatar } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| status | `AvatarStatus` | `'online'` | Статус пользователя |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Размер индикатора |
| ariaLabel | `string` | `'Status'` | ARIA метка |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Онлайн статус
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Status status="online" />
</Avatar>

// Пример 2: Все варианты статусов
<Avatar><Avatar.Status status="online" /></Avatar>
<Avatar><Avatar.Status status="offline" /></Avatar>
<Avatar><Avatar.Status status="busy" /></Avatar>
<Avatar><Avatar.Status status="away" /></Avatar>

// Пример 3: Разные размеры
<Avatar><Avatar.Status size="s" status="online" /></Avatar>
<Avatar><Avatar.Status size="m" status="online" /></Avatar>
<Avatar><Avatar.Status size="l" status="online" /></Avatar>

// Пример 4: С кастомной ARIA меткой
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Status status="busy" ariaLabel="Занят" />
</Avatar>

// Пример 5: Только статус (без аватара)
<Avatar.Status status="online" size="l" />

// Пример 6: Динамический статус
const UserAvatar = ({ isOnline }) => (
  <Avatar>
    <Avatar.Image src="/avatar.jpg" alt="User" />
    <Avatar.Status status={isOnline ? 'online' : 'offline'} />
  </Avatar>
);

// Пример 7: С Tooltip
<Tooltip content="Онлайн">
  <Avatar>
    <Avatar.Image src="/avatar.jpg" alt="User" />
    <Avatar.Status status="online" />
  </Avatar>
</Tooltip>
```

### 🎨 CSS-переменные
| Переменная | Описание | Значение |
|------------|----------|----------|
| `--MaxUi-Avatar-Status-size-s` | 8px |
| `--MaxUi-Avatar-Status-size-m` | 12px |
| `--MaxUi-Avatar-Status-size-l` | 16px |
| `--MaxUi-Avatar-Status-online-color` | #22C55E |
| `--MaxUi-Avatar-Status-offline-color` | #9CA3AF |
| `--MaxUi-Avatar-Status-busy-color` | #EF4444 |
| `--MaxUi-Avatar-Status-away-color` | #F59E0B |
| `--MaxUi-Avatar-Status-border-color` | #FFFFFF |
| `--MaxUi-Avatar-Status-border-width` | 2px |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Avatar__status` | Корневой элемент статуса |
| `.Avatar__status--online` | Модификатор онлайн |
| `.Avatar__status--offline` | Модификатор офлайн |
| `.Avatar__status--busy` | Модификатор занят |
| `.Avatar__status--away` | Модификатор отошел |
| `.Avatar__status--size-{size}` | Модификатор размера |

### 🔧 Типы TypeScript
```ts
export type AvatarStatusType = 'online' | 'offline' | 'busy' | 'away';

export interface AvatarStatusProps {
  status?: AvatarStatusType;
  size?: 's' | 'm' | 'l';
  ariaLabel?: string;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Фиксированные размеры через CSS-переменные

### ⚠️ Важно
- Позиционируется абсолютно относительно Avatar.Container
- Имеет белую обводку для контраста на любом фоне
- Используйте семантически правильные статусы

### ✅ Правильно
```tsx
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Status status="online" />
</Avatar>
```

### ❌ Неправильно
```tsx
// ❌ Статус вне аватара (потеряется позиционирование)
<Avatar>
  <Avatar.Image src="/avatar.jpg" />
</Avatar>
<Avatar.Status status="online" />

// ❌ Неправильный импорт
import { Avatar } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Dot](#dot) - Альтернативный индикатор
- [Avatar.Indicator](#avatarindicator)

---

## 📷 Avatar.Indicator

Кастомный индикатор для аватара с настраиваемой позицией.

### 📦 Импорт
```tsx
import { Avatar } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| position | `IndicatorPosition` | `'top-right'` | Позиция индикатора |
| children | `React.ReactNode` | - | Содержимое индикатора |
| offset | `number` | `0` | Смещение от края (px) |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый индикатор
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Indicator>
    <Dot color="green" />
  </Avatar.Indicator>
</Avatar>

// Пример 2: Индикатор снизу справа
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Indicator position="bottom-right">
    <Dot color="red" />
  </Avatar.Indicator>
</Avatar>

// Пример 3: С иконкой уведомления
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Indicator>
    <Badge count={3} size="s" />
  </Avatar.Indicator>
</Avatar>

// Пример 4: С кастомным смещением
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Indicator offset={4}>
    <Dot />
  </Avatar.Indicator>
</Avatar>

// Пример 5: Текстовый индикатор
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Indicator>
    <span className="text-xs">NEW</span>
  </Avatar.Indicator>
</Avatar>

// Пример 6: Анимированный индикатор
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Indicator>
    <span className="animate-pulse">●</span>
  </Avatar.Indicator>
</Avatar>

// Пример 7: SVG индикатор
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Indicator>
    <svg width="12" height="12">
      <circle cx="6" cy="6" r="6" fill="#22C55E" />
    </svg>
  </Avatar.Indicator>
</Avatar>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Avatar-Indicator-position-top` | Позиция top |
| `--MaxUi-Avatar-Indicator-position-right` | Позиция right |
| `--MaxUi-Avatar-Indicator-position-bottom` | Позиция bottom |
| `--MaxUi-Avatar-Indicator-offset` | Смещение от края |
| `--MaxUi-Avatar-Indicator-z-index` | 10 |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Avatar__indicator` | Корневой элемент индикатора |
| `.Avatar__indicator--top-right` | Позиция сверху справа |
| `.Avatar__indicator--bottom-right` | Позиция снизу справа |

### 🔧 Типы TypeScript
```ts
export type IndicatorPosition = 'top-right' | 'bottom-right';

export interface AvatarIndicatorProps {
  position?: IndicatorPosition;
  children: React.ReactNode;
  offset?: number;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Абсолютное позиционирование

### ⚠️ Важно
- Позиционируется абсолютно относительно Avatar.Container
- Требует явного children для рендеринга
- Z-index выше чем у Status

### ✅ Правильно
```tsx
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Indicator position="top-right">
    <Dot color="green" />
  </Avatar.Indicator>
</Avatar>
```

### ❌ Неправильно
```tsx
// ❌ Без children
<Avatar>
  <Avatar.Image src="/avatar.jpg" />
  <Avatar.Indicator />
</Avatar>

// ❌ Неправильный импорт
import { Avatar } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Avatar.Status](#avatarstatus)
- [Dot](#dot)
- [Badge](#badge)

---

## 📷 Avatar.Group

Группа аватаров с автоматическим ограничением количества и подсчетом остальных.

### 📦 Импорт
```tsx
import { Avatar } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| max | `number` | `3` | Максимум видимых аватаров |
| spacing | `number` | `-8` | Отступ между аватарами (px) |
| total | `number` | - | Общее количество (для расчета "+N") |
| size | `AvatarSize` | `'m'` | Размер всех аватаров в группе |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая группа
<Avatar.Group max={3}>
  <Avatar><Avatar.Fallback>A</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>B</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>C</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>D</Avatar.Fallback></Avatar>
</Avatar.Group>

// Пример 2: С указанием общего количества
<Avatar.Group max={3} total={10}>
  <Avatar><Avatar.Fallback>A</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>B</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>C</Avatar.Fallback></Avatar>
</Avatar.Group>

// Пример 3: С разным spacing
<Avatar.Group max={3} spacing={-4}>...</Avatar.Group>
<Avatar.Group max={3} spacing={-8}>...</Avatar.Group>
<Avatar.Group max={3} spacing={-12}>...</Avatar.Group>

// Пример 4: Маленькая группа
<Avatar.Group max={2} size="s">
  <Avatar size="s"><Avatar.Fallback>A</Avatar.Fallback></Avatar>
  <Avatar size="s"><Avatar.Fallback>B</Avatar.Fallback></Avatar>
  <Avatar size="s"><Avatar.Fallback>C</Avatar.Fallback></Avatar>
</Avatar.Group>

// Пример 5: Большая группа
<Avatar.Group max={5} size="l">
  {[1,2,3,4,5,6,7].map(i => (
    <Avatar key={i} size="l"><Avatar.Fallback>{i}</Avatar.Fallback></Avatar>
  ))}
</Avatar.Group>

// Пример 6: С кастомными стилями
<Avatar.Group max={3} className="avatar-group-custom">
  <Avatar><Avatar.Fallback>A</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>B</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>C</Avatar.Fallback></Avatar>
</Avatar.Group>

// Пример 7: Динамическая группа
const TeamAvatars = ({ members }) => (
  <Avatar.Group max={4} total={members.length}>
    {members.slice(0, 4).map(member => (
      <Avatar key={member.id}>
        <Avatar.Image src={member.avatar} alt={member.name} />
        <Avatar.Fallback>{member.initials}</Avatar.Fallback>
      </Avatar>
    ))}
  </Avatar.Group>
);
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Avatar-Group-display` | flex |
| `--MaxUi-Avatar-Group-flex-wrap` | nowrap |
| `--MaxUi-Avatar-Group-margin-left` | Отступ первого элемента |
| `--MaxUi-Avatar-Item-margin-left` | Отступ между элементами |
| `--MaxUi-Avatar-Group-rest-bg` | Фон счетчика "+N" |
| `--MaxUi-Avatar-Group-rest-color` | Цвет текста счетчика |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Avatar__group` | Корневой элемент группы |
| `.Avatar__group__item` | Элемент группы |
| `.Avatar__group__rest` | Счетчик "+N" |

### 🔧 Типы TypeScript
```ts
export interface AvatarGroupProps {
  max?: number;
  spacing?: number;
  total?: number;
  size?: AvatarSize;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается на группе
- **Адаптивность:** Горизонтальный flex-контейнер

### ⚠️ Важно
- Дети должны быть компонентами Avatar
- Отрицательный spacing создает эффект наложения
- При превышении max показывается "+N"

### ✅ Правильно
```tsx
<Avatar.Group max={3} total={10}>
  <Avatar><Avatar.Fallback>A</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>B</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>C</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>D</Avatar.Fallback></Avatar>
</Avatar.Group>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Avatar } from '@maxhub/max-ui'

// ❌ Не Avatar дети
<Avatar.Group>
  <div>A</div>
  <div>B</div>
</Avatar.Group>
```

### 🔗 Связанные компоненты
- [Avatar](#avatar)
- [Flex](#flex)

---

## 📷 Button

Универсальная кнопка с поддержкой различных вариантов, размеров и состояний.

### 📦 Импорт
```tsx
import { Button } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| variant | `'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'ghost'` | `'primary'` | Стиль кнопки |
| size | `'xs' \| 's' \| 'm' \| 'l' \| 'xl'` | `'m'` | Размер кнопки |
| disabled | `boolean` | `false` | Disabled состояние |
| loading | `boolean` | `false` | Состояние загрузки |
| fullWidth | `boolean` | `false` | Растянуть на всю ширину |
| asChild | `boolean` | `false` | Полимерфизм через Slot |
| leftIcon | `React.ReactNode` | - | Иконка слева |
| rightIcon | `React.ReactNode` | - | Иконка справа |
| type | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML type атрибут |
| href | `string` | - | Ссылка (превращает в anchor) |
| target | `string` | - | Target для ссылок |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая кнопка
<Button>Нажми меня</Button>

// Пример 2: Primary кнопка
<Button variant="primary">Primary</Button>

// Пример 3: Secondary кнопка
<Button variant="secondary">Secondary</Button>

// Пример 4: Tertiary кнопка
<Button variant="tertiary">Tertiary</Button>

// Пример 5: Danger кнопка
<Button variant="danger">Удалить</Button>

// Пример 6: Ghost кнопка
<Button variant="ghost">Ghost</Button>

// Пример 7: Кнопка с иконками
<Button leftIcon={<PlusIcon />} rightIcon={<ArrowIcon />}>
  Добавить
</Button>

// Пример 8: Кнопка загрузки
<Button loading>Загрузка...</Button>

// Пример 9: Disabled кнопка
<Button disabled>Неактивна</Button>

// Пример 10: Full width кнопка
<Button fullWidth>На всю ширину</Button>

// Пример 11: Кнопка-ссылка
<Button href="https://example.com" target="_blank">
  Перейти
</Button>

// Пример 12: Кнопка как ссылка (asChild)
<Button asChild>
  <a href="/page">Перейти на страницу</a>
</Button>

// Пример 13: Разные размеры
<Button size="xs">XS</Button>
<Button size="s">S</Button>
<Button size="m">M</Button>
<Button size="l">L</Button>
<Button size="xl">XL</Button>

// Пример 14: Submit кнопка
<Button type="submit">Отправить</Button>

// Пример 15: Кнопка с Spinner при загрузке
<Button loading leftIcon={<SaveIcon />}>
  Сохранить
</Button>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Button-primary-bg` | Фон primary |
| `--MaxUi-Button-primary-color` | Текст primary |
| `--MaxUi-Button-primary-hover-bg` | Hover фон primary |
| `--MaxUi-Button-secondary-bg` | Фон secondary |
| `--MaxUi-Button-secondary-color` | Текст secondary |
| `--MaxUi-Button-tertiary-bg` | Фон tertiary |
| `--MaxUi-Button-danger-bg` | Фон danger |
| `--MaxUi-Button-ghost-hover-bg` | Hover фон ghost |
| `--MaxUi-Button-disabled-opacity` | Прозрачность disabled |
| `--MaxUi-Button-loading-opacity` | Прозрачность loading |
| `--MaxUi-Button-height-xs` | 24px |
| `--MaxUi-Button-height-s` | 32px |
| `--MaxUi-Button-height-m` | 40px |
| `--MaxUi-Button-height-l` | 48px |
| `--MaxUi-Button-height-xl` | 56px |
| `--MaxUi-Button-border-radius` | 8px |
| `--MaxUi-Button-font-weight` | 600 |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Button` | Корневой элемент |
| `.Button--variant-{variant}` | Модификатор варианта |
| `.Button--size-{size}` | Модификатор размера |
| `.Button--disabled` | Disabled состояние |
| `.Button--loading` | Loading состояние |
| `.Button--full-width` | Full width |
| `.Button__left-icon` | Левая иконка |
| `.Button__right-icon` | Правая иконка |
| `.Button__content` | Контент кнопки |
| `.Button__spinner` | Spinner загрузки |

### 🔧 Типы TypeScript
```ts
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface ButtonProps extends SlotProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Полная поддержка через Radix Slot
- **Адаптивность:** Flexbox layout, адаптируется под контент
- **Helper функции:** `getButtonSize()` возвращает высоту и padding

### ⚠️ Важно
- При `asChild` должен быть один прямой потомок
- `loading` блокирует клики и показывает Spinner
- `href` превращает button в anchor элемент

### ✅ Правильно
```tsx
<Button variant="primary" size="m" leftIcon={<PlusIcon />}>
  Добавить
</Button>

<Button asChild>
  <a href="https://example.com">Ссылка</a>
</Button>
```

### ❌ Неправильно
```tsx
// ❌ Лишний пробел
<Button variant="primary" >

// ❌ Неправильный импорт
import { Button } from '@maxhub/max-ui'

// ❌ Несколько детей с asChild
<Button asChild>
  <a href="/">Link 1</a>
  <a href="/">Link 2</a>
</Button>
```

### 🔗 Связанные компоненты
- [IconButton](#iconbutton)
- [ToolButton](#toolbutton)
- [Spinner](#spinner)

---

## 📷 IconButton

Кнопка-иконка для действий без текстовой подписи.

### 📦 Импорт
```tsx
import { IconButton } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| variant | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'ghost'` | Стиль кнопки |
| size | `'xs' \| 's' \| 'm' \| 'l'` | `'m'` | Размер кнопки |
| disabled | `boolean` | `false` | Disabled состояние |
| loading | `boolean` | `false` | Состояние загрузки |
| asChild | `boolean` | `false` | Полимерфизм через Slot |
| href | `string` | - | Ссылка |
| target | `string` | - | Target для ссылок |
| ariaLabel | `string` | - | ARIA метка (обязательно!) |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая кнопка с иконкой
<IconButton ariaLabel="Settings">
  <SettingsIcon />
</IconButton>

// Пример 2: Ghost кнопка (по умолчанию)
<IconButton ariaLabel="Close">
  <CloseIcon />
</IconButton>

// Пример 3: Primary кнопка
<IconButton variant="primary" ariaLabel="Add">
  <PlusIcon />
</IconButton>

// Пример 4: Secondary кнопка
<IconButton variant="secondary" ariaLabel="Edit">
  <EditIcon />
</IconButton>

// Пример 5: Danger кнопка
<IconButton variant="danger" ariaLabel="Delete">
  <TrashIcon />
</IconButton>

// Пример 6: Разные размеры
<IconButton size="xs" ariaLabel="XS"><Icon /></IconButton>
<IconButton size="s" ariaLabel="S"><Icon /></IconButton>
<IconButton size="m" ariaLabel="M"><Icon /></IconButton>
<IconButton size="l" ariaLabel="L"><Icon /></IconButton>

// Пример 7: Disabled кнопка
<IconButton disabled ariaLabel="Disabled">
  <SettingsIcon />
</IconButton>

// Пример 8: Кнопка-ссылка
<IconButton href="/settings" ariaLabel="Settings">
  <SettingsIcon />
</IconButton>

// Пример 9: С Tooltip
<Tooltip content="Настройки">
  <IconButton ariaLabel="Settings">
    <SettingsIcon />
  </IconButton>
</Tooltip>

// Пример 10: Круглая кнопка (по умолчанию)
<IconButton ariaLabel="Round">
  <StarIcon />
</IconButton>

// Пример 11: С загрузкой
<IconButton loading ariaLabel="Loading">
  <SaveIcon />
</IconButton>

// Пример 12: asChild
<IconButton asChild ariaLabel="Link">
  <a href="/page"><ExternalIcon /></a>
</IconButton>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-IconButton-width-xs` | 24px |
| `--MaxUi-IconButton-width-s` | 32px |
| `--MaxUi-IconButton-width-m` | 40px |
| `--MaxUi-IconButton-width-l` | 48px |
| `--MaxUi-IconButton-height-{size}` | Аналогично width |
| `--MaxUi-IconButton-border-radius` | 50% (круглая) |
| `--MaxUi-IconButton-icon-size` | Размер иконки внутри |
| `--MaxUi-IconButton-ghost-hover-bg` | Hover фон ghost |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.IconButton` | Корневой элемент |
| `.IconButton--variant-{variant}` | Модификатор варианта |
| `.IconButton--size-{size}` | Модификатор размера |
| `.IconButton--disabled` | Disabled состояние |
| `.IconButton__icon` | Элемент иконки |

### 🔧 Типы TypeScript
```ts
export type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type IconButtonSize = 'xs' | 's' | 'm' | 'l';

export interface IconButtonProps extends SlotProps {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  loading?: boolean;
  asChild?: boolean;
  href?: string;
  target?: string;
  ariaLabel: string;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через Radix Slot
- **Адаптивность:** Квадратная форма, центрированная иконка
- **Доступность:** `ariaLabel` обязательный проп

### ⚠️ Важно
- `ariaLabel` обязателен для доступности
- Иконка должна быть единственным ребенком
- По умолчанию круглая форма

### ✅ Правильно
```tsx
<IconButton ariaLabel="Закрыть">
  <CloseIcon />
</IconButton>

<Tooltip content="Настройки">
  <IconButton ariaLabel="Settings">
    <SettingsIcon />
  </IconButton>
</Tooltip>
```

### ❌ Неправильно
```tsx
// ❌ Без ariaLabel
<IconButton>
  <SettingsIcon />
</IconButton>

// ❌ Неправильный импорт
import { IconButton } from '@maxhub/max-ui'

// ❌ С текстом
<IconButton ariaLabel="Click">Нажми</IconButton>
```

### 🔗 Связанные компоненты
- [Button](#button)
- [SvgButton](#svgbutton)
- [Tooltip](#tooltip)

---

## 📷 SvgButton

Кнопка для SVG иконок с автоматической настройкой viewBox.

### 📦 Импорт
```tsx
import { SvgButton } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| variant | `'primary' \| 'secondary' \| 'ghost'` | `'ghost'` | Стиль кнопки |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Размер кнопки |
| disabled | `boolean` | `false` | Disabled состояние |
| asChild | `boolean` | `false` | Полимерфизм через Slot |
| viewBox | `string` | `'0 0 24 24'` | SVG viewBox |
| href | `string` | - | Ссылка |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая SVG кнопка
<SvgButton>
  <svg><path d="..." /></svg>
</SvgButton>

// Пример 2: С кастомным viewBox
<SvgButton viewBox="0 0 32 32">
  <svg><path d="..." /></svg>
</SvgButton>

// Пример 3: Primary вариант
<SvgButton variant="primary">
  <svg><path d="..." /></svg>
</SvgButton>

// Example 4: Secondary вариант
<SvgButton variant="secondary">
  <svg><path d="..." /></svg>
</SvgButton>

// Пример 5: Разные размеры
<SvgButton size="s"><svg>...</svg></SvgButton>
<SvgButton size="m"><svg>...</svg></SvgButton>
<SvgButton size="l"><svg>...</svg></SvgButton>

// Пример 6: Disabled
<SvgButton disabled>
  <svg><path d="..." /></svg>
</SvgButton>

// Пример 7: Как ссылка
<SvgButton href="/page">
  <svg><path d="..." /></svg>
</SvgButton>

// Пример 8: С inline SVG
<SvgButton>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
  </svg>
</SvgButton>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-SvgButton-size-s` | 32px |
| `--MaxUi-SvgButton-size-m` | 40px |
| `--MaxUi-SvgButton-size-l` | 48px |
| `--MaxUi-SvgButton-padding` | Внутренний отступ |
| `--MaxUi-SvgButton-border-radius` | 8px |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.SvgButton` | Корневой элемент |
| `.SvgButton--variant-{variant}` | Модификатор варианта |
| `.SvgButton--size-{size}` | Модификатор размера |
| `.SvgButton svg` | SVG элемент внутри |

### 🔧 Типы TypeScript
```ts
export interface SvgButtonProps extends SlotProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  asChild?: boolean;
  viewBox?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через Radix Slot
- **Адаптивность:** SVG масштабируется под размер кнопки

### ⚠️ Важно
- Ребенок должен быть SVG элементом
- viewBox настраивается автоматически

### ✅ Правильно
```tsx
<SvgButton>
  <svg viewBox="0 0 24 24">
    <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
  </svg>
</SvgButton>
```

### ❌ Неправильно
```tsx
// ❌ Не SVG ребенок
<SvgButton>
  <div>Not SVG</div>
</SvgButton>

// ❌ Неправильный импорт
import { SvgButton } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [IconButton](#iconbutton)
- [Button](#button)

---

## 📷 ToolButton

Кнопка инструмента с опциональной подписью.

### 📦 Импорт
```tsx
import { ToolButton } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| variant | `'default' \| 'active' \| 'danger'` | `'default'` | Стиль кнопки |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Размер кнопки |
| disabled | `boolean` | `false` | Disabled состояние |
| active | `boolean` | `false` | Активное состояние |
| label | `string` | - | Текстовая подпись |
| icon | `React.ReactNode` | - | Иконка |
| asChild | `boolean` | `false` | Полимерфизм через Slot |
| href | `string` | - | Ссылка |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая кнопка с иконкой
<ToolButton icon={<BoldIcon />} />

// Пример 2: С подписью
<ToolButton icon={<ItalicIcon />} label="Курсив" />

// Пример 3: Активная кнопка
<ToolButton icon={<UnderlineIcon />} active />

// Пример 4: Danger кнопка
<ToolButton icon={<DeleteIcon />} variant="danger" />

// Пример 5: Разные размеры
<ToolButton size="s" icon={<Icon />} />
<ToolButton size="m" icon={<Icon />} />
<ToolButton size="l" icon={<Icon />} />

// Пример 6: Disabled
<ToolButton icon={<SaveIcon />} disabled />

// Пример 7: С label и tooltip
<ToolButton 
  icon={<SettingsIcon />} 
  label="Настройки"
  title="Открыть настройки"
/>

// Пример 8: Как ссылка
<ToolButton 
  href="/tools/editor" 
  icon={<EditIcon />}
  label="Редактор"
/>

// Пример 9: Группа кнопок инструментов
<div className="flex gap-1">
  <ToolButton icon={<BoldIcon />} active />
  <ToolButton icon={<ItalicIcon />} />
  <ToolButton icon={<UnderlineIcon />} />
</div>

// Пример 10: Вертикальная панель
<div className="flex flex-col gap-1">
  <ToolButton icon={<SelectIcon />} label="Выбрать" />
  <ToolButton icon={<MoveIcon />} label="Переместить" />
  <ToolButton icon={<ResizeIcon />} label="Изменить размер" />
</div>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-ToolButton-size-s` | 32px |
| `--MaxUi-ToolButton-size-m` | 40px |
| `--MaxUi-ToolButton-size-l` | 48px |
| `--MaxUi-ToolButton-active-bg` | Фон активной кнопки |
| `--MaxUi-ToolButton-active-color` | Цвет активной кнопки |
| `--MaxUi-ToolButton-danger-color` | Цвет danger варианта |
| `--MaxUi-ToolButton-label-font-size` | Размер шрифта подписи |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.ToolButton` | Корневой элемент |
| `.ToolButton--variant-{variant}` | Модификатор варианта |
| `.ToolButton--size-{size}` | Модификатор размера |
| `.ToolButton--active` | Активное состояние |
| `.ToolButton__icon` | Иконка |
| `.ToolButton__label` | Подпись |

### 🔧 Типы TypeScript
```ts
export interface ToolButtonProps extends SlotProps {
  variant?: 'default' | 'active' | 'danger';
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  active?: boolean;
  label?: string;
  icon?: React.ReactNode;
  asChild?: boolean;
  href?: string;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через Radix Slot
- **Адаптивность:** Flex layout для иконки и подписи

### ⚠️ Важно
- `icon` рекомендуется для ясности
- `active` визуально выделяет кнопку

### ✅ Правильно
```tsx
<ToolButton icon={<BoldIcon />} active label="Жирный" />
```

### ❌ Неправильно
```tsx
// ❌ Без иконки и label
<ToolButton />

// ❌ Неправильный импорт
import { ToolButton } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [IconButton](#iconbutton)
- [Button](#button)

---

## 📷 CellAction

Элемент списка с действием (клик, переход).

### 📦 Импорт
```tsx
import { CellAction } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| href | `string` | - | Ссылка для перехода |
| onClick | `() => void` | - | Обработчик клика |
| disabled | `boolean` | `false` | Disabled состояние |
| active | `boolean` | `false` | Активное состояние |
| leftAddon | `React.ReactNode` | - | Левый аддон (иконка, аватар) |
| rightAddon | `React.ReactNode` | - | Правый аддон (стрелка, бейдж) |
| title | `string` | - | Заголовок ячейки |
| subtitle | `string` | - | Подзаголовок |
| asChild | `boolean` | `false` | Полимерфизм через Slot |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая ячейка
<CellAction title="Настройки" />

// Пример 2: С подзаголовком
<CellAction 
  title="Профиль" 
  subtitle="ivan@example.com" 
/>

// Пример 3: С иконкой слева
<CellAction 
  title="Настройки"
  leftAddon={<SettingsIcon />}
/>

// Пример 4: Со стрелкой справа
<CellAction 
  title="Перейти"
  rightAddon={<ChevronRightIcon />}
/>

// Пример 5: Как ссылка
<CellAction 
  href="/settings"
  title="Настройки"
  leftAddon={<SettingsIcon />}
  rightAddon={<ChevronRightIcon />}
/>

// Пример 6: Активная ячейка
<CellAction 
  title="Текущий раздел"
  active
  leftAddon={<HomeIcon />}
/>

// Пример 7: Disabled ячейка
<CellAction 
  title="Недоступно"
  disabled
  leftAddon={<LockIcon />}
/>

// Пример 8: С аватаром
<CellAction 
  title="Профиль"
  subtitle="Онлайн"
  leftAddon={
    <Avatar size="s">
      <Avatar.Fallback>ИП</Avatar.Fallback>
    </Avatar>
  }
  rightAddon={<ChevronRightIcon />}
/>

// Пример 9: С бейджем
<CellAction 
  title="Уведомления"
  leftAddon={<BellIcon />}
  rightAddon={<Badge count={5} />}
/>

// Пример 10: С обработчиком клика
<CellAction 
  title="Действие"
  onClick={() => console.log('Clicked!')}
  leftAddon={<ActionIcon />}
/>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-CellAction-padding` | Внутренний отступ |
| `--MaxUi-CellAction-hover-bg` | Фон при hover |
| `--MaxUi-CellAction-active-bg` | Фон активного |
| `--MaxUi-CellAction-disabled-opacity` | Прозрачность disabled |
| `--MaxUi-CellAction-title-font-size` | Размер заголовка |
| `--MaxUi-CellAction-subtitle-color` | Цвет подзаголовка |
| `--MaxUi-CellAction-min-height` | Минимальная высота |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.CellAction` | Корневой элемент |
| `.CellAction--active` | Активное состояние |
| `.CellAction--disabled` | Disabled состояние |
| `.CellAction__left-addon` | Левый аддон |
| `.CellAction__right-addon` | Правый аддон |
| `.CellAction__title` | Заголовок |
| `.CellAction__subtitle` | Подзаголовок |
| `.CellAction__content` | Контейнер контента |

### 🔧 Типы TypeScript
```ts
export interface CellActionProps extends SlotProps {
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  asChild?: boolean;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через Radix Slot
- **Адаптивность:** Flex layout, адаптируется под контент

### ⚠️ Важно
- При `href` рендерится как anchor
- `onClick` игнорируется при `disabled`

### ✅ Правильно
```tsx
<CellAction 
  href="/settings"
  title="Настройки"
  leftAddon={<SettingsIcon />}
  rightAddon={<ChevronRightIcon />}
/>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { CellAction } from '@maxhub/max-ui'

// ❌ Пробелы в атрибутах
<CellAction href="/settings" title="Настройки" />
```

### 🔗 Связанные компоненты
- [CellList](#celllist)
- [CellSimple](#cellsimple)
- [CellHeader](#cellheader)

---

## 📷 CellHeader

Заголовок секции списка ячеек.

### 📦 Импорт
```tsx
import { CellHeader } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| title | `string` | - | Текст заголовка |
| action | `React.ReactNode` | - | Действие справа (кнопка, ссылка) |
| sticky | `boolean` | `false` | Липкий заголовок |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый заголовок
<CellHeader title="Основные настройки" />

// Пример 2: С действием
<CellHeader 
  title="Контакты"
  action={<Button size="s">Добавить</Button>}
/>

// Пример 3: Липкий заголовок
<CellHeader 
  title="Раздел"
  sticky
/>

// Пример 4: С иконкой действия
<CellHeader 
  title="Галерея"
  action={<IconButton ariaLabel="View all"><ViewIcon /></IconButton>}
/>

// Пример 5: С ссылкой
<CellHeader 
  title="Все сообщения"
  action={<a href="/messages">Показать все</a>}
/>

// Пример 6: Минималистичный
<CellHeader title="Раздел" />

// Пример 7: С кастомными стилями
<CellHeader 
  title="Заголовок"
  className="custom-header"
/>

// Пример 8: В списке
<CellList>
  <CellHeader title="Настройки аккаунта" />
  <CellAction title="Профиль" />
  <CellAction title="Безопасность" />
</CellList>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-CellHeader-padding` | Внутренний отступ |
| `--MaxUi-CellHeader-font-size` | Размер шрифта |
| `--MaxUi-CellHeader-font-weight` | Жирность |
| `--MaxUi-CellHeader-color` | Цвет текста |
| `--MaxUi-CellHeader-sticky-top` | Позиция sticky |
| `--MaxUi-CellHeader-bg` | Цвет фона |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.CellHeader` | Корневой элемент |
| `.CellHeader--sticky` | Липкий режим |
| `.CellHeader__title` | Заголовок |
| `.CellHeader__action` | Действие |

### 🔧 Типы TypeScript
```ts
export interface CellHeaderProps {
  title: string;
  action?: React.ReactNode;
  sticky?: boolean;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Flex layout с space-between

### ⚠️ Важно
- `title` обязательный проп
- `sticky` требует родительского контейнера с overflow

### ✅ Правильно
```tsx
<CellHeader 
  title="Настройки"
  action={<Button size="s">Изменить</Button>}
/>
```

### ❌ Неправильно
```tsx
// ❌ Без title
<CellHeader action={<Button>Edit</Button>} />

// ❌ Неправильный импорт
import { CellHeader } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [CellList](#celllist)
- [CellAction](#cellaction)

---

## 📷 CellInput

Ячейка с полем ввода.

### 📦 Импорт
```tsx
import { CellInput } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| label | `string` | - | Метка поля |
| value | `string` | - | Значение |
| onChange | `(value: string) => void` | - | Обработчик изменения |
| placeholder | `string` | - | Плейсхолдер |
| type | `'text' \| 'password' \| 'email' \| 'tel' \| 'number'` | `'text'` | Тип input |
| disabled | `boolean` | `false` | Disabled состояние |
| error | `string` | - | Текст ошибки |
| leftAddon | `React.ReactNode` | - | Левый аддон |
| rightAddon | `React.ReactNode` | - | Правый аддон |
| maxLength | `number` | - | Максимальная длина |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый input
<CellInput 
  label="Имя"
  value={name}
  onChange={setName}
/>

// Пример 2: С плейсхолдером
<CellInput 
  label="Email"
  placeholder="example@mail.com"
  value={email}
  onChange={setEmail}
/>

// Пример 3: Password поле
<CellInput 
  label="Пароль"
  type="password"
  value={password}
  onChange={setPassword}
/>

// Пример 4: С ошибкой
<CellInput 
  label="Email"
  value={email}
  onChange={setEmail}
  error="Некорректный email"
/>

// Пример 5: С левой иконкой
<CellInput 
  label="Поиск"
  leftAddon={<SearchIcon />}
  value={query}
  onChange={setQuery}
/>

// Пример 6: С правой кнопкой очистки
<CellInput 
  label="Текст"
  value={text}
  onChange={setText}
  rightAddon={text && <ClearButton onClick={() => setText('')} />}
/>

// Пример 7: Disabled поле
<CellInput 
  label="ID"
  value="12345"
  disabled
/>

// Пример 8: С ограничением длины
<CellInput 
  label="Код"
  maxLength={6}
  value={code}
  onChange={setCode}
/>

// Пример 9: Телефон
<CellInput 
  label="Телефон"
  type="tel"
  placeholder="+7 (___) ___-__-__"
  value={phone}
  onChange={setPhone}
/>

// Пример 10: Число
<CellInput 
  label="Возраст"
  type="number"
  value={age}
  onChange={setAge}
/>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-CellInput-padding` | Внутренний отступ |
| `--MaxUi-CellInput-label-font-size` | Размер label |
| `--MaxUi-CellInput-input-font-size` | Размер input |
| `--MaxUi-CellInput-error-color` | Цвет ошибки |
| `--MaxUi-CellInput-border-color` | Цвет границы |
| `--MaxUi-CellInput-focus-border-color` | Цвет границы при фокусе |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.CellInput` | Корневой элемент |
| `.CellInput__label` | Метка |
| `.CellInput__input` | Поле ввода |
| `.CellInput__error` | Сообщение ошибки |
| `.CellInput__left-addon` | Левый аддон |
| `.CellInput__right-addon` | Правый аддон |
| `.CellInput--error` | Состояние ошибки |
| `.CellInput--disabled` | Disabled состояние |

### 🔧 Типы TypeScript
```ts
export type CellInputType = 'text' | 'password' | 'email' | 'tel' | 'number';

export interface CellInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: CellInputType;
  disabled?: boolean;
  error?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  maxLength?: number;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Full width input

### ⚠️ Важно
- Контролируемый компонент (требует value + onChange)
- `error` визуально выделяет поле красным

### ✅ Правильно
```tsx
<CellInput 
  label="Email"
  value={email}
  onChange={setEmail}
  placeholder="example@mail.com"
/>
```

### ❌ Неправильно
```tsx
// ❌ Неконтролируемый
<CellInput label="Name" onChange={console.log} />

// ❌ Неправильный импорт
import { CellInput } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Input](#input)
- [CellAction](#cellaction)
- [ClearableInput](#clearableinput)

---

## 📷 CellList

Контейнер для списка ячеек.

### 📦 Импорт
```tsx
import { CellList } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| variant | `'default' \| 'bordered' \| 'inset'` | `'default'` | Стиль списка |
| separator | `boolean` | `true` | Показывать разделители |
| className | `string` | `''` | Дополнительные классы |
| children | `React.ReactNode` | - | Ячейки списка |

### 🎨 Примеры

```tsx
// Пример 1: Базовый список
<CellList>
  <CellAction title="Профиль" />
  <CellAction title="Настройки" />
  <CellAction title="Помощь" />
</CellList>

// Пример 2: С разделителями (по умолчанию)
<CellList separator>
  <CellAction title="Item 1" />
  <CellAction title="Item 2" />
</CellList>

// Пример 3: Без разделителей
<CellList separator={false}>
  <CellAction title="Item 1" />
  <CellAction title="Item 2" />
</CellList>

// Пример 4: Bordered вариант
<CellList variant="bordered">
  <CellAction title="Item 1" />
  <CellAction title="Item 2" />
</CellList>

// Пример 5: Inset вариант
<CellList variant="inset">
  <CellAction title="Item 1" />
  <CellAction title="Item 2" />
</CellList>

// Пример 6: С заголовками секций
<CellList>
  <CellHeader title="Аккаунт" />
  <CellAction title="Профиль" />
  <CellAction title="Безопасность" />
  <CellHeader title="Приложение" />
  <CellAction title="Уведомления" />
  <CellAction title="Приватность" />
</CellList>

// Пример 7: Сложный список
<CellList>
  <CellAction 
    title="Профиль"
    subtitle="ivan@example.com"
    leftAddon={<Avatar size="s"><Avatar.Fallback>ИП</Avatar.Fallback></Avatar>}
    rightAddon={<ChevronRightIcon />}
  />
  <CellAction 
    title="Настройки"
    leftAddon={<SettingsIcon />}
    rightAddon={<ChevronRightIcon />}
  />
</CellList>

// Пример 8: С кастомными стилями
<CellList className="custom-list">
  <CellAction title="Item" />
</CellList>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-CellList-border-radius` | Радиус скругления |
| `--MaxUi-CellList-bg` | Цвет фона |
| `--MaxUi-CellList-separator-color` | Цвет разделителя |
| `--MaxUi-CellList-bordered-border` | Граница bordered |
| `--MaxUi-CellList-inset-padding` | Padding inset |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.CellList` | Корневой элемент |
| `.CellList--variant-{variant}` | Модификатор варианта |
| `.CellList--separator` | С разделителями |
| `.CellList__item` | Элемент списка |

### 🔧 Типы TypeScript
```ts
export interface CellListProps {
  variant?: 'default' | 'bordered' | 'inset';
  separator?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Блочный контейнер

### ⚠️ Важно
- Дети должны быть Cell* компонентами
- `separator` добавляет divider между ячейками

### ✅ Правильно
```tsx
<CellList separator>
  <CellAction title="Профиль" />
  <CellAction title="Настройки" />
</CellList>
```

### ❌ Неправильно
```tsx
// ❌ Не Cell* дети
<CellList>
  <div>Not a cell</div>
</CellList>

// ❌ Неправильный импорт
import { CellList } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [CellAction](#cellaction)
- [CellHeader](#cellheader)
- [CellSimple](#cellsimple)

---

## 📷 CellSimple

Простая ячейка списка без дополнительных возможностей.

### 📦 Импорт
```tsx
import { CellSimple } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| title | `string` | - | Заголовок ячейки |
| subtitle | `string` | - | Подзаголовок |
| leftAddon | `React.ReactNode` | - | Левый аддон |
| rightAddon | `React.ReactNode` | - | Правый аддон |
| onClick | `() => void` | - | Обработчик клика |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая ячейка
<CellSimple title="Простой элемент" />

// Пример 2: С подзаголовком
<CellSimple 
  title="Заголовок"
  subtitle="Описание элемента"
/>

// Пример 3: С иконкой слева
<CellSimple 
  title="Элемент"
  leftAddon={<FileIcon />}
/>

// Пример 4: С контентом справа
<CellSimple 
  title="Статус"
  rightAddon={<Badge>Active</Badge>}
/>

// Пример 5: Кликабельная
<CellSimple 
  title="Действие"
  onClick={() => console.log('Clicked')}
/>

// Пример 6: С аватаром
<CellSimple 
  title="Пользователь"
  subtitle="Онлайн"
  leftAddon={
    <Avatar size="s">
      <Avatar.Fallback>П</Avatar.Fallback>
    </Avatar>
  }
/>

// Пример 7: Многострочный subtitle
<CellSimple 
  title="Сообщение"
  subtitle="Длинный текст описания, который может занимать несколько строк"
/>

// Пример 8: С кастомным правым аддоном
<CellSimple 
  title="Цена"
  rightAddon={<span className="font-bold">$99</span>}
/>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-CellSimple-padding` | Внутренний отступ |
| `--MaxUi-CellSimple-title-font-size` | Размер заголовка |
| `--MaxUi-CellSimple-subtitle-color` | Цвет подзаголовка |
| `--MaxUi-CellSimple-min-height` | Минимальная высота |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.CellSimple` | Корневой элемент |
| `.CellSimple__title` | Заголовок |
| `.CellSimple__subtitle` | Подзаголовок |
| `.CellSimple__left-addon` | Левый аддон |
| `.CellSimple__right-addon` | Правый аддон |

### 🔧 Типы TypeScript
```ts
export interface CellSimpleProps {
  title?: string;
  subtitle?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Flex layout

### ⚠️ Важно
- Упрощенная версия CellAction (без href, disabled)
- Для статических элементов списка

### ✅ Правильно
```tsx
<CellSimple 
  title="Информация"
  subtitle="Дополнительные детали"
  leftAddon={<InfoIcon />}
/>
```

### ❌ Неправильно
```tsx
// ❌ Без контента
<CellSimple />

// ❌ Неправильный импорт
import { CellSimple } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [CellAction](#cellaction)
- [CellList](#celllist)

---

## 📷 ClearableInput

Поле ввода с кнопкой очистки.

### 📦 Импорт
```tsx
import { ClearableInput } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| value | `string` | - | Значение |
| onChange | `(value: string) => void` | - | Обработчик изменения |
| placeholder | `string` | - | Плейсхолдер |
| disabled | `boolean` | `false` | Disabled состояние |
| error | `string` | - | Текст ошибки |
| onClear | `() => void` | - | Обработчик очистки |
| clearIcon | `React.ReactNode` | - | Иконка очистки |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый input с очисткой
<ClearableInput 
  value={search}
  onChange={setSearch}
/>

// Пример 2: С плейсхолдером
<ClearableInput 
  value={query}
  onChange={setQuery}
  placeholder="Поиск..."
/>

// Пример 3: С обработчиком очистки
<ClearableInput 
  value={text}
  onChange={setText}
  onClear={() => console.log('Cleared!')}
/>

// Пример 4: Disabled
<ClearableInput 
  value="Readonly"
  onChange={setValue}
  disabled
/>

// Пример 5: С ошибкой
<ClearableInput 
  value={invalid}
  onChange={setInvalid}
  error="Некорректное значение"
/>

// Пример 6: С кастомной иконкой
<ClearableInput 
  value={text}
  onChange={setText}
  clearIcon={<CloseCircleIcon />}
/>

// Пример 7: В форме
<form onSubmit={handleSubmit}>
  <ClearableInput 
    value={formData.name}
    onChange={(v) => setFormData({...formData, name: v})}
    placeholder="Введите имя"
  />
</form>

// Пример 8: С левой иконкой поиска
<ClearableInput 
  value={search}
  onChange={setSearch}
  placeholder="Поиск"
  leftAddon={<SearchIcon />}
/>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-ClearableInput-padding` | Внутренний отступ |
| `--MaxUi-ClearableInput-clear-button-size` | Размер кнопки очистки |
| `--MaxUi-ClearableInput-error-color` | Цвет ошибки |
| `--MaxUi-ClearableInput-border-color` | Цвет границы |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.ClearableInput` | Корневой элемент |
| `.ClearableInput__input` | Поле ввода |
| `.ClearableInput__clear` | Кнопка очистки |
| `.ClearableInput--error` | Состояние ошибки |
| `.ClearableInput--disabled` | Disabled состояние |

### 🔧 Типы TypeScript
```ts
export interface ClearableInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  onClear?: () => void;
  clearIcon?: React.ReactNode;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Full width

### ⚠️ Важно
- Контролируемый компонент
- Кнопка очистки появляется только при наличии значения

### ✅ Правильно
```tsx
<ClearableInput 
  value={search}
  onChange={setSearch}
  placeholder="Поиск..."
/>
```

### ❌ Неправильно
```tsx
// ❌ Неконтролируемый
<ClearableInput onChange={console.log} />

// ❌ Неправильный импорт
import { ClearableInput } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Input](#input)
- [SearchInput](#searchinput)
- [CellInput](#cellinput)

---

## 📷 Container

Контейнер-обертка с максимальной шириной и центрированием.

### 📦 Импорт
```tsx
import { Container } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| size | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Максимальная ширина |
| padded | `boolean` | `true` | Добавлять padding |
| centered | `boolean` | `true` | Центрировать контент |
| asChild | `boolean` | `false` | Полимерфизм через Slot |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый контейнер
<Container>
  <p>Контент по центру</p>
</Container>

// Пример 2: Малый размер
<Container size="sm">
  <p>Узкий контент</p>
</Container>

// Пример 3: Большой размер
<Container size="lg">
  <p>Широкий контент</p>
</Container>

// Example 4: На всю ширину
<Container size="full">
  <p>Full width</p>
</Container>

// Пример 5: Без padding
<Container padded={false}>
  <p>Без отступов</p>
</Container>

// Пример 6: Без центрирования
<Container centered={false}>
  <p>Слева</p>
</Container>

// Пример 7: asChild
<Container asChild>
  <main>
    <p>Main content</p>
  </main>
</Container>

// Пример 8: С кастомными классами
<Container className="my-container">
  <p>Custom styles</p>
</Container>

// Пример 9: Вложенные контейнеры
<Container size="xl">
  <Container size="md">
    <p>Nested</p>
  </Container>
</Container>

// Пример 10: Responsive layout
<Container size="lg">
  <Grid cols={3}>...</Grid>
</Container>
```

### 🎨 CSS-переменные
| Переменная | Описание | Значение |
|------------|----------|----------|
| `--MaxUi-Container-max-width-sm` | 640px |
| `--MaxUi-Container-max-width-md` | 768px |
| `--MaxUi-Container-max-width-lg` | 1024px |
| `--MaxUi-Container-max-width-xl` | 1280px |
| `--MaxUi-Container-padding-x` | 16px |
| `--MaxUi-Container-margin-x` | auto |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Container` | Корневой элемент |
| `.Container--size-{size}` | Модификатор размера |
| `.Container--padded` | С padding |
| `.Container--centered` | Центрированный |

### 🔧 Типы TypeScript
```ts
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends SlotProps {
  size?: ContainerSize;
  padded?: boolean;
  centered?: boolean;
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через Radix Slot
- **Адаптивность:** Max-width с auto margin

### ⚠️ Важно
- `size="full"` убирает ограничение ширины
- По умолчанию центрирован с padding

### ✅ Правильно
```tsx
<Container size="lg">
  <h1>Заголовок страницы</h1>
  <p>Основной контент</p>
</Container>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Container } from '@maxhub/max-ui'

// ❌ Лишний пробел
<Container size="lg" >
```

### 🔗 Связанные компоненты
- [Panel](#panel)
- [Flex](#flex)
- [Grid](#grid)

---

## 📷 Counter

Счетчик с кнопками увеличения/уменьшения значения.

### 📦 Импорт
```tsx
import { Counter } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| value | `number` | - | Текущее значение |
| onChange | `(value: number) => void` | - | Обработчик изменения |
| min | `number` | `0` | Минимальное значение |
| max | `number` | `Infinity` | Максимальное значение |
| step | `number` | `1` | Шаг изменения |
| disabled | `boolean` | `false` | Disabled состояние |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Размер счетчика |
| showButtons | `boolean` | `true` | Показывать кнопки |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый счетчик
<Counter value={count} onChange={setCount} />

// Пример 2: С ограничениями
<Counter 
  value={count}
  onChange={setCount}
  min={0}
  max={10}
/>

// Пример 3: С шагом
<Counter 
  value={price}
  onChange={setPrice}
  step={10}
/>

// Пример 4: Разные размеры
<Counter size="s" value={1} onChange={set1} />
<Counter size="m" value={2} onChange={set2} />
<Counter size="l" value={3} onChange={set3} />

// Пример 5: Disabled
<Counter value={5} onChange={setCount} disabled />

// Пример 6: Без кнопок (только display)
<Counter 
  value={count}
  onChange={setCount}
  showButtons={false}
/>

// Пример 7: С отрицательными значениями
<Counter 
  value={temp}
  onChange={setTemp}
  min={-50}
  max={50}
/>

// Пример 8: В форме
<Counter 
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={100}
  label="Количество"
/>

// Пример 9: С кастомными стилями
<Counter 
  value={count}
  onChange={setCount}
  className="custom-counter"
/>

// Пример 10: Динамический шаг
<Counter 
  value={value}
  onChange={setValue}
  step={0.5}
  min={0}
/>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Counter-height-s` | 32px |
| `--MaxUi-Counter-height-m` | 40px |
| `--MaxUi-Counter-height-l` | 48px |
| `--MaxUi-Counter-button-size` | Размер кнопок |
| `--MaxUi-Counter-input-width` | Ширина input |
| `--MaxUi-Counter-border-radius` | Радиус скругления |
| `--MaxUi-Counter-disabled-opacity` | Прозрачность disabled |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Counter` | Корневой элемент |
| `.Counter--size-{size}` | Модификатор размера |
| `.Counter__decrement` | Кнопка уменьшения |
| `.Counter__input` | Поле значения |
| `.Counter__increment` | Кнопка увеличения |
| `.Counter--disabled` | Disabled состояние |

### 🔧 Типы TypeScript
```ts
export interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: 's' | 'm' | 'l';
  showButtons?: boolean;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Flex layout с кнопками

### ⚠️ Важно
- Контролируемый компонент
- Кнопки блокируются при достижении min/max

### ✅ Правильно
```tsx
<Counter 
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={10}
/>
```

### ❌ Неправильно
```tsx
// ❌ Неконтролируемый
<Counter onChange={console.log} />

// ❌ Неправильный импорт
import { Counter } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Input](#input)
- [Button](#button)

---

## 📷 Dot

Маленькая точка-индикатор.

### 📦 Импорт
```tsx
import { Dot } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| color | `string` | `'currentColor'` | Цвет точки |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Размер точки |
| animated | `boolean` | `false` | Анимация пульсации |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая точка
<Dot />

// Пример 2: Зеленая (онлайн)
<Dot color="green" />

// Пример 3: Красная (ошибка)
<Dot color="red" />

// Пример 4: Разные размеры
<Dot size="s" />
<Dot size="m" />
<Dot size="l" />

// Пример 5: Анимированная
<Dot animated color="green" />

// Пример 6: Кастомный цвет
<Dot color="#FF5733" />

// Пример 7: В составе статуса
<span className="flex items-center gap-2">
  <Dot color="green" />
  <span>Онлайн</span>
</span>

// Пример 8: Как маркер списка
<ul>
  <li className="flex items-center gap-2">
    <Dot color="blue" />
    <span>Элемент 1</span>
  </li>
</ul>

// Пример 9: В Avatar.Status
<Avatar>
  <Avatar.Image src="/avatar.jpg" />
  <Avatar.Indicator>
    <Dot color="green" size="s" />
  </Avatar.Indicator>
</Avatar>

// Пример 10: Множественные точки
<div className="flex gap-1">
  <Dot color="red" />
  <Dot color="yellow" />
  <Dot color="green" />
</div>
```

### 🎨 CSS-переменные
| Переменная | Описание | Значение |
|------------|----------|----------|
| `--MaxUi-Dot-size-s` | 6px |
| `--MaxUi-Dot-size-m` | 8px |
| `--MaxUi-Dot-size-l` | 12px |
| `--MaxUi-Dot-border-radius` | 50% |
| `--MaxUi-Dot-animation-duration` | 1s |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Dot` | Корневой элемент |
| `.Dot--size-{size}` | Модификатор размера |
| `.Dot--animated` | Анимированная |

### 🔧 Типы TypeScript
```ts
export interface DotProps {
  color?: string;
  size?: 's' | 'm' | 'l';
  animated?: boolean;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Фиксированные размеры

### ⚠️ Важно
- По умолчанию использует currentColor
- `animated` добавляет CSS пульсацию

### ✅ Правильно
```tsx
<Dot color="green" size="m" />
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Dot } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Avatar.Status](#avatarstatus)
- [Avatar.Indicator](#avatarindicator)

---

## 📷 EllipsisText

Текст с многоточием при переполнении.

### 📦 Импорт
```tsx
import { EllipsisText } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| children | `string` | - | Текст содержимого |
| maxLines | `number` | `1` | Максимум строк |
| tooltip | `boolean` | `true` | Показывать tooltip при обрезке |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Однострочный текст
<EllipsisText>
  Длинный текст который не помещается
</EllipsisText>

// Пример 2: Многострочный
<EllipsisText maxLines={3}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</EllipsisText>

// Пример 3: Без tooltip
<EllipsisText tooltip={false}>
  Обрезанный текст без подсказки
</EllipsisText>

// Пример 4: С фиксированной шириной
<div style={{ width: 200 }}>
  <EllipsisText>Очень длинный заголовок</EllipsisText>
</div>

// Пример 5: В карточке
<Card>
  <EllipsisText maxLines={2}>
    Название товара которое может быть очень длинным
  </EllipsisText>
</Card>

// Пример 6: С кастомными стилями
<EllipsisText className="text-lg font-bold">
  Стильный текст
</EllipsisText>

// Пример 7: В таблице
<Table.Cell>
  <EllipsisText maxLines={1}>
    Длинное описание ячейки таблицы
  </EllipsisText>
</Table.Cell>

// Пример 8: В списке
<CellSimple 
  title={
    <EllipsisText>Длинный заголовок элемента</EllipsisText>
  }
/>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-EllipsisText-overflow` | hidden |
| `--MaxUi-EllipsisText-text-overflow` | ellipsis |
| `--MaxUi-EllipsisText-white-space` | nowrap (для 1 линии) |
| `--MaxUi-EllipsisText-display` | -webkit-box (для multiline) |
| `--MaxUi-EllipsisText-line-clamp` | maxLines |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.EllipsisText` | Корневой элемент |
| `.EllipsisText--multiline` | Многострочный режим |

### 🔧 Типы TypeScript
```ts
export interface EllipsisTextProps {
  children: string;
  maxLines?: number;
  tooltip?: boolean;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** CSS text-overflow / line-clamp

### ⚠️ Важно
- Работает только со строковым контентом
- `maxLines > 1` использует -webkit-line-clamp

### ✅ Правильно
```tsx
<div style={{ width: 200 }}>
  <EllipsisText>Длинный текст</EllipsisText>
</div>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { EllipsisText } from '@maxhub/max-ui'

// ❌ Без ограничения ширины родителя
<EllipsisText>Текст</EllipsisText>
```

### 🔗 Связанные компоненты
- [Typography.Body](#body)
- [Tooltip](#tooltip)

---

## 📷 Flex

Flexbox контейнер для layout.

### 📦 Импорт
```tsx
import { Flex } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| direction | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'` | `'row'` | Направление flex |
| justify | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Выравнивание по оси |
| align | `'start' \| 'end' \| 'center' \| 'stretch' \| 'baseline'` | `'stretch'` | Выравнивание поперек |
| wrap | `boolean` | `false` | Перенос элементов |
| gap | `number \| string` | `0` | Отступ между элементами |
| asChild | `boolean` | `false` | Полимерфизм через Slot |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый row
<Flex>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Flex>

// Пример 2: Column направление
<Flex direction="column">
  <div>Верх</div>
  <div>Середина</div>
  <div>Низ</div>
</Flex>

// Пример 3: Центрирование
<Flex justify="center" align="center">
  <div>По центру</div>
</Flex>

// Пример 4: Space between
<Flex justify="between">
  <div>Слева</div>
  <div>Справа</div>
</Flex>

// Пример 5: С отступами
<Flex gap={16}>
  <div>Element 1</div>
  <div>Element 2</div>
</Flex>

// Пример 6: С переносом
<Flex wrap gap={8}>
  {[1,2,3,4,5,6].map(i => <div key={i}>{i}</div>)}
</Flex>

// Пример 7: Row reverse
<Flex direction="row-reverse">
  <div>Последний станет первым</div>
</Flex>

// Пример 8: asChild
<Flex asChild>
  <nav>
    <a>Link 1</a>
    <a>Link 2</a>
  </nav>
</Flex>

// Пример 9: Сложный layout
<Flex direction="column" gap={16}>
  <Flex justify="between" align="center">
    <h1>Заголовок</h1>
    <Button>Действие</Button>
  </Flex>
  <Flex gap={8}>
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
  </Flex>
</Flex>

// Пример 10: Align baseline
<Flex align="baseline" gap={8}>
  <span className="text-xl">Большой</span>
  <span className="text-sm">Маленький</span>
</Flex>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Flex-gap` | Вычисляется из gap prop |
| `--MaxUi-Flex-direction` | Из direction prop |
| `--MaxUi-Flex-justify` | Из justify prop |
| `--MaxUi-Flex-align` | Из align prop |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Flex` | Корневой элемент |
| `.Flex--direction-{dir}` | Модификатор направления |
| `.Flex--wrap` | С переносом |

### 🔧 Типы TypeScript
```ts
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlign = 'start' | 'end' | 'center' | 'stretch' | 'baseline';

export interface FlexProps extends SlotProps {
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: boolean;
  gap?: number | string;
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через Radix Slot
- **Адаптивность:** Полный flexbox API

### ⚠️ Важно
- `gap` принимает числа (px) или строки (rem, em)
- Преобразует пропы в CSS классы

### ✅ Правильно
```tsx
<Flex justify="between" align="center" gap={16}>
  <h1>Logo</h1>
  <nav>Links</nav>
</Flex>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Flex } from '@maxhub/max-ui'

// ❌ Лишние пробелы
<Flex justify="center" >
```

### 🔗 Связанные компоненты
- [Grid](#grid)
- [Container](#container)

---

## 📷 Grid

CSS Grid контейнер для двумерного layout.

### 📦 Импорт
```tsx
import { Grid } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| cols | `number \| string` | `1` | Количество колонок |
| rows | `number \| string` | `'auto'` | Количество рядов |
| gap | `number \| string` | `0` | Отступ между ячейками |
| colGap | `number \| string` | - | Горизонтальный отступ |
| rowGap | `number \| string` | - | Вертикальный отступ |
| asChild | `boolean` | `false` | Полимерфизм через Slot |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая сетка
<Grid cols={3}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</Grid>

// Пример 2: С отступами
<Grid cols={3} gap={16}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
</Grid>

// Пример 3: Раздельные отступы
<Grid cols={2} colGap={24} rowGap={32}>
  <div>Item</div>
</Grid>

// Пример 4: Responsive cols (строка)
<Grid cols="repeat(auto-fill, minmax(200px, 1fr))">
  <Card>Responsive</Card>
</Grid>

// Пример 5: С указанием рядов
<Grid cols={2} rows={3}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</Grid>

// Пример 6: asChild
<Grid asChild cols={3}>
  <section>
    <article>1</article>
    <article>2</article>
  </section>
</Grid>

// Пример 7: Карточки товаров
<Grid cols={4} gap={24}>
  {products.map(p => (
    <ProductCard key={p.id} product={p} />
  ))}
</Grid>

// Пример 8: Галерея
<Grid cols="repeat(auto-fit, minmax(150px, 1fr))" gap={8}>
  {images.map(img => <img key={img.src} src={img.src} />)}
</Grid>

// Пример 9: Dashboard layout
<Grid cols={12} gap={16}>
  <div className="col-span-8">Main</div>
  <div className="col-span-4">Sidebar</div>
</Grid>

// Пример 10: Одна колонка (список)
<Grid cols={1} gap={8}>
  <CellAction title="Item 1" />
  <CellAction title="Item 2" />
</Grid>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Grid-grid-template-columns` | Из cols prop |
| `--MaxUi-Grid-grid-template-rows` | Из rows prop |
| `--MaxUi-Grid-gap` | Общий gap |
| `--MaxUi-Grid-column-gap` | colGap |
| `--MaxUi-Grid-row-gap` | rowGap |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Grid` | Корневой элемент |
| `.Grid__item` | Элемент сетки |

### 🔧 Типы TypeScript
```ts
export interface GridProps extends SlotProps {
  cols?: number | string;
  rows?: number | string;
  gap?: number | string;
  colGap?: number | string;
  rowGap?: number | string;
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через Radix Slot
- **Адаптивность:** Полный CSS Grid API

### ⚠️ Важно
- `cols` может быть числом или CSS строкой
- Для responsive используйте строковые значения

### ✅ Правильно
```tsx
<Grid cols={3} gap={16}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
</Grid>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Grid } from '@maxhub/max-ui'

// ❌ Без детей
<Grid cols={3} />
```

### 🔗 Связанные компоненты
- [Flex](#flex)
- [Container](#container)

---

## 📷 Input

Базовое поле ввода текста.

### 📦 Импорт
```tsx
import { Input } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| value | `string` | - | Значение |
| onChange | `(e: ChangeEvent) => void` | - | Обработчик изменения |
| type | `'text' \| 'password' \| 'email' \| 'tel' \| 'number' \| 'url'` | `'text'` | Тип input |
| placeholder | `string` | - | Плейсхолдер |
| disabled | `boolean` | `false` | Disabled состояние |
| error | `boolean` | `false` | Состояние ошибки |
| leftAddon | `React.ReactNode` | - | Левый аддон |
| rightAddon | `React.ReactNode` | - | Правый аддон |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Размер |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый input
<Input value={text} onChange={setText} />

// Пример 2: С плейсхолдером
<Input 
  value={email}
  onChange={setEmail}
  placeholder="example@mail.com"
/>

// Пример 3: Password
<Input 
  type="password"
  value={password}
  onChange={setPassword}
/>

// Пример 4: С ошибкой
<Input 
  value={invalid}
  onChange={setInvalid}
  error
/>

// Пример 5: Disabled
<Input value="Readonly" onChange={setValue} disabled />

// Пример 6: С иконкой слева
<Input 
  value={search}
  onChange={setSearch}
  leftAddon={<SearchIcon />}
/>

// Пример 7: С кнопкой справа
<Input 
  value={text}
  onChange={setText}
  rightAddon={<Button size="s">Go</Button>}
/>

// Пример 8: Разные размеры
<Input size="s" value="Small" onChange={setS} />
<Input size="m" value="Medium" onChange={setM} />
<Input size="l" value="Large" onChange={setL} />

// Пример 9: Email тип
<Input 
  type="email"
  value={email}
  onChange={setEmail}
  placeholder="email@example.com"
/>

// Пример 10: Number тип
<Input 
  type="number"
  value={age}
  onChange={setAge}
  placeholder="Возраст"
/>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Input-height-s` | 32px |
| `--MaxUi-Input-height-m` | 40px |
| `--MaxUi-Input-height-l` | 48px |
| `--MaxUi-Input-border-color` | Цвет границы |
| `--MaxUi-Input-focus-border-color` | Цвет при фокусе |
| `--MaxUi-Input-error-border-color` | Цвет ошибки |
| `--MaxUi-Input-disabled-bg` | Фон disabled |
| `--MaxUi-Input-border-radius` | 8px |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Input` | Корневой элемент |
| `.Input--size-{size}` | Модификатор размера |
| `.Input--error` | Состояние ошибки |
| `.Input--disabled` | Disabled состояние |
| `.Input__input` | Нативный input |
| `.Input__left-addon` | Левый аддон |
| `.Input__right-addon` | Правый аддон |

### 🔧 Типы TypeScript
```ts
export type InputType = 'text' | 'password' | 'email' | 'tel' | 'number' | 'url';

export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: InputType;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  size?: 's' | 'm' | 'l';
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Full width

### ⚠️ Важно
- Контролируемый компонент
- `onChange` получает событие, а не значение

### ✅ Правильно
```tsx
<Input 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
/>
```

### ❌ Неправильно
```tsx
// ❌ Неконтролируемый
<Input onChange={console.log} />

// ❌ Неправильный импорт
import { Input } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [ClearableInput](#clearableinput)
- [SearchInput](#searchinput)
- [CellInput](#cellinput)

---

## 📷 MaxUI

Провайдер темы и глобальных настроек MAX UI.

### 📦 Импорт
```tsx
import { MaxUI } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| theme | `'light' \| 'dark' \| 'system'` | `'light'` | Тема приложения |
| locale | `string` | `'ru'` | Локаль |
| children | `React.ReactNode` | - | Дочерние компоненты |
| className | `string` | `''` | Класс на root элемент |

### 🎨 Примеры

```tsx
// Пример 1: Базовый провайдер
<MaxUI>
  <App />
</MaxUI>

// Пример 2: С темной темой
<MaxUI theme="dark">
  <App />
</MaxUI>

// Пример 3: Системная тема
<MaxUI theme="system">
  <App />
</MaxUI>

// Пример 4: С локалью
<MaxUI locale="en">
  <App />
</MaxUI>

// Пример 5: Вложенные провайдеры
<MaxUI theme="light">
  <MaxUI.Provider theme="dark">
    <DarkSection />
  </MaxUI.Provider>
</MaxUI>

// Пример 6: С кастомным классом
<MaxUI className="my-app">
  <App />
</MaxUI>

// Пример 7: Динамическая тема
const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <MaxUI theme={theme}>
      <ThemeToggle onChange={setTheme} />
    </MaxUI>
  );
};

// Пример 8: Использование хука
const Component = () => {
  const { theme, locale } = useMaxUI();
  return <div>{theme}</div>;
};
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-theme-bg` | Фон темы |
| `--MaxUi-theme-text` | Текст темы |
| `--MaxUi-theme-primary` | Primary цвет темы |
| `--MaxUi-theme-surface` | Цвет поверхности |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.MaxUI` | Корневой элемент |
| `.MaxUI--theme-{theme}` | Модификатор темы |
| `.MaxUI--locale-{locale}` | Модификатор локали |

### 🔧 Типы TypeScript
```ts
export type Theme = 'light' | 'dark' | 'system';

export interface MaxUIProps {
  theme?: Theme;
  locale?: string;
  children: React.ReactNode;
  className?: string;
}

export interface MaxUIContextValue {
  theme: Theme;
  locale: string;
  setTheme: (theme: Theme) => void;
}
```

### 📱 Особенности
- **Context API:** `MaxUIContext` с темой и локалью
- **asChild:** Не применяется
- **Адаптивность:** Глобальные CSS переменные

### ⚠️ Важно
- Должен оборачивать все компоненты MAX UI
- `theme="system"` следует за ОС

### ✅ Правильно
```tsx
<MaxUI theme="light" locale="ru">
  <App />
</MaxUI>
```

### ❌ Неправильно
```tsx
// ❌ Компоненты без провайдера
<App /> // Без <MaxUI>

// ❌ Неправильный импорт
import { MaxUI } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [useMaxUI](#usemaxui-hook)
- [Panel](#panel)

---

## 📷 Panel

Панель-контейнер для контента.

### 📦 Импорт
```tsx
import { Panel } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| variant | `'default' \| 'elevated' \| 'outlined'` | `'default'` | Стиль панели |
| padded | `boolean` | `true` | Внутренний padding |
| asChild | `boolean` | `false` | Полимерфизм через Slot |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая панель
<Panel>
  <p>Контент панели</p>
</Panel>

// Пример 2: Приподнятая панель
<Panel variant="elevated">
  <p>С тенью</p>
</Panel>

// Пример 3: Панель с рамкой
<Panel variant="outlined">
  <p>С границей</p>
</Panel>

// Пример 4: Без padding
<Panel padded={false}>
  <CustomContent />
</Panel>

// Пример 5: asChild
<Panel asChild>
  <section>
    <p>Semantic panel</p>
  </section>
</Panel>

// Пример 6: Вложенные панели
<Panel variant="elevated">
  <Panel variant="outlined">
    <p>Nested</p>
  </Panel>
</Panel>

// Пример 7: С заголовком
<Panel>
  <Panel.Header>Заголовок</Panel.Header>
  <Panel.Content>Тело</Panel.Content>
</Panel>

// Пример 8: С кастомными стилями
<Panel className="custom-panel">
  <p>Custom</p>
</Panel>

// Пример 9: Адаптивная панель
<Panel className="w-full md:w-1/2">
  <p>Responsive</p>
</Panel>

// Пример 10: Панель навигации
<Panel variant="elevated" padded={false}>
  <nav className="p-4">
    <a>Link 1</a>
    <a>Link 2</a>
  </nav>
</Panel>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Panel-bg` | Цвет фона |
| `--MaxUi-Panel-border-radius` | 8px |
| `--MaxUi-Panel-padding` | 16px |
| `--MaxUi-Panel-elevated-shadow` | Тень для elevated |
| `--MaxUi-Panel-outlined-border` | Граница для outlined |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Panel` | Корневой элемент |
| `.Panel--variant-{variant}` | Модификатор варианта |
| `.Panel--padded` | С padding |
| `.Panel__header` | Заголовок |
| `.Panel__content` | Контент |

### 🔧 Типы TypeScript
```ts
export interface PanelProps extends SlotProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padded?: boolean;
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через Radix Slot
- **Адаптивность:** Блочный элемент

### ⚠️ Важно
- `elevated` добавляет box-shadow
- `outlined` добавляет border

### ✅ Правильно
```tsx
<Panel variant="elevated">
  <h2>Заголовок</h2>
  <p>Контент</p>
</Panel>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Panel } from '@maxhub/max-ui'

// ❌ Лишние пробелы
<Panel variant="elevated" >
```

### 🔗 Связанные компоненты
- [Container](#container)
- [Card](#card)

---

## 📷 Ripple

Эффект волны при клике (Material Design ripple).

### 📦 Импорт
```tsx
import { Ripple } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| color | `string` | `'currentColor'` | Цвет волны |
| duration | `number` | `600` | Длительность анимации (мс) |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый ripple
<button className="relative overflow-hidden">
  Нажми меня
  <Ripple />
</button>

// Пример 2: С цветом
<button className="relative overflow-hidden">
  <Ripple color="rgba(255,255,255,0.3)" />
</button>

// Пример 3: С длительностью
<Ripple duration={800} />

// Пример 4: В кнопке
<Button className="relative overflow-hidden">
  Click
  <Ripple />
</Button>

// Пример 5: В IconButton
<IconButton className="relative overflow-hidden">
  <Icon />
  <Ripple />
</IconButton>

// Пример 6: Multiple ripples
<div className="flex gap-4">
  <button className="relative overflow-hidden">
    1<Ripple />
  </button>
  <button className="relative overflow-hidden">
    2<Ripple />
  </button>
</div>

// Пример 7: С кастомными стилями
<Ripple className="custom-ripple" />

// Пример 8: В Tappable
<Tappable>
  <span>Tap me</span>
  <Ripple />
</Tappable>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Ripple-color` | Из color prop |
| `--MaxUi-Ripple-duration` | Из duration prop |
| `--MaxUi-Ripple-border-radius` | 50% |
| `--MaxUi-Ripple-transform` | scale(0) -> scale(1) |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Ripple` | Корневой элемент |
| `.Ripple__wave` | Волна анимации |

### 🔧 Типы TypeScript
```ts
export interface RippleProps {
  color?: string;
  duration?: number;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Абсолютное позиционирование

### ⚠️ Важно
- Родитель должен иметь `position: relative` и `overflow: hidden`
- Работает только с кликовыми событиями

### ✅ Правильно
```tsx
<button className="relative overflow-hidden">
  Button
  <Ripple />
</button>
```

### ❌ Неправильно
```tsx
// ❌ Без overflow-hidden
<button>
  <Ripple />
  Button
</button>

// ❌ Неправильный импорт
import { Ripple } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Tappable](#tappable)
- [Button](#button)

---

## 📷 SearchInput

Поле поиска с иконкой и очисткой.

### 📦 Импорт
```tsx
import { SearchInput } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| value | `string` | - | Значение |
| onChange | `(value: string) => void` | - | Обработчик изменения |
| placeholder | `string` | `'Поиск...'` | Плейсхолдер |
| disabled | `boolean` | `false` | Disabled состояние |
| onClear | `() => void` | - | Обработчик очистки |
| onSearch | `(value: string) => void` | - | Обработчик поиска (Enter) |
| debounce | `number` | `300` | Задержка onChange (мс) |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый поиск
<SearchInput value={query} onChange={setQuery} />

// Пример 2: С кастомным плейсхолдером
<SearchInput 
  value={query}
  onChange={setQuery}
  placeholder="Найти товары..."
/>

// Пример 3: С обработчиком поиска
<SearchInput 
  value={query}
  onChange={setQuery}
  onSearch={(v) => handleSearch(v)}
/>

// Пример 4: С очисткой
<SearchInput 
  value={query}
  onChange={setQuery}
  onClear={() => setQuery('')}
/>

// Пример 5: Disabled
<SearchInput value="Search" onChange={setQuery} disabled />

// Пример 6: С debounce
<SearchInput 
  value={query}
  onChange={setQuery}
  debounce={500}
/>

// Пример 7: В хедере
<header>
  <SearchInput 
    value={search}
    onChange={setSearch}
    onSearch={navigateToResults}
  />
</header>

// Пример 8: С фильтром
const filtered = items.filter(i => 
  i.name.toLowerCase().includes(query.toLowerCase())
);
<SearchInput value={query} onChange={setQuery} />
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-SearchInput-height` | 40px |
| `--MaxUi-SearchInput-bg` | Цвет фона |
| `--MaxUi-SearchInput-border-radius` | 20px (pill shape) |
| `--MaxUi-SearchInput-icon-color` | Цвет иконки |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.SearchInput` | Корневой элемент |
| `.SearchInput__input` | Поле ввода |
| `.SearchInput__icon` | Иконка поиска |
| `.SearchInput__clear` | Кнопка очистки |
| `.SearchInput--disabled` | Disabled состояние |

### 🔧 Типы TypeScript
```ts
export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  onClear?: () => void;
  onSearch?: (value: string) => void;
  debounce?: number;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Full width, pill shape

### ⚠️ Важно
- Контролируемый компонент
- `onSearch` вызывается по Enter

### ✅ Правильно
```tsx
<SearchInput 
  value={query}
  onChange={setQuery}
  onSearch={handleSearch}
  placeholder="Поиск..."
/>
```

### ❌ Неправильно
```tsx
// ❌ Неконтролируемый
<SearchInput onChange={console.log} />

// ❌ Неправильный импорт
import { SearchInput } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Input](#input)
- [ClearableInput](#clearableinput)

---

## 📷 Spinner

Индикатор загрузки (крутящийся).

### 📦 Импорт
```tsx
import { Spinner } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| size | `'s' \| 'm' \| 'l' \| 'xl'` | `'m'` | Размер спиннера |
| color | `string` | `'currentColor'` | Цвет |
| label | `string` | - | ARIA label |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый спиннер
<Spinner />

// Пример 2: Малый размер
<Spinner size="s" />

// Пример 3: Большой размер
<Spinner size="l" />

// Пример 4: С цветом
<Spinner color="#3B82F6" />

// Пример 5: С ARIA label
<Spinner label="Загрузка данных..." />

// Пример 6: В кнопке
<Button loading>
  Сохранить
  <Spinner size="s" />
</Button>

// Пример 7: На весь экран
<div className="fixed inset-0 flex items-center justify-center">
  <Spinner size="xl" />
</div>

// Пример 8: С текстом
<div className="flex items-center gap-2">
  <Spinner />
  <span>Загрузка...</span>
</div>

// Пример 9: В модалке
<Modal>
  <div className="flex justify-center p-8">
    <Spinner size="l" />
  </div>
</Modal>

// Пример 10: Inline спиннер
<p>
  Загружаем данные <Spinner size="s" className="inline" />
</p>
```

### 🎨 CSS-переменные
| Переменная | Описание | Значение |
|------------|----------|----------|
| `--MaxUi-Spinner-size-s` | 16px |
| `--MaxUi-Spinner-size-m` | 24px |
| `--MaxUi-Spinner-size-l` | 32px |
| `--MaxUi-Spinner-size-xl` | 48px |
| `--MaxUi-Spinner-border-width` | 2px |
| `--MaxUi-Spinner-animation-duration` | 0.75s |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Spinner` | Корневой элемент |
| `.Spinner--size-{size}` | Модификатор размера |

### 🔧 Типы TypeScript
```ts
export interface SpinnerProps {
  size?: 's' | 'm' | 'l' | 'xl';
  color?: string;
  label?: string;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** SVG animation

### ⚠️ Важно
- Используйте `label` для доступности
- CSS анимация rotation

### ✅ Правильно
```tsx
<Spinner size="m" label="Загрузка" />
```

### ❌ Неправильно
```tsx
// ❌ Без label для больших спиннеров
<Spinner size="xl" />

// ❌ Неправильный импорт
import { Spinner } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Button](#button)
- [Skeleton](#skeleton)

---

## 📷 Switch

Переключатель (toggle) вкл/выкл.

### 📦 Импорт
```tsx
import { Switch } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| checked | `boolean` | - | Состояние вкл/выкл |
| onChange | `(checked: boolean) => void` | - | Обработчик изменения |
| disabled | `boolean` | `false` | Disabled состояние |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Размер |
| label | `string` | - | Метка |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый switch
<Switch checked={enabled} onChange={setEnabled} />

// Пример 2: С лейблом
<Switch 
  checked={notifications}
  onChange={setNotifications}
  label="Уведомления"
/>

// Пример 3: Disabled
<Switch checked={true} onChange={set} disabled />

// Пример 4: Разные размеры
<Switch size="s" checked={s} onChange={setS} />
<Switch size="m" checked={m} onChange={setM} />
<Switch size="l" checked={l} onChange={setL} />

// Пример 5: В форме
<label className="flex items-center gap-2">
  <Switch 
    checked={formData.darkMode}
    onChange={(v) => setFormData({...formData, darkMode: v})}
  />
  <span>Темная тема</span>
</label>

// Пример 6: С описанием
<div>
  <Switch checked={val} onChange={setVal} label="Airplane mode" />
  <p className="text-sm text-gray-500">Отключить все соединения</p>
</div>

// Пример 7: Группа свитчей
<div className="space-y-4">
  <Switch checked={wifi} onChange={setWifi} label="Wi-Fi" />
  <Switch checked={bt} onChange={setBt} label="Bluetooth" />
  <Switch checked={gps} onChange={setGps} label="GPS" />
</div>

// Пример 8: С кастомными стилями
<Switch 
  checked={custom}
  onChange={setCustom}
  className="custom-switch"
/>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Switch-width-s` | 36px |
| `--MaxUi-Switch-width-m` | 44px |
| `--MaxUi-Switch-width-l` | 52px |
| `--MaxUi-Switch-height-{size}` | Пропорционально |
| `--MaxUi-Switch-checked-bg` | Фон включенного |
| `--MaxUi-Switch-thumb-bg` | Фон ползунка |
| `--MaxUi-Switch-transition` | transition-all |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Switch` | Корневой элемент |
| `.Switch--size-{size}` | Модификатор размера |
| `.Switch--checked` | Включенное состояние |
| `.Switch--disabled` | Disabled состояние |
| `.Switch__thumb` | Ползунок |
| `.Switch__track` | Дорожка |

### 🔧 Типы TypeScript
```ts
export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: 's' | 'm' | 'l';
  label?: string;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Flex layout

### ⚠️ Важно
- Контролируемый компонент
- Доступен с клавиатуры (Space toggle)

### ✅ Правильно
```tsx
<Switch 
  checked={enabled}
  onChange={setEnabled}
  label="Включено"
/>
```

### ❌ Неправильно
```tsx
// ❌ Неконтролируемый
<Switch onChange={console.log} />

// ❌ Неправильный импорт
import { Switch } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Checkbox](#checkbox)
- [Radio](#radio)

---

## 📷 Tappable

Обертка для интерактивных элементов с тактильным откликом.

### 📦 Импорт
```tsx
import { Tappable } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| onTap | `() => void` | - | Обработчик тапа |
| disabled | `boolean` | `false` | Disabled состояние |
| activeEffect | `'opacity' \| 'scale' \| 'ripple'` | `'opacity'` | Эффект нажатия |
| asChild | `boolean` | `false` | Полимерфизм через Slot |
| href | `string` | - | Ссылка |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый tappable
<Tappable onTap={() => console.log('Tapped!')}>
  <div>Нажми меня</div>
</Tappable>

// Пример 2: С эффектом масштабирования
<Tappable activeEffect="scale">
  <div>Scale effect</div>
</Tappable>

// Пример 3: С ripple эффектом
<Tappable activeEffect="ripple">
  <div>Ripple effect</div>
</Tappable>

// Пример 4: Disabled
<Tappable disabled>
  <div>Неактивно</div>
</Tappable>

// Пример 5: Как ссылка
<Tappable href="/page">
  <div>Перейти</div>
</Tappable>

// Пример 6: asChild
<Tappable asChild>
  <a href="/link">Link</a>
</Tappable>

// Пример 7: Карточка с тапом
<Tappable onTap={() => navigate('/detail')}>
  <Card>
    <h3>Карточка</h3>
    <p>Кликабельна</p>
  </Card>
</Tappable>

// Пример 8: Список таппаблов
<Tappable onTap={() => select(1)}>
  <CellSimple title="Item 1" />
</Tappable>
<Tappable onTap={() => select(2)}>
  <CellSimple title="Item 2" />
</Tappable>

// Пример 9: С кастомными стилями
<Tappable 
  onTap={handleTap}
  className="custom-tappable"
>
  <div>Custom</div>
</Tappable>

// Пример 10: Вложенный tappable
<Tappable onTap={handleOuter}>
  <div>
    Outer
    <Tappable onTap={handleInner} stopPropagation>
      Inner
    </Tappable>
  </div>
</Tappable>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Tappable-active-opacity` | 0.7 |
| `--MaxUi-Tappable-active-scale` | 0.98 |
| `--MaxUi-Tappable-transition` | 100ms |
| `--MaxUi-Tappable-cursor` | pointer |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Tappable` | Корневой элемент |
| `.Tappable--active` | Активное нажатие |
| `.Tappable--disabled` | Disabled состояние |

### 🔧 Типы TypeScript
```ts
export type ActiveEffect = 'opacity' | 'scale' | 'ripple';

export interface TappableProps extends SlotProps {
  onTap?: () => void;
  disabled?: boolean;
  activeEffect?: ActiveEffect;
  asChild?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через Radix Slot
- **Адаптивность:** Работает с touch и mouse

### ⚠️ Важно
- `stopPropagation` предотвращает всплытие
- Оптимизирован для мобильных устройств

### ✅ Правильно
```tsx
<Tappable onTap={() => navigate('/page')}>
  <Card>Clickable Card</Card>
</Tappable>
```

### ❌ Неправильно
```tsx
// ❌ Без onTap
<Tappable>
  <div>No handler</div>
</Tappable>

// ❌ Неправильный импорт
import { Tappable } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Ripple](#ripple)
- [CellAction](#cellaction)

---

## 📷 Textarea

Многострочное поле ввода.

### 📦 Импорт
```tsx
import { Textarea } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| value | `string` | - | Значение |
| onChange | `(value: string) => void` | - | Обработчик изменения |
| placeholder | `string` | - | Плейсхолдер |
| disabled | `boolean` | `false` | Disabled состояние |
| error | `string` | - | Текст ошибки |
| rows | `number` | `4` | Количество строк |
| maxLength | `number` | - | Максимальная длина |
| resize | `boolean` | `true` | Разрешить изменение размера |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовая textarea
<Textarea value={text} onChange={setText} />

// Пример 2: С плейсхолдером
<Textarea 
  value={message}
  onChange={setMessage}
  placeholder="Введите сообщение..."
/>

// Пример 3: С ошибкой
<Textarea 
  value={invalid}
  onChange={setInvalid}
  error="Слишком коротко"
/>

// Пример 4: Disabled
<Textarea value="Readonly" onChange={setText} disabled />

// Пример 5: С количеством строк
<Textarea 
  value={text}
  onChange={setText}
  rows={6}
/>

// Пример 6: С ограничением длины
<Textarea 
  value={text}
  onChange={setText}
  maxLength={500}
/>

// Пример 7: Без изменения размера
<Textarea 
  value={text}
  onChange={setText}
  resize={false}
/>

// Пример 8: Счетчик символов
<Textarea 
  value={text}
  onChange={setText}
  maxLength={500}
/>
<span>{text.length}/500</span>

// Пример 9: В форме
<form>
  <Textarea 
    value={formData.comment}
    onChange={(v) => setFormData({...formData, comment: v})}
    placeholder="Комментарий"
  />
</form>

// Пример 10: Авто-высота (через ref)
const textareaRef = useRef<HTMLTextAreaElement>(null);
<Textarea 
  ref={textareaRef}
  value={text}
  onChange={autoResize}
/>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Textarea-min-height` | 100px |
| `--MaxUi-Textarea-padding` | 12px |
| `--MaxUi-Textarea-border-color` | Цвет границы |
| `--MaxUi-Textarea-focus-border-color` | Цвет при фокусе |
| `--MaxUi-Textarea-error-border-color` | Цвет ошибки |
| `--MaxUi-Textarea-resize` | vertical / none |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Textarea` | Корневой элемент |
| `.Textarea__textarea` | Нативная textarea |
| `.Textarea--error` | Состояние ошибки |
| `.Textarea--disabled` | Disabled состояние |
| `.Textarea--no-resize` | Без изменения размера |

### 🔧 Типы TypeScript
```ts
export interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  rows?: number;
  maxLength?: number;
  resize?: boolean;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Full width

### ⚠️ Важно
- Контролируемый компонент
- `resize={false}` отключает ручное изменение

### ✅ Правильно
```tsx
<Textarea 
  value={comment}
  onChange={setComment}
  placeholder="Ваш комментарий"
  rows={4}
/>
```

### ❌ Неправильно
```tsx
// ❌ Неконтролируемый
<Textarea onChange={console.log} />

// ❌ Неправильный импорт
import { Textarea } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Input](#input)
- [Form](#form)

---

## 📷 Typography: Display

Крупный заголовок для главных акцентов.

### 📦 Импорт
```tsx
import { Display } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| as | `'h1' \| 'h2' \| 'p' \| 'span' \| 'div'` | `'h1'` | HTML тег |
| size | `'l' \| 'xl'` | `'xl'` | Размер |
| weight | `'regular' \| 'medium' \| 'bold'` | `'bold'` | Жирность |
| color | `string` | `'inherit'` | Цвет текста |
| align | `'left' \| 'center' \| 'right'` | `'left'` | Выравнивание |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый Display
<Display>Главный заголовок</Display>

// Пример 2: С размером
<Display size="l">Large</Display>
<Display size="xl">Extra Large</Display>

// Пример 3: С кастомным тегом
<Display as="h2">Подзаголовок</Display>

// Пример 4: С выравниванием
<Display align="center">По центру</Display>

// Пример 5: С цветом
<Display color="primary">Цветной</Display>

// Пример 6: С жирностью
<Display weight="medium">Medium</Display>
<Display weight="bold">Bold</Display>

// Пример 7: Hero секция
<section>
  <Display>Добро пожаловать</Display>
  <Body>Описание продукта</Body>
</section>

// Пример 8: Landing page
<Display size="xl" align="center">
  Создавайте быстрее с MAX UI
</Display>
```

### 🎨 CSS-переменные
| Переменная | Описание | Значение |
|------------|----------|----------|
| `--MaxUi-Display-font-size-l` | 48px |
| `--MaxUi-Display-font-size-xl` | 64px |
| `--MaxUi-Display-line-height` | 1.1 |
| `--MaxUi-Display-letter-spacing` | -0.02em |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Display` | Корневой элемент |
| `.Display--size-{size}` | Модификатор размера |
| `.Display--weight-{weight}` | Модификатор жирности |
| `.Display--align-{align}` | Модификатор выравнивания |

### 🔧 Типы TypeScript
```ts
export interface DisplayProps {
  as?: 'h1' | 'h2' | 'p' | 'span' | 'div';
  size?: 'l' | 'xl';
  weight?: 'regular' | 'medium' | 'bold';
  color?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через `as` проп
- **Адаптивность:** Крупные размеры для desktop

### ⚠️ Важно
- Использовать sparingly (1-2 на страницу)
- `size="xl"` для главных заголовков

### ✅ Правильно
```tsx
<Display size="xl" align="center">
  MAX UI Components
</Display>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Display } from '@maxhub/max-ui'

// ❌ Слишком много display на странице
<Display>1</Display>
<Display>2</Display>
<Display>3</Display>
```

### 🔗 Связанные компоненты
- [Headline](#headline)
- [Title](#title)

---

## 📷 Typography: Headline

Заголовок раздела.

### 📦 Импорт
```tsx
import { Headline } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| as | `'h1' \| 'h2' \| 'h3' \| 'p' \| 'span'` | `'h2'` | HTML тег |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Размер |
| weight | `'regular' \| 'medium' \| 'bold'` | `'bold'` | Жирность |
| color | `string` | `'inherit'` | Цвет |
| align | `'left' \| 'center' \| 'right'` | `'left'` | Выравнивание |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый Headline
<Headline>Заголовок раздела</Headline>

// Пример 2: Разные размеры
<Headline size="s">Small</Headline>
<Headline size="m">Medium</Headline>
<Headline size="l">Large</Headline>

// Пример 3: С тегом h3
<Headline as="h3">Подраздел</Headline>

// Пример 4: В карточке
<Card>
  <Headline size="s">Карточка</Headline>
  <Body>Контент</Body>
</Card>

// Пример 5: С выравниванием
<Headline align="center">Центрированный</Headline>

// Пример 6: Секция настроек
<section>
  <Headline>Настройки</Headline>
  <CellList>...</CellList>
</section>

// Пример 7: С цветом
<Headline color="secondary">Вторичный</Headline>

// Пример 8: Иерархия
<Display>Главная</Display>
<Headline>Раздел</Headline>
<Title>Подраздел</Title>
```

### 🎨 CSS-переменные
| Переменная | Описание | Значение |
|------------|----------|----------|
| `--MaxUi-Headline-font-size-s` | 20px |
| `--MaxUi-Headline-font-size-m` | 24px |
| `--MaxUi-Headline-font-size-l` | 28px |
| `--MaxUi-Headline-line-height` | 1.2 |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Headline` | Корневой элемент |
| `.Headline--size-{size}` | Модификатор размера |

### 🔧 Типы TypeScript
```ts
export interface HeadlineProps {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  size?: 's' | 'm' | 'l';
  weight?: 'regular' | 'medium' | 'bold';
  color?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через `as` проп
- **Адаптивность:** Средние размеры

### ⚠️ Важно
- Для заголовков секций
- Соблюдайте иерархию h1-h6

### ✅ Правильно
```tsx
<Headline size="m">Настройки аккаунта</Headline>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Headline } from '@maxhub/max-ui'

// ❌ Пропуск уровней заголовков
<Display>Main</Display>
<Headline as="h6">Skip levels</Headline>
```

### 🔗 Связанные компоненты
- [Display](#display)
- [Title](#title)

---

## 📷 Typography: Title

Заголовок подраздела.

### 📦 Импорт
```tsx
import { Title } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| as | `'h3' \| 'h4' \| 'p' \| 'span'` | `'h3'` | HTML тег |
| size | `'s' \| 'm'` | `'m'` | Размер |
| weight | `'regular' \| 'medium' \| 'bold'` | `'medium'` | Жирность |
| color | `string` | `'inherit'` | Цвет |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый Title
<Title>Заголовок</Title>

// Пример 2: Разные размеры
<Title size="s">Small</Title>
<Title size="m">Medium</Title>

// Пример 3: В форме
<form>
  <Title size="s">Личные данные</Title>
  <Input label="Имя" />
</form>

// Пример 4: С тегом h4
<Title as="h4">Подзаголовок</Title>

// Пример 5: В списке
<CellList>
  <CellHeader title="Основное" />
  <CellAction title="Профиль" />
</CellList>

// Пример 6: С цветом
<Title color="muted">Приглушенный</Title>

// Пример 7: Карточка с заголовком
<Card>
  <Title size="s">Детали</Title>
  <Body>Описание</Body>
</Card>

// Пример 8: Иерархия
<Headline>Раздел</Headline>
<Title>Подраздел</Title>
<Body>Контент</Body>
```

### 🎨 CSS-переменные
| Переменная | Описание | Значение |
|------------|----------|----------|
| `--MaxUi-Title-font-size-s` | 16px |
| `--MaxUi-Title-font-size-m` | 18px |
| `--MaxUi-Title-line-height` | 1.3 |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Title` | Корневой элемент |
| `.Title--size-{size}` | Модификатор размера |

### 🔧 Типы TypeScript
```ts
export interface TitleProps {
  as?: 'h3' | 'h4' | 'p' | 'span';
  size?: 's' | 'm';
  weight?: 'regular' | 'medium' | 'bold';
  color?: string;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через `as` проп
- **Адаптивность:** Компактные размеры

### ⚠️ Важно
- Для подзаголовков внутри секций
- `size="s"` для компактных заголовков

### ✅ Правильно
```tsx
<Title size="s">Контактная информация</Title>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Title } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Headline](#headline)
- [Body](#body)

---

## 📷 Typography: Body

Основной текст контента.

### 📦 Импорт
```tsx
import { Body } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| as | `'p' \| 'span' \| 'div'` | `'p'` | HTML тег |
| size | `'s' \| 'm' \| 'l'` | `'m'` | Размер |
| weight | `'regular' \| 'medium' \| 'bold'` | `'regular'` | Жирность |
| color | `string` | `'inherit'` | Цвет |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый Body
<Body>Основной текст контента</Body>

// Пример 2: Разные размеры
<Body size="s">Small text</Body>
<Body size="m">Medium text</Body>
<Body size="l">Large text</Body>

// Пример 3: Жирный текст
<Body weight="bold">Важный текст</Body>

// Пример 4: Приглушенный цвет
<Body color="muted">Второстепенный текст</Body>

// Пример 5: В карточке
<Card>
  <Title>Заголовок</Title>
  <Body>Описание карточки</Body>
</Card>

// Пример 6: Многострочный
<Body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore.
</Body>

// Пример 7: Inline
<p>
  Текст с <Body as="span" weight="bold">жирным</Body> участком
</p>

// Пример 8: Ссылка в тексте
<Body>
  Подробнее в <a href="/docs">документации</a>
</Body>
```

### 🎨 CSS-переменные
| Переменная | Описание | Значение |
|------------|----------|----------|
| `--MaxUi-Body-font-size-s` | 14px |
| `--MaxUi-Body-font-size-m` | 16px |
| `--MaxUi-Body-font-size-l` | 18px |
| `--MaxUi-Body-line-height` | 1.5 |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Body` | Корневой элемент |
| `.Body--size-{size}` | Модификатор размера |

### 🔧 Типы TypeScript
```ts
export interface BodyProps {
  as?: 'p' | 'span' | 'div';
  size?: 's' | 'm' | 'l';
  weight?: 'regular' | 'medium' | 'bold';
  color?: string;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через `as` проп
- **Адаптивность:** Основной читаемый размер

### ⚠️ Важно
- Самый используемый типографический компонент
- `line-height: 1.5` для читаемости

### ✅ Правильно
```tsx
<Body size="m">
  Это основной текст вашего приложения.
</Body>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Body } from '@maxhub/max-ui'

// ❌ Слишком мелкий для основного контента
<Body size="s">Основной текст</Body>
```

### 🔗 Связанные компоненты
- [Title](#title)
- [Label](#label)

---

## 📷 Typography: Label

Метки для форм и небольших элементов.

### 📦 Импорт
```tsx
import { Label } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| as | `'label' \| 'span' \| 'div'` | `'label'` | HTML тег |
| size | `'xs' \| 's'` | `'s'` | Размер |
| weight | `'regular' \| 'medium' \| 'bold'` | `'medium'` | Жирность |
| color | `string` | `'inherit'` | Цвет |
| htmlFor | `string` | - | ID связанного input |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый Label
<Label>Метка поля</Label>

// Пример 2: Связь с input
<Label htmlFor="email">Email</Label>
<Input id="email" value={email} onChange={setEmail} />

// Пример 3: Разные размеры
<Label size="xs">Extra Small</Label>
<Label size="s">Small</Label>

// Пример 4: Жирный
<Label weight="bold">Обязательное поле</Label>

// Пример 5: В форме
<form>
  <Label htmlFor="name">Имя</Label>
  <Input id="name" value={name} onChange={setName} />
</form>

// Пример 6: С звездочкой
<Label>
  Email <span className="text-red-500">*</span>
</Label>

// Пример 7: Бейдж-подобный
<Label size="xs" className="bg-gray-100 px-2 py-1 rounded">
  New
</Label>

// Пример 8: Описание поля
<Label htmlFor="desc">Описание</Label>
<Label size="xs" color="muted">Максимум 500 символов</Label>
<Textarea id="desc" />
```

### 🎨 CSS-переменные
| Переменная | Описание | Значение |
|------------|----------|----------|
| `--MaxUi-Label-font-size-xs` | 12px |
| `--MaxUi-Label-font-size-s` | 14px |
| `--MaxUi-Label-line-height` | 1.4 |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Label` | Корневой элемент |
| `.Label--size-{size}` | Модификатор размера |

### 🔧 Типы TypeScript
```ts
export interface LabelProps {
  as?: 'label' | 'span' | 'div';
  size?: 'xs' | 's';
  weight?: 'regular' | 'medium' | 'bold';
  color?: string;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через `as` проп
- **Адаптивность:** Компактные размеры

### ⚠️ Важно
- Используйте `htmlFor` для связи с input
- `size="xs"` для вторичных меток

### ✅ Правильно
```tsx
<Label htmlFor="username">Имя пользователя</Label>
<Input id="username" value={user} onChange={setUser} />
```

### ❌ Неправильно
```tsx
// ❌ Без htmlFor
<Label>Username</Label>
<Input value={user} />

// ❌ Неправильный импорт
import { Label } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Input](#input)
- [Body](#body)

---

## 📷 Typography: Action

Текст для действий и кнопок.

### 📦 Импорт
```tsx
import { Action } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| as | `'span' \| 'button' \| 'a'` | `'span'` | HTML тег |
| size | `'s' \| 'm'` | `'m'` | Размер |
| weight | `'medium' \| 'bold'` | `'bold'` | Жирность |
| color | `string` | `'primary'` | Цвет |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый Action
<Action>Действие</Action>

// Пример 2: Как ссылка
<Action as="a" href="/page">Перейти</Action>

// Пример 3: Разные размеры
<Action size="s">Small</Action>
<Action size="m">Medium</Action>

// Пример 4: Ссылка в тексте
<Body>
  Узнайте больше в <Action as="a" href="/docs">документации</Action>
</Body>

// Пример 5: Кнопка-текст
<Action as="button" onClick={handleClick}>
  Нажмите здесь
</Action>

// Пример 6: Вторичное действие
<Action color="secondary">Отмена</Action>

// Пример 7: В футере
<footer>
  <Action as="a" href="/terms">Условия</Action>
  <Action as="a" href="/privacy">Приватность</Action>
</footer>

// Пример 8: Inline действие
<p>
  Согласен с <Action as="a" href="/terms">условиями использования</Action>
</p>
```

### 🎨 CSS-переменные
| Переменная | Описание | Значение |
|------------|----------|----------|
| `--MaxUi-Action-font-size-s` | 14px |
| `--MaxUi-Action-font-size-m` | 16px |
| `--MaxUi-Action-line-height` | 1.4 |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Action` | Корневой элемент |
| `.Action--size-{size}` | Модификатор размера |

### 🔧 Типы TypeScript
```ts
export interface ActionProps {
  as?: 'span' | 'button' | 'a';
  size?: 's' | 'm';
  weight?: 'medium' | 'bold';
  color?: string;
  className?: string;
  children: React.ReactNode;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Поддержка через `as` проп
- **Адаптивность:** Интерактивный стиль

### ⚠️ Важно
- Для текстовых ссылок и действий
- По умолчанию bold для заметности

### ✅ Правильно
```tsx
<Action as="a" href="/help">
  Нужна помощь?
</Action>
```

### ❌ Неправильно
```tsx
// ❌ Неправильный импорт
import { Action } from '@maxhub/max-ui'

// ❌ Для основного контента
<Action>Длинный текст параграфа</Action>
```

### 🔗 Связанные компоненты
- [Body](#body)
- [Link](#link)

---

## 📷 Profile

Карточка профиля пользователя.

### 📦 Импорт
```tsx
import { Profile } from '@maxhub/max-ui';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| avatar | `string` | - | URL аватара |
| name | `string` | - | Имя пользователя |
| email | `string` | - | Email |
| status | `AvatarStatus` | - | Статус |
| badge | `React.ReactNode` | - | Бейдж |
| onEdit | `() => void` | - | Обработчик редактирования |
| className | `string` | `''` | Дополнительные классы |

### 🎨 Примеры

```tsx
// Пример 1: Базовый профиль
<Profile 
  avatar="/user.jpg"
  name="Иван Петров"
  email="ivan@example.com"
/>

// Пример 2: Со статусом
<Profile 
  avatar="/user.jpg"
  name="Иван Петров"
  email="ivan@example.com"
  status="online"
/>

// Пример 3: С бейджем
<Profile 
  avatar="/user.jpg"
  name="Иван Петров"
  badge={<Badge>PRO</Badge>}
/>

// Пример 4: С редактированием
<Profile 
  avatar="/user.jpg"
  name="Иван Петров"
  email="ivan@example.com"
  onEdit={() => openEditModal()}
/>

// Пример 5: Без аватара (fallback)
<Profile 
  name="Иван Петров"
  email="ivan@example.com"
/>

// Пример 6: В хедере
<header>
  <Profile 
    avatar={user.avatar}
    name={user.name}
    onClick={openMenu}
  />
</header>

// Пример 7: Мини профиль
<Profile 
  avatar="/user.jpg"
  name="Иван П."
  size="s"
/>

// Пример 8: С кастомными действиями
<Profile 
  avatar="/user.jpg"
  name="Иван Петров"
  actions={
    <>
      <IconButton ariaLabel="Settings"><SettingsIcon /></IconButton>
      <IconButton ariaLabel="Logout"><LogoutIcon /></IconButton>
    </>
  }
/>
```

### 🎨 CSS-переменные
| Переменная | Описание |
|------------|----------|
| `--MaxUi-Profile-padding` | 16px |
| `--MaxUi-Profile-bg` | Цвет фона |
| `--MaxUi-Profile-border-radius` | 12px |
| `--MaxUi-Profile-name-font-size` | 16px |
| `--MaxUi-Profile-email-color` | Muted color |

### 🎨 CSS-классы
| Класс | Описание |
|-------|----------|
| `.Profile` | Корневой элемент |
| `.Profile__avatar` | Аватар |
| `.Profile__info` | Информация |
| `.Profile__name` | Имя |
| `.Profile__email` | Email |
| `.Profile__actions` | Действия |

### 🔧 Типы TypeScript
```ts
export interface ProfileProps {
  avatar?: string;
  name?: string;
  email?: string;
  status?: AvatarStatus;
  badge?: React.ReactNode;
  onEdit?: () => void;
  className?: string;
}
```

### 📱 Особенности
- **Context API:** Не использует
- **asChild:** Не поддерживается
- **Адаптивность:** Flex layout

### ⚠️ Важно
- Комбинирует Avatar и Typography
- `onEdit` добавляет кнопку редактирования

### ✅ Правильно
```tsx
<Profile 
  avatar={user.avatarUrl}
  name={user.fullName}
  email={user.email}
  status="online"
/>
```

### ❌ Неправильно
```tsx
// ❌ Без имени
<Profile email="test@test.com" />

// ❌ Неправильный импорт
import { Profile } from '@maxhub/max-ui'
```

### 🔗 Связанные компоненты
- [Avatar](#avatar)
- [Body](#body)

---

## 🔧 Helper Functions

### getButtonSize

Возвращает размеры для кнопки.

```ts
export function getButtonSize(size: ButtonSize): {
  height: string;
  paddingX: string;
  fontSize: string;
}
```

**Пример:**
```ts
const { height, paddingX, fontSize } = getButtonSize('m');
// height: '40px', paddingX: '16px', fontSize: '14px'
```

### getTextStyles

Возвращает стили для типографии.

```ts
export function getTextStyles(
  variant: TypographyVariant,
  size: TypographySize
): React.CSSProperties
```

**Пример:**
```ts
const styles = getTextStyles('body', 'm');
// { fontSize: '16px', lineHeight: '1.5', fontWeight: '400' }
```

### getSpacing

Возвращает значение отступа.

```ts
export function getSpacing(value: number): string
```

**Пример:**
```ts
const gap = getSpacing(16); // '16px'
```

---

## 📦 Зависимости

MAX UI использует следующие зависимости:

| Пакет | Версия | Назначение |
|-------|--------|------------|
| `@radix-ui/react-slot` | ^1.0.0 | Polymorphic components (asChild) |
| `clsx` | ^2.0.0 | Conditional classes |
| `react` | ^18.0.0 | Base framework |
| `typescript` | ^5.0.0 | Type safety |

---

## 📝 Changelog

### v1.0.0
- Initial release with 39+ components
- Full TypeScript support
- Dark/Light theme
- Accessibility compliant

---

**Документация сгенерирована для @maxhub/max-ui**
