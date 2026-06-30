# Publikacja w internecie (GitHub Pages)

## Szybkie wdrożenie (~2 min)

1. Zaloguj się do GitHub CLI:
   ```powershell
   gh auth login
   ```

2. W katalogu projektu uruchom:
   ```powershell
   .\deploy-one-shot.ps1
   ```

3. Na GitHubie: **Settings → Pages → Build and deployment → Source: GitHub Actions**

4. Po zielonym workflow (1–2 min) strona będzie pod adresem:
   `https://<twoj-login>.github.io/kaszub-enterprise/`

## Podgląd lokalny

```powershell
python -m http.server 8080
```

Otwórz http://localhost:8080
