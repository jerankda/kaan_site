# Kaan Reinigungsservice - React Website

Eine moderne, saubere React-Website für Kaan Reinigungsservice mit allen gewünschten Anforderungen.

## 🚀 Features

### **1. Banner Section**
- Hero-Bereich mit Call-to-Action Button
- Responsive Design für alle Bildschirmgrößen
- Moderne Farbverläufe

### **2. Wer sind wir Section**
- Unternehmensvorstellung mit Platzhalter für Team-Fotos
- Professionelle Darstellung der Firmenphilosophie

### **3. Qualitätsstandards**
- Vier Hauptqualitätsmerkmale mit Emojis
- Hover-Effekte und Animationen
- Responsive Grid-Layout

### **4. Leistungsaufstellung**
- **Glasreinigung**: Fensterreinigung, Wintergartenreinigung, Glasversiegelung
- **Gartenarbeit**: Heckenschnitt, Beetpflege, Rasenpflege, Unkrautbeseitigung, Sonstige Leistungen
- **Steinreinigung**: Einfahrtsreinigung, Terrassenboden Reinigung, Steinversiegelung
- **Unterhaltsreinigung**: Gewerbliche Räumlichkeiten, Treppenhausreinigung, Sanitäranlagen

### **5. Referenzen**
- Platzhalter für Referenzfotos
- Responsive Grid-Layout
- Hover-Effekte

### **6. Kontaktformular**
- Unverbindliches Angebot anfordern
- Kontaktdaten mit Emojis
- Formularvalidierung
- Responsive Design

### **7. Impressum & Kontaktdaten**
- Modal-Fenster für Impressum
- Vollständige rechtliche Informationen
- Footer mit allen wichtigen Links

## 🛠️ Technische Details

### **Technologien**
- **React 18** - Moderne React-Funktionalitäten
- **CSS Grid & Flexbox** - Moderne Layouts
- **Responsive Design** - Mobile-first Ansatz
- **ES6+ Features** - Moderne JavaScript-Syntax
- **Component-based Architecture** - Wartbare Komponenten

### **Dateistruktur**
```
src/
├── components/
│   ├── Navbar.js          # Navigation
│   ├── Banner.js          # Hero-Bereich
│   ├── About.js           # Wer sind wir
│   ├── Quality.js         # Qualitätsstandards
│   ├── Services.js        # Leistungsaufstellung
│   ├── References.js      # Referenzen
│   ├── Contact.js         # Kontaktformular
│   ├── Footer.js          # Footer
│   └── ImpressumModal.js  # Impressum Modal
├── App.js                 # Hauptkomponente
├── index.js              # Einstiegspunkt
└── index.css             # Globale Styles
```

## 🚀 Installation & Setup

### **Voraussetzungen**
- Node.js (Version 16 oder höher)
- npm oder yarn

### **Installation**
1. **Repository klonen oder Dateien herunterladen**
   ```bash
   git clone [repository-url]
   cd kaan-reinigung
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm start
   ```

4. **Website aufrufen**
   - Öffnen Sie `http://localhost:3000` in Ihrem Browser

### **Build für Produktion**
```bash
npm run build
```

## 📱 Mobile-First Design

- **Responsive Design**: Funktioniert perfekt auf allen Bildschirmgrößen
- **Mobile Navigation**: Hamburger-Menü für mobile Geräte
- **Touch-friendly**: Optimierte Buttons und Formulare für mobile
- **Moderne UI**: Sauberes, professionelles Design

## 🔧 Anpassungen

### **Kontaktdaten ändern**
Bearbeiten Sie die Kontaktdaten in den entsprechenden Komponenten:
- `Contact.js` - Kontaktformular und Kontaktdaten
- `Footer.js` - Footer-Informationen

### **Bilder hinzufügen**
Ersetzen Sie die Emoji-Platzhalter durch echte Bilder:
```jsx
// Statt:
<span className="placeholder-icon">👥</span>

// Verwenden Sie:
<img src="/path/to/image.jpg" alt="Beschreibung" />
```

### **Farben anpassen**
Ändern Sie die Hauptfarben in den CSS-Dateien:
- Primärfarbe: `#2563eb` (Blau)
- Akzentfarbe: `#fbbf24` (Gelb)
- Hintergrund: `#f8fafc` (Hellgrau)

## 📧 Formular-Funktionalität

Das Kontaktformular ist derzeit mit Platzhalter-Funktionalität ausgestattet. Für die Produktivumgebung:

1. **Backend-Integration**: Verbinden Sie das Formular mit Ihrem E-Mail-Service oder CMS
2. **Spam-Schutz**: Fügen Sie reCAPTCHA oder ähnliche Schutzmaßnahmen hinzu
3. **E-Mail-Benachrichtigungen**: Konfigurieren Sie automatische E-Mail-Benachrichtigungen

## 🌟 Besondere Features

- **Component-based**: Modulare, wartbare Komponenten
- **State Management**: React Hooks für lokalen State
- **Responsive Design**: Mobile-first Ansatz
- **Clean Code**: Saubere, lesbare Struktur
- **Performance**: Optimierte React-Rendering

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🔧 Wartung & Updates

### **Regelmäßige Updates**
- Überprüfen Sie alle Kontaktdaten
- Aktualisieren Sie Referenzen und Bilder
- Testen Sie das Kontaktformular

### **Performance-Optimierung**
- Komprimieren Sie Bilder
- Nutzen Sie React.memo für Komponenten
- Implementieren Sie Lazy Loading

## 📞 Support

Bei Fragen oder Problemen:
- Überprüfen Sie die Browser-Konsole auf JavaScript-Fehler
- Testen Sie die Website auf verschiedenen Geräten
- Stellen Sie sicher, dass alle Abhängigkeiten installiert sind

## 📄 Lizenz

Dieses Projekt wurde für Kaan Reinigungsservice entwickelt. Alle Rechte vorbehalten.

---

**Entwickelt mit React ❤️ für professionelle Reinigungsdienstleistungen**
