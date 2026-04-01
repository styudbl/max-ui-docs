# 📘 MAX UI Components Reference

Полная документация компонентов библиотеки MAX UI.

## 📑 Оглавление

### Avatar Components
- [AvatarContainer](#-avatarcontainer)
- [AvatarImage](#-avatarimage)
- [AvatarIcon](#-avataricon)
- [AvatarText](#-avatartext)
- [AvatarOverlay](#-avataroverlay)
- [AvatarOnlineDot](#-avataronlinedot)
- [AvatarCloseButton](#-avatarclosebutton)

---

## 📷 AvatarContainer

Контейнер для аватара, предоставляющий контекст размера дочерним компонентам и поддерживающий различные формы (круг, сквиркл).

### 📦 Импорт
```tsx
import { Avatar } from '@max-ui/components';
// или
import { AvatarContainer } from '@max-ui/components/avatar';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `size` | `16 \| 20 \| 24 \| 28 \| 32 \| 36 \| 40 \| 44 \| 48 \| 54 \| 56 \| 64 \| 72 \| 80 \| 88 \| 96 \| number` | `48` | Размер аватара в пикселях |
| `form` | `'circle' \| 'squircle'` | `'circle'` | Форма аватара: круг или сквиркл |
| `overlay` | `ReactNode` | `undefined` | Контент оверлея поверх аватара |
| `rightTopCorner` | `ReactNode` | `undefined` | Контент в правом верхнем углу |
| `rightBottomCorner` | `ReactNode` | `undefined` | Контент в правом нижнем углу |
| `innerClassNames` | `InnerClassNamesProp<AvatarContainerElementKey>` | `undefined` | Кастомные классы для внутренних элементов |
| `asChild` | `boolean` | `false` | Использовать Slot для рендеринга как дочерний элемент |

### 🎨 Примеры

```tsx
// Базовый пример с иконкой
<Avatar.Container size={64} form="circle">
  <Avatar.Icon>
    <Icon24Placeholder />
  </Avatar.Icon>
</Avatar.Container>
```

```tsx
// Аватар с изображением и fallback
<Avatar.Container size={64}>
  <Avatar.Image
    src="https://example.com/avatar.jpg"
    fallback="VT"
    fallbackGradient="green"
  />
</Avatar.Container>
```

```tsx
// Аватар с текстом и градиентом
<Avatar.Container size={64}>
  <Avatar.Text gradient="red">
    VT
  </Avatar.Text>
</Avatar.Container>
```

```tsx
// Аватар с оверлеем
<Avatar.Container
  size={64}
  overlay={
    <Avatar.Overlay>
      <Icon24Placeholder />
    </Avatar.Overlay>
  }
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// Аватар как ссылка (asChild)
<Avatar.Container asChild>
  <a href="https://example.com" target="_blank" rel="noreferrer">
    <Avatar.Icon>
      <Icon24Placeholder />
    </Avatar.Icon>
  </a>
</Avatar.Container>
```

```tsx
// Аватар с кнопкой закрытия и индикатором онлайн
<Avatar.Container
  size={64}
  rightTopCorner={<Avatar.CloseButton aria-label="Закрыть" />}
  rightBottomCorner={<Avatar.OnlineDot />}
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

### 🎨 CSS-переменные и классы

**CSS-переменные:**
- `--MaxUi-AvatarContainer_size` — размер контейнера
- `--MaxUi-AvatarContainer__content_radius` — радиус скругления контента

**Классы:**
- `.AvatarContainer` — корневой класс
- `.AvatarContainer_form_circle` — форма круга
- `.AvatarContainer_form_squircle` — форма сквиркла
- `.AvatarContainer__content` — контент контейнера
- `.AvatarContainer__overlay` — оверлей
- `.AvatarContainer__rightBottomCorner` — правый нижний угол
- `.AvatarContainer__rightTopCorner` — правый верхний угол

### 🔧 Типы TypeScript

```ts
type AvatarContainerSize = 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 54 | 56 | 64 | 72 | 80 | 88 | 96 | number;
type AvatarContainerFrom = 'circle' | 'squircle';
type AvatarContainerElementKey = 'overlay' | 'content' | 'rightBottomCorner' | 'rightTopCorner';

interface AvatarContainerProps extends ComponentProps<'div'>, AsChildProp {
  size?: AvatarContainerSize;
  overlay?: ReactNode;
  form?: AvatarContainerFrom;
  innerClassNames?: InnerClassNamesProp<AvatarContainerElementKey>;
  rightTopCorner?: ReactNode;
  rightBottomCorner?: ReactNode;
}
```

### 📱 Особенности

- **Context**: Предоставляет `AvatarContainerContext` с размером для дочерних компонентов
- **asChild**: Поддержка паттерна Slot через `@radix-ui/react-slot`
- **Адаптивность**: Автоматический выбор размера иконок и текста на основе размера контейнера

### ⚠️ Важно

- Контекст размера необходим для корректной работы `AvatarText`, `AvatarOnlineDot` и `AvatarCloseButton`
- При использовании `asChild` убедитесь, что дочерний элемент может принимать `ref` и `className`

### 🔗 Связанные компоненты

- [AvatarImage](#-avatarimage)
- [AvatarIcon](#-avataricon)
- [AvatarText](#-avatartext)
- [AvatarOverlay](#-avataroverlay)
- [AvatarOnlineDot](#-avataronlinedot)
- [AvatarCloseButton](#-avatarclosebutton)

---

## 📷 AvatarImage

Компонент изображения аватара с автоматической обработкой ошибок загрузки и fallback на текст.

### 📦 Импорт
```tsx
import { Avatar } from '@max-ui/components';
// или
import { AvatarImage } from '@max-ui/components/avatar';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `fallback` | `ReactNode` | `undefined` | Контент для отображения при ошибке загрузки |
| `fallbackGradient` | `AvatarTextGradient` | `'red'` | Градиент фона fallback-контейнера |
| `src` | `string` | `undefined` | URL изображения |
| `srcSet` | `string` | `undefined` | Атрибут srcset для responsive images |
| `referrerPolicy` | `ReferrerPolicy` | `undefined` | Политика referrer для запроса изображения |

### 🎨 Примеры

```tsx
// Базовое использование
<Avatar.Container>
  <Avatar.Image src="https://example.com/avatar.jpg" alt="User name" />
</Avatar.Container>
```

```tsx
// С fallback текстом
<Avatar.Container>
  <Avatar.Image
    src="https://example.com/avatar.jpg"
    fallback="VT"
    fallbackGradient="green"
  />
</Avatar.Container>
```

```tsx
// С кастомным fallback
<Avatar.Container>
  <Avatar.Image
    src="https://example.com/avatar.jpg"
    fallback={<Avatar.Icon><Icon24Placeholder /></Avatar.Icon>}
  />
</Avatar.Container>
```

```tsx
// С разными градиентами fallback
<Avatar.Container>
  <Avatar.Image fallback="A" fallbackGradient="blue" />
</Avatar.Container>
<Avatar.Container>
  <Avatar.Image fallback="B" fallbackGradient="purple" />
</Avatar.Container>
```

```tsx
// Responsive изображение
<Avatar.Container>
  <Avatar.Image
    srcSet="small.jpg 48w, large.jpg 96w"
    sizes="48px"
    fallback="U"
  />
</Avatar.Container>
```

### 🎨 CSS-переменные и классы

**Классы:**
- `.AvatarImage` — корневой класс изображения

### 🔧 Типы TypeScript

```ts
interface AvatarImageProps extends ComponentProps<'img'> {
  fallback?: ReactNode;
  fallbackGradient?: AvatarTextGradient;
}

type AvatarTextGradient = 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'custom';
```

### 📱 Особенности

- **Автоматический fallback**: При ошибке загрузки изображения автоматически отображается `AvatarText`
- **Отслеживание статуса**: Использует хук `useImageLoadingStatus` для мониторинга загрузки
- **Градиенты**: Поддержка предопределённых градиентов для fallback

### ⚠️ Важно

- Должен использоваться внутри `Avatar.Container` для корректного наследования размера
- Fallback отображается только при статусе загрузки `'error'`

### 🔗 Связанные компоненты

- [AvatarContainer](#-avatarcontainer)
- [AvatarText](#-avatartext)

---

## 📷 AvatarIcon

Контейнер для иконки внутри аватара с центрированием и стандартными стилями.

### 📦 Импорт
```tsx
import { Avatar } from '@max-ui/components';
// или
import { AvatarIcon } from '@max-ui/components/avatar';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| Все props `<span>` | `ComponentProps<'span'>` | — | Стандартные HTML-атрибуты span |

### 🎨 Примеры

```tsx
// Базовая иконка
<Avatar.Container>
  <Avatar.Icon>
    <Icon24Placeholder />
  </Avatar.Icon>
</Avatar.Container>
```

```tsx
// Иконка с кастомными стилями
<Avatar.Container>
  <Avatar.Icon style={{ backgroundColor: 'custom' }}>
    <Icon24Placeholder />
  </Avatar.Icon>
</Avatar.Container>
```

```tsx
// Иконка с className
<Avatar.Container>
  <Avatar.Icon className="custom-icon-class">
    <Icon24Placeholder />
  </Avatar.Icon>
</Avatar.Container>
```

```tsx
// Разные размеры иконок
<Avatar.Container size={32}>
  <Avatar.Icon><Icon16Placeholder /></Avatar.Icon>
</Avatar.Container>
<Avatar.Container size={64}>
  <Avatar.Icon><Icon24Placeholder /></Avatar.Icon>
</Avatar.Container>
```

```tsx
// Иконка с оверлеем
<Avatar.Container
  overlay={
    <Avatar.Overlay>
      <Icon20Placeholder />
    </Avatar.Overlay>
  }
>
  <Avatar.Icon>
    <Icon24Placeholder />
  </Avatar.Icon>
</Avatar.Container>
```

### 🎨 CSS-переменные и классы

**CSS-переменные:**
- `--background-accent-neutral-fade-secondary` — цвет фона
- `--icon-quaternary` — цвет иконки

**Классы:**
- `.AvatarIcon` — корневой класс

### 🔧 Типы TypeScript

```ts
interface AvatarIconProps extends ComponentProps<'span'> {}
```

### 📱 Особенности

- **Центрирование**: Flexbox для центрирования содержимого
- **Адаптивность**: Занимает 100% ширины и высоты контейнера

### ⚠️ Важно

- Рекомендуется использовать иконки соответствующего размера для текущего размера аватара

### 🔗 Связанные компоненты

- [AvatarContainer](#-avatarcontainer)
- [AvatarImage](#-avatarimage)

---

## 📷 AvatarText

Текстовый аватар с градиентным фоном и автоматическим подбором размера шрифта.

### 📦 Импорт
```tsx
import { Avatar } from '@max-ui/components';
// или
import { AvatarText } from '@max-ui/components/avatar';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `gradient` | `AvatarTextGradient` | `'red'` | Цвет градиента фона |
| `children` | `ReactNode` | — | Текст для отображения |

### 🎨 Примеры

```tsx
// Базовый текстовый аватар
<Avatar.Container>
  <Avatar.Text>VT</Avatar.Text>
</Avatar.Container>
```

```tsx
// Разные градиенты
<Avatar.Container>
  <Avatar.Text gradient="red">R</Avatar.Text>
</Avatar.Container>
<Avatar.Container>
  <Avatar.Text gradient="green">G</Avatar.Text>
</Avatar.Container>
<Avatar.Container>
  <Avatar.Text gradient="blue">B</Avatar.Text>
</Avatar.Container>
<Avatar.Container>
  <Avatar.Text gradient="purple">P</Avatar.Text>
</Avatar.Container>
<Avatar.Container>
  <Avatar.Text gradient="orange">O</Avatar.Text>
</Avatar.Container>
```

```tsx
// Кастомный градиент
<Avatar.Container>
  <Avatar.Text gradient="custom" style={{ background: 'linear-gradient(...)' }}>
    C
  </Avatar.Text>
</Avatar.Container>
```

```tsx
// Разные размеры
<Avatar.Container size={32}>
  <Avatar.Text>XS</Avatar.Text>
</Avatar.Container>
<Avatar.Container size={64}>
  <Avatar.Text>LG</Avatar.Text>
</Avatar.Container>
<Avatar.Container size={96}>
  <Avatar.Text>XL</Avatar.Text>
</Avatar.Container>
```

```tsx
// С кастомными стилями
<Avatar.Container>
  <Avatar.Text className="custom-text" style={{ fontWeight: 700 }}>
    Bold
  </Avatar.Text>
</Avatar.Container>
```

### 🎨 CSS-переменные и классы

**CSS-переменные:**
- `--text-contrast-static` — цвет текста
- `--gradient-red` — красный градиент
- `--gradient-orange` — оранжевый градиент
- `--gradient-green` — зелёный градиент
- `--gradient-blue` — синий градиент
- `--gradient-purple` — фиолетовый градиент

**Классы:**
- `.AvatarText` — корневой класс
- `.AvatarText_gradient_red` — красный градиент
- `.AvatarText_gradient_orange` — оранжевый градиент
- `.AvatarText_gradient_green` — зелёный градиент
- `.AvatarText_gradient_blue` — синий градиент
- `.AvatarText_gradient_purple` — фиолетовый градиент
- `.AvatarText__in` — внутренний контейнер текста

### 🔧 Типы TypeScript

```ts
type AvatarTextGradient = 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'custom';

interface AvatarTextProps extends ComponentProps<'span'> {
  gradient?: AvatarTextGradient;
}
```

### 📱 Особенности

- **Автоматический размер шрифта**: На основе размера контейнера (от 6px до 30px)
- **Градиенты**: 5 предопределённых градиентов + кастомный
- **Font weight**: 600 (semi-bold) по умолчанию

### ⚠️ Важно

- Требует `Avatar.Container` для автоматического расчёта размера шрифта
- Для `gradient="custom"` необходимо передать кастомный `background` через `style`

### 🔗 Связанные компоненты

- [AvatarContainer](#-avatarcontainer)
- [AvatarImage](#-avatarimage)

---

## 📷 AvatarOverlay

Оверлей для отображения контента поверх аватара с полупрозрачным фоном.

### 📦 Импорт
```tsx
import { Avatar } from '@max-ui/components';
// или
import { AvatarOverlay } from '@max-ui/components/avatar';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `onClick` | `MouseEventHandler` | `undefined` | Обработчик клика |
| Все props `<span>` | `ComponentProps<'span'>` | — | Стандартные HTML-атрибуты span |

### 🎨 Примеры

```tsx
// Базовый оверлей с иконкой
<Avatar.Container
  overlay={
    <Avatar.Overlay>
      <Icon24Placeholder />
    </Avatar.Overlay>
  }
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// Оверлей с текстом
<Avatar.Container
  overlay={
    <Avatar.Overlay>
      <span>Edit</span>
    </Avatar.Overlay>
  }
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// Оверлей с обработчиком клика
<Avatar.Container
  overlay={
    <Avatar.Overlay onClick={() => console.log('Overlay clicked')}>
      <Icon24Placeholder />
    </Avatar.Overlay>
  }
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// Оверлей с несколькими элементами
<Avatar.Container
  overlay={
    <Avatar.Overlay>
      <Flex gap={8}>
        <Icon24Placeholder />
        <Icon24Placeholder />
      </Flex>
    </Avatar.Overlay>
  }
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// Оверлей с кастомными стилями
<Avatar.Container
  overlay={
    <Avatar.Overlay style={{ background: 'rgba(0,0,0,0.8)' }}>
      <Icon24Placeholder />
    </Avatar.Overlay>
  }
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

### 🎨 CSS-переменные и классы

**CSS-переменные:**
- `--background-overlay-secondary` — цвет фона оверлея
- `--text-contrast-static` — цвет текста/иконок

**Классы:**
- `.AvatarOverlay` — корневой класс

### 🔧 Типы TypeScript

```ts
interface AvatarOverlayProps extends ComponentProps<'span'> {}
```

### 📱 Особенности

- **Предотвращение кликов**: `onClick` предотвращает всплытие события по умолчанию
- **Центрирование**: Flexbox для центрирования содержимого
- **Полный размер**: Занимает 100% ширины и высоты контейнера

### ⚠️ Важно

- Передаётся через prop `overlay` в `Avatar.Container`
- Использует переменную `--background-overlay-secondary` для фона

### 🔗 Связанные компоненты

- [AvatarContainer](#-avatarcontainer)
- [AvatarImage](#-avatarimage)

---

## 📷 AvatarOnlineDot

Индикатор онлайн-статуса пользователя в правом нижнем углу аватара.

### 📦 Импорт
```tsx
import { Avatar } from '@max-ui/components';
// или
import { AvatarOnlineDot } from '@max-ui/components/avatar';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| Все props `<span>` | `ComponentProps<'span'>` | — | Стандартные HTML-атрибуты span |

### 🎨 Примеры

```tsx
// Базовый индикатор онлайн
<Avatar.Container
  rightBottomCorner={<Avatar.OnlineDot />}
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// С разными размерами аватара
<Avatar.Container size={32} rightBottomCorner={<Avatar.OnlineDot />}>
  <Avatar.Icon><Icon16Placeholder /></Avatar.Icon>
</Avatar.Container>
<Avatar.Container size={64} rightBottomCorner={<Avatar.OnlineDot />}>
  <Avatar.Icon><Icon24Placeholder /></Avatar.Icon>
</Avatar.Container>
<Avatar.Container size={96} rightBottomCorner={<Avatar.OnlineDot />}>
  <Avatar.Icon><Icon24Placeholder /></Avatar.Icon>
</Avatar.Container>
```

```tsx
// С кастомными стилями
<Avatar.Container
  rightBottomCorner={
    <Avatar.OnlineDot style={{ '--dot-color': 'green' } as CSSProperties} />
  }
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// С className
<Avatar.Container
  rightBottomCorner={<Avatar.OnlineDot className="custom-dot" />}
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// В комбинации с другими элементами
<Avatar.Container
  rightTopCorner={<Avatar.CloseButton aria-label="Закрыть" />}
  rightBottomCorner={<Avatar.OnlineDot />}
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

### 🎨 CSS-переменные и классы

**CSS-переменные:**
- `--icon-themed` — цвет точки
- `--background-surface-primary` — цвет рамки вокруг точки

**Классы:**
- `.AvatarOnlineDot` — корневой класс
- `.AvatarOnlineDot_size_xs` — размер XS (< 40px)
- `.AvatarOnlineDot_size_s` — размер S (40-53px)
- `.AvatarOnlineDot_size_m` — размер M (54-71px)
- `.AvatarOnlineDot_size_l` — размер L (≥ 72px)
- `.AvatarOnlineDot__dot` — сама точка

### 🔧 Типы TypeScript

```ts
interface AvatarOnlineDotProps extends ComponentProps<'span'> {}
```

### 📱 Особенности

- **Автоматический размер**: 4 размера (xs, s, m, l) на основе размера контейнера
- **Контекст**: Использует `AvatarContainerContext` для определения размера
- **Позиционирование**: Абсолютное позиционирование в правом нижнем углу

### ⚠️ Важно

- Должен использоваться внутри `Avatar.Container` для автоматического определения размера
- Передаётся через prop `rightBottomCorner`

### 🔗 Связанные компоненты

- [AvatarContainer](#-avatarcontainer)
- [AvatarCloseButton](#-avatarclosebutton)

---

## 📷 AvatarCloseButton

Кнопка закрытия/удаления аватара в правом верхнем углу.

### 📦 Импорт
```tsx
import { Avatar } from '@max-ui/components';
// или
import { AvatarCloseButton } from '@max-ui/components/avatar';
```

### 📋 Props
| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `onClick` | `MouseEventHandler` | `undefined` | Обработчик клика |
| Все props `<button>` | `ComponentProps<'button'>` | — | Стандартные HTML-атрибуты button |

### 🎨 Примеры

```tsx
// Базовая кнопка закрытия
<Avatar.Container
  rightTopCorner={<Avatar.CloseButton aria-label="Закрыть" />}
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// С обработчиком клика
<Avatar.Container
  rightTopCorner={
    <Avatar.CloseButton
      aria-label="Удалить"
      onClick={(e) => {
        e.preventDefault();
        console.log('Avatar removed');
      }}
    />
  }
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// С разными размерами аватара
<Avatar.Container size={32} rightTopCorner={<Avatar.CloseButton aria-label="Close" />}>
  <Avatar.Icon><Icon16Placeholder /></Avatar.Icon>
</Avatar.Container>
<Avatar.Container size={64} rightTopCorner={<Avatar.CloseButton aria-label="Close" />}>
  <Avatar.Icon><Icon24Placeholder /></Avatar.Icon>
</Avatar.Container>
<Avatar.Container size={96} rightTopCorner={<Avatar.CloseButton aria-label="Close" />}>
  <Avatar.Icon><Icon24Placeholder /></Avatar.Icon>
</Avatar.Container>
```

```tsx
// В комбинации с OnlineDot
<Avatar.Container
  rightTopCorner={<Avatar.CloseButton aria-label="Закрыть" />}
  rightBottomCorner={<Avatar.OnlineDot />}
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

```tsx
// С кастомными стилями
<Avatar.Container
  rightTopCorner={
    <Avatar.CloseButton
      aria-label="Закрыть"
      className="custom-close-button"
    />
  }
>
  <Avatar.Image src="https://example.com/avatar.jpg" />
</Avatar.Container>
```

### 🎨 CSS-переменные и классы

**Классы:**
- `.AvatarCloseButton` — корневой класс кнопки

### 🔧 Типы TypeScript

```ts
interface AvatarCloseButtonProps extends ComponentProps<'button'> {}
```

### 📱 Особенности

- **Автоматический размер иконки**: 4 размера (12, 16, 20, 24px) на основе размера контейнера
- **Предотвращение клика**: `onClick` предотвращает стандартное поведение
- **Контекст**: Использует `AvatarContainerContext` для определения размера
- **SvgButton**: Основан на компоненте `SvgButton` для доступности

### ⚠️ Важно

- Всегда добавляйте `aria-label` для доступности
- Должен использоваться внутри `Avatar.Container` для автоматического определения размера
- Передаётся через prop `rightTopCorner`

### 🔗 Связанные компоненты

- [AvatarContainer](#-avatarcontainer)
- [AvatarOnlineDot](#-avataronlinedot)
- [SvgButton](#-svgbutton)

---

## 📚 Общие типы

```ts
// Размеры аватара
type AvatarContainerSize = 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 54 | 56 | 64 | 72 | 80 | 88 | 96 | number;

// Формы аватара
type AvatarContainerFrom = 'circle' | 'squircle';

// Градиенты для AvatarText
type AvatarTextGradient = 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'custom';

// Ключи внутренних элементов
type AvatarContainerElementKey = 'overlay' | 'content' | 'rightBottomCorner' | 'rightTopCorner';

// Props для всех компонентов Avatar
interface AvatarCloseButtonProps extends ComponentProps<'button'> {}
interface AvatarIconProps extends ComponentProps<'span'> {}
interface AvatarImageProps extends ComponentProps<'img'> {
  fallback?: ReactNode;
  fallbackGradient?: AvatarTextGradient;
}
interface AvatarOnlineDotProps extends ComponentProps<'span'> {}
interface AvatarOverlayProps extends ComponentProps<'span'> {}
interface AvatarTextProps extends ComponentProps<'span'> {
  gradient?: AvatarTextGradient;
}
```

---

*Документация сгенерирована автоматически из исходного кода MAX UI*
