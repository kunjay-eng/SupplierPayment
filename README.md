# Supplier Payment — ตัวติดตั้งไอคอนบนมือถือ (GitHub Pages) v1.0

ตัวห่อ (PWA wrapper) ที่โฮสต์บน GitHub Pages ฟรี ทำให้ระบบ Apps Script ของคุณมี **ไอคอนบนหน้าจอหลัก** เปิดเต็มจอเหมือนแอป
ไม่เก็บข้อมูลใด ๆ — ข้อมูลยังอยู่ใน Google Sheets ของคุณเหมือนเดิม

## ขั้นตอน (ทำครั้งเดียว)

**1. อัปเดตระบบเป็น v2.1 ขึ้นไป** (`WebApp.gs` เพิ่มการอนุญาตให้เปิดในกรอบแอปได้)
แล้วที่ Apps Script: **Deploy → Manage deployments → ✏️ แก้ → Version: New version → Deploy**
ตั้งค่า Web app: *Execute as: Me* · *Who has access:* ตามที่ใช้อยู่ (ถ้าเลือก Anyone with Google account ดูหมายเหตุ iPhone ด้านล่าง)
คัดลอก URL ที่ลงท้าย `/exec`

**2. สร้าง GitHub repo**
- github.com → **New repository** → ตั้งชื่อ เช่น `supplier-pay` → Public → Create
- **Add file → Upload files** → ลากไฟล์/โฟลเดอร์ทั้งหมดในแพ็กนี้ขึ้นไป (รวมโฟลเดอร์ `icons` และไฟล์ `.nojekyll`) → Commit

**3. ใส่ลิงก์ระบบ**
- เปิดไฟล์ `config.js` ใน GitHub → ✏️ แก้ → วาง URL ลงใน `APPS_SCRIPT_URL: "..."` → Commit

**4. เปิด GitHub Pages**
- Settings → **Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save
- รอ 1–2 นาที จะได้ลิงก์ `https://<ชื่อผู้ใช้>.github.io/supplier-pay/`

**5. ติดตั้งบนมือถือ**
- เปิดลิงก์ในข้อ 4 บนมือถือ → ทำตามขั้นตอนที่หน้าจอ
  - **Android (Chrome):** กดปุ่ม *ติดตั้งลงหน้าจอหลัก*
  - **iPhone (Safari):** แชร์ → *เพิ่มไปยังหน้าจอโฮม*

## ไฟล์ในแพ็กนี้
| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | หน้าติดตั้ง (ตรวจเครื่อง, ปุ่มติดตั้ง, วิธีทำบน iOS/Android) |
| `app.html` | ตัวเปิดระบบเต็มจอ (ไอคอนบนหน้าจอหลักชี้มาที่ไฟล์นี้) |
| `config.js` | **ไฟล์เดียวที่ต้องแก้** — ลิงก์ระบบ และโหมดเปิด |
| `manifest.webmanifest`, `sw.js` | ข้อมูล PWA / แคชเฉพาะตัวห่อ (ไม่แคชข้อมูลการเงิน) |
| `icons/` | ไอคอนจากรูปที่ให้มา (192, 512, maskable, iOS 180, favicon) |

## แก้ปัญหา
- **หน้าระบบไม่ขึ้น/ขาว ในแอป** → ใน `config.js` เปลี่ยน `MODE` เป็น `"redirect"` (หรือกดปุ่ม *เปิดตรง* ที่เด้งขึ้นมาในแอป) — ต้องแน่ใจว่าใช้ระบบ v2.1+ และ Deploy เป็น New version แล้ว
- **iPhone ให้ล็อกอิน Google วนซ้ำ** → Safari บล็อกคุกกี้ของเว็บอื่นในกรอบ: ใช้ `MODE: "redirect"`
- **เปลี่ยนไอคอน** → แทนที่ไฟล์ใน `icons/` (ชื่อเดิม ขนาดเดิม) ถ้าไอคอนบนมือถือไม่เปลี่ยน ให้ลบแล้วติดตั้งใหม่
- **แก้ config.js แล้วยังเป็นค่าเดิม** → ปิดแอปแล้วเปิดใหม่ (แคชตัวห่ออัปเดตเมื่อออนไลน์)
- ลิงก์ต้องขึ้นต้นด้วย `https://script.google.com/macros/s/` มิฉะนั้นตัวห่อจะปฏิเสธ (กันลิงก์แปลกปลอม)
