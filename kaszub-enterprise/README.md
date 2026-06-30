# Kaszub Enterprise — strona internetowa

Statyczna strona firmowa gotowa do edycji treści bez znajomości programowania.

## Struktura projektu

```
kaszub-enterprise/
├── index.html          # Strona główna
├── about.html          # O nas
├── services.html       # Usługi
├── contact.html        # Kontakt
├── css/style.css       # Style wizualne
├── js/main.js          # Ładowanie treści z plików Markdown
└── content/            # ← TU EDYTUJESZ TREŚĆ
    ├── home-hero.md
    ├── home-intro.md
    ├── home-features.md
    ├── about-main.md
    ├── about-values.md
    ├── services-main.md
    ├── services-list.md
    ├── contact-main.md
    └── contact-details.md
```

## Jak dodać lub zmienić treść

1. Otwórz odpowiedni plik `.md` w folderze `content/`.
2. Edytuj tekst w formacie Markdown (nagłówki `#`, listy `-`, linki `[tekst](url)`).
3. Zapisz plik i odśwież stronę w przeglądarce.

### Dodanie nowej sekcji

1. Utwórz nowy plik w `content/`, np. `nowa-sekcja.md`.
2. W wybranym pliku HTML dodaj element:

```html
<div class="md-content" data-md="nowa-sekcja.md"></div>
```

## Podgląd lokalny

Treść ładuje się przez `fetch()` — **nie otwieraj plików bezpośrednio** (`file://`). Uruchom lokalny serwer:

```powershell
cd C:\Users\kprzytocki\Projects\kaszub-enterprise
python -m http.server 8080
```

Następnie otwórz: **http://localhost:8080**

Alternatywnie: rozszerzenie **Live Server** w Cursor/VS Code.

## Technologie

- HTML5, CSS3, JavaScript (bez frameworków)
- [marked.js](https://marked.js.org/) — renderowanie Markdown (CDN)
- Pliki treści w Markdown — łatwa edycja w dowolnym edytorze
