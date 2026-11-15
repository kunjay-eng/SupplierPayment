/* ===== ตั้งค่าเพียงไฟล์นี้ไฟล์เดียว =====
   1) APPS_SCRIPT_URL = ลิงก์ Web App ของระบบ (Apps Script > Deploy > Web app > URL ที่ลงท้ายด้วย /exec)
   2) MODE: "iframe" = เปิดระบบเต็มจอในแอปนี้ (ต้องใช้ระบบ v2.1 ขึ้นไป)
            "redirect" = ส่งไปหน้า Apps Script ตรง ๆ (ใช้เมื่อ iframe ไม่ขึ้น/ต้องล็อกอิน Google บน iPhone) */
window.APP_CONFIG = {
  APPS_SCRIPT_URL: "",
  APP_NAME: "Supplier Payment",
  MODE: "iframe"
};
