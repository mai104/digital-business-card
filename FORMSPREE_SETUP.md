# إعداد FormSpree لإرسال البريد الإلكتروني

## الخطوات لإعداد FormSpre:

1. اذهب إلى https://formspree.io
2. أنشئ حساب جديد أو سجل دخول
3. أنشئ نموذج جديد (New Form)
4. نسق النموذج ليستقبل البيانات على البريد: maihany104@gmail.com
5. احصل على Form ID من صفحة النموذج
6. نسخ Form ID وضعه في مكان YOUR_FORM_ID في BusinessCard.jsx

## استبدال حالي في الكود:

```javascript
// البحث عن هذا السطر واستبداله
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {

// إلى
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## حالياً:
- البرنامج يعمل في وضع Demo
- عند الضغط على أي زر، يظهر alert يوضح ما سيتم إرساله
- بعد إعداد FormSpree، ستتم إزالة الـ alerts واستخدام fetch الحقيقي

## لاستخدام الـ alerts واختبار البرنامج:
1. شغّل npm run dev
2. اضغط على Save Contact
3. جرب Download VCF
4. جرب Receive by Email
5. أدخل بريد إلكتروني واضغط Receive
6. املأ نموذج Share your contact معلومات واضغط Send

كل العمليات ستظهر في alerts توضح البيانات التي ستُرسل فعلياً.
