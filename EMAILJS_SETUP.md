# EmailJS Setup Instructions

## خطوات إعداد EmailJS لإرسال الرسائل من الموقع

### 1. إنشاء حساب على EmailJS
1. اذهب إلى [EmailJS](https://www.emailjs.com/)
2. اضغط على **Sign Up** وأنشئ حساب مجاني
3. سجل الدخول إلى لوحة التحكم

### 2. ربط خدمة البريد الإلكتروني
1. من لوحة التحكم، اذهب إلى **Email Services**
2. اضغط على **Add New Service**
3. اختر **Gmail** (أو أي خدمة تفضلها)
4. اتبع التعليمات لربط حساب Gmail الخاص بك: `mohamed.ali.sabber@gmail.com`
5. احفظ الـ **Service ID** (ستحتاجه لاحقاً)

### 3. إنشاء Email Template
1. اذهب إلى **Email Templates**
2. اضغط على **Create New Template**
3. استخدم هذا النموذج (HTML):

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #34495e; font-size: 14px; margin: 5px 0">
            📧 {{from_email}}
          </div>
          <div style="color: #7f8c8d; font-size: 13px; margin-bottom: 10px">
            📝 Subject: {{subject}}
          </div>
          <p style="font-size: 16px; color: #2c3e50; line-height: 1.6">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
  <div style="margin-top: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 5px; font-size: 11px; color: #7f8c8d; text-align: center">
    This message was sent from your portfolio contact form at {{from_email}}
  </div>
</div>
```

4. في الإعدادات:
   - **Subject**: `New Contact from Portfolio: {{subject}}`
   - **To Email**: `mohamed.ali.sabber@gmail.com`
   - **From Name**: `Portfolio Contact Form`
   - **Reply To**: `{{from_email}}`
5. احفظ الـ **Template ID** (ستحتاجه لاحقاً)

### 4. الحصول على Public Key
1. اذهب إلى **Account** > **General**
2. ستجد الـ **Public Key** في الإعدادات العامة
3. انسخه (ستحتاجه لاحقاً)

### 5. تحديث الكود
افتح ملف: `src/app/components/contact/contact.component.ts`

واستبدل هذه القيم:

```typescript
// السطر 51
emailjs.init('YOUR_PUBLIC_KEY');  // ضع Public Key هنا

// الأسطر 61-63
await emailjs.send(
    'YOUR_SERVICE_ID',     // ضع Service ID هنا
    'YOUR_TEMPLATE_ID',    // ضع Template ID هنا
    templateParams
);
```

### مثال على الكود النهائي:
```typescript
emailjs.init('user_abc123xyz');

await emailjs.send(
    'service_gmail123',
    'template_contact456',
    templateParams
);
```

### 6. اختبار الفورم
1. شغل المشروع: `npm start`
2. اذهب إلى صفحة Contact
3. املأ الفورم وأرسل رسالة تجريبية
4. افحص إيميلك للتأكد من وصول الرسالة

### ملاحظات مهمة:
- الخطة المجانية في EmailJS تسمح بـ 200 رسالة شهرياً
- تأكد من تفعيل "Less secure app access" في Gmail إذا لزم الأمر
- يمكنك استخدام Gmail App Password للأمان الأفضل

### إذا واجهتك مشاكل:
1. تأكد من صحة الـ IDs والـ Public Key
2. افحص الـ Console في المتصفح للأخطاء
3. تحقق من إعدادات الأمان في Gmail
4. راجع [EmailJS Documentation](https://www.emailjs.com/docs/)
