# إعداد FormSpree لإرسال البريد الإلكتروني الفعلي

## المشكلة الحالية:
البرنامج لا يرسل البريد الإلكتروني لأنه يستخدم FormSpree ID تجريبي (`xjkbvjaa`)

## الحل: إعداد حساب FormSpree جديد

### الخطوات:

1. **إنشاء حساب FormSpree:**
   - اذهب إلى https://formspree.io
   - انقر على "Sign Up" وأنشئ حساب جديد
   - أكّد بريدك الإلكتروني

2. **إنشاء نموذجين:**
   
   **النموذج الأول: لإرسال معلومات الاتصال إلى المستخدمين**
   - انقر على "Create a new form"
   - سمه "User Contact Forms"
   - استخدم أي بريد إلكتروني كمستقبل

   **النموذج الثاني: لإرسال معلومات المشاركة إلى maihany104@gmail.com**
   - انقر على "Create a new form"
   - سمه "Share Contact Forms"
   - استخدم maihany104@gmail.com كمستقبل

3. **نسخ كوديْ النموذجين:**
   من كل نموذج، انسخ الـ Form ID الذي سيكون مثل: `f/xbzpgqkl`

4. **تحديث الكود:**
   افتح ملف `src/components/BusinessCard.jsx` واستبدل:
   - في دالة `handleEmailSubmit`: استبدل `xjkbvjaa` بـ Form ID الأول
   - في دالة `handleShareContact`: استبدل `xjkbvjaa` بـ Form ID الثاني

### مثال على الاستبدال:
```javascript
// بدلاً من:
const response = await fetch('https://formspree.io/f/xjkbvjaa', {

// ضع الكود الجديد:
const response = await fetch('https://formspree.io/f/[الكود_الخاص_بك]', {
```

## بعد إتمام الإعداد:
- سيتم إرسال معلومات الاتصال إلى البريد الذي يدخله المستخدم
- سيتم إرسال معلومات المشاركة إلى maihany104@gmail.com
