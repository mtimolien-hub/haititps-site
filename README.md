# haititps-site
Google Sites package for haititps.us
# HaitiTPS.us — Static Website Package
## Sagesse Solutions Administratives (SSA)

A professional trilingual static website connecting Haitian immigrants with expert USCIS application support.

---

## Features

- **Trilingual**: Haitian Creole (primary), English, French — with prominent floating toggle
- **7 Pages**: Home, Services, TPS Info, About, Contact, Privacy Policy, Legal Disclaimer
- **Interactive Trivia Game**: 10-question immigration policy quiz (FAQ-style) in all 3 languages
- **Contact Form**: Integrated with FormSubmit.co for email delivery (no server needed)
- **Legal Compliance**: Privacy policy + legal disclaimer on every page (header bar + footer)
- **Current USCIS Policy**: Reflects April 2026 TPS status, court orders, H.R.1 fee changes
- **Responsive Design**: Mobile-first, works on all devices
- **WhatsApp Integration**: Floating button for instant client contact

---

## File Structure

```
haititps-google-sites/
├── css/
│   └── style.css              # Complete stylesheet (Haiti flag colors, responsive)
├── js/
│   ├── i18n.js                # Trilingual translation engine (~100+ keys)
│   ├── trivia.js              # Immigration trivia game (10 questions, 3 languages)
│   └── main.js                # FAQ accordion, animations, mobile menu
├── images/
│   └── favicon.svg            # Haiti-flag-inspired favicon with "SSA"
├── index.html                 # Home page (hero, TPS alert, services grid, trivia, CTA)
├── services.html              # Detailed services (8 service blocks)
├── tps-info.html              # TPS information (status, key dates, eligibility, FAQ)
├── about.html                 # About SSA (mission, values, what we do/don't do)
├── contact.html               # Contact (info card + form with FormSubmit.co)
├── privacy.html               # Privacy policy (7 sections)
├── legal.html                 # Legal disclaimer (8 sections)
└── README.md                  # This file
```

---

## Hosting Options

### Option A: GitHub Pages (Recommended — Free, Fast, Custom Domain)

This is the simplest and most reliable way to host this site with your custom domain.

#### Step 1: Create a GitHub Account
1. Go to https://github.com and sign up (free)
2. Verify your email address

#### Step 2: Create a Repository
1. Click the **+** icon (top-right) → **New repository**
2. Repository name: `haititps-site` (or any name you prefer)
3. Set it to **Public**
4. Click **Create repository**

#### Step 3: Upload Files
1. On your new repository page, click **uploading an existing file**
2. Drag and drop ALL files and folders from this package into the upload area
   - Make sure the folder structure is preserved (css/, js/, images/ folders)
3. Click **Commit changes**

#### Step 4: Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Branch: **main**, Folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes — your site will be live at: `https://yourusername.github.io/haititps-site/`

#### Step 5: Connect Your Custom Domain (haititps.us)
1. In **Settings → Pages**, under **Custom domain**, enter: `www.haititps.us`
2. Click **Save**
3. Go to your domain registrar (where you bought haititps.us) and update DNS:

   **For www.haititps.us:**
   - Type: CNAME
   - Name: www
   - Value: `yourusername.github.io`

   **For haititps.us (apex domain):**
   - Type: A
   - Value: `185.199.108.153`
   - Type: A
   - Value: `185.199.109.153`
   - Type: A
   - Value: `185.199.110.153`
   - Type: A
   - Value: `185.199.111.153`

4. Wait up to 24-48 hours for DNS propagation
5. Back in GitHub Pages settings, check **Enforce HTTPS**

---

### Option B: Google Sites (Embed via iframes)

Google Sites does not support direct HTML hosting. However, you can:

1. Host the files on GitHub Pages (Option A above)
2. In Google Sites, use **Insert → Embed → By URL** to embed each page as an iframe
3. This gives you the Google Sites wrapper with your custom content inside

Note: This approach has limitations (double scrollbars, limited SEO, reduced performance). Option A is strongly recommended instead.

---

### Option C: Netlify (Alternative Free Host)

1. Go to https://www.netlify.com and sign up (free)
2. Drag and drop this entire folder onto the Netlify dashboard
3. Your site deploys instantly with a free URL
4. Under **Domain settings**, add your custom domain `haititps.us`
5. Update DNS records as Netlify instructs

---

## Contact Form Setup

The contact form uses **FormSubmit.co** — a free service that forwards form submissions to your email.

### First-Time Setup:
1. After deploying the site, go to the contact page and submit a test message
2. FormSubmit.co will send a confirmation email to **info@haititps.us**
3. Click the confirmation link in that email
4. All future form submissions will be forwarded to your email

### To Change the Receiving Email:
1. Open `contact.html`
2. Find the line: `action="https://formsubmit.co/info@haititps.us"`
3. Replace `info@haititps.us` with your preferred email address
4. Re-deploy the site and confirm the new email

---

## Language Toggle

The site defaults to **Haitian Creole (HT)**. Users can switch to English or French using the floating toggle buttons on the right side of every page. The language preference is saved in the browser's localStorage, so it persists across page visits.

---

## Updating Content

### To update TPS status or USCIS policy information:
1. Edit the relevant HTML file (e.g., `tps-info.html`, `index.html`)
2. Update the text content in the Haitian Creole sections
3. Open `js/i18n.js` and update the corresponding translation keys for English and French
4. Re-deploy the updated files

### To add or modify trivia questions:
1. Open `js/trivia.js`
2. Follow the existing question format to add/edit questions
3. Each question needs text in all 3 languages (ht, en, fr)

---

## Business Information

- **Company**: Sagesse Solutions Administratives (SSA)
- **Phone/WhatsApp**: +1 (302) 290-8592
- **Address**: P.O. Box 282, Pittsville, MD 21850, USA
- **Website**: haititps.us
- **Hours**: Mon-Fri 9AM-6PM EST, Sat 10AM-2PM EST

---

## Technical Notes

- Pure HTML/CSS/JS — no build tools, no server-side code, no dependencies
- Google Fonts loaded externally (Poppins + Montserrat)
- All pages share the same CSS file and JS files (no inline duplication)
- FormSubmit.co handles contact form without any backend
- Responsive breakpoints: 992px, 768px, 480px
- Tested for mobile-first design

---

© 2026 Sagesse Solutions Administratives (SSA) — haititps.us
