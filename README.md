# React

# Configuration Prettier

Ce projet utilise Prettier pour le formatage automatique du code. Voici les règles de configuration utilisées :

## Règles de formatage (.prettierrc)

- `semi: true` : Ajoute des points-virgules à la fin des instructions
- `tabWidth: 2` : Utilise 2 espaces pour l'indentation
- `printWidth: 100` : Limite la longueur des lignes à 100 caractères
- `singleQuote: true` : Utilise des guillemets simples au lieu des doubles
- `trailingComma: "es5"` : Ajoute des virgules finales selon les règles ES5
- `bracketSpacing: true` : Ajoute des espaces entre les accolades
- `jsxBracketSameLine: false` : Place les accolades de fermeture JSX sur une nouvelle ligne
- `arrowParens: "avoid"` : Évite les parenthèses pour les fonctions fléchées avec un seul paramètre
- `endOfLine: "auto"` : Gère automatiquement les fins de ligne selon le système d'exploitation
- `useTabs: false` : Utilise des espaces au lieu des tabulations pour l'indentation
- `indentSize: 2` : Définit la taille de l'indentation à 2 espaces

## Règles d'indentation

Le code suit ces règles d'indentation :
- Utilisation d'espaces (pas de tabulations)
- 2 espaces par niveau d'indentation
- Indentation cohérente pour les blocs de code, les objets et les tableaux
- Alignement des accolades et des parenthèses

## Fichiers ignorés (.prettierignore)

Les fichiers et dossiers suivants sont exclus du formatage :

- Dossiers de build et de dépendances (`build`, `dist`, `node_modules`)
- Fichiers de cache (`.cache`, `.next`)
- Fichiers de configuration des gestionnaires de paquets (`package-lock.json`, `yarn.lock`)
- Fichiers système (`.DS_Store`, `Thumbs.db`)