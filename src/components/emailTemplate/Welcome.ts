import { information } from "@/data/information";

const welcome = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cảm ơn bạn đã ghé thăm</title>
  <style type="text/css">
    /* Base styles */
    body, html {
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.4;
      color: #333333;
      background-color: #f5f5f5;
    }
    
    /* Email container */
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      text-align: center;
      
    }
    
    /* Header */
    .header {
      padding: 30px 20px;
      background-color: #1e40af;
      color: white;
    }
    
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    
    /* Content */
    .content {
      padding: 30px 20px;
    }
    
    .thank-you-message {
      margin-bottom: 25px;
      font-size: 16px;
    }
    
    /* Contact info */
    .contact-info {
      margin: 25px 0;
      padding: 15px;
      background-color: #f8f9fa;
    }
    
    .contact-info p {
      margin: 8px 0;
    }
    
    .contact-info a {
      color: #1e40af;
      text-decoration: none;
    }
    
    /* Footer */
    .footer {
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #666666;
      background-color: #f0f0f0;
    }
    
    /* Button */
    .button {
      display: inline-block;
      padding: 12px 25px;
      background-color: #1e40af;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      margin: 15px 0;
    }
    
    /* Responsive */
    @media screen and (max-width: 480px) {
      .header, .content {
        padding: 20px 15px;
      }
      
      .header h1 {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <h1>Cảm ơn bạn đã ghé thăm</h1>
    </div>
    
    <!-- Content -->
    <div class="content">
      <div class="thank-you-message">
        <p>Xin chào,</p>
        <p>Cảm ơn bạn đã đăng nhập và dành thời gian xem qua portfolio cá nhân của tôi.</p>
        <p>Hy vọng bạn sẽ tìm thấy điều gì đó thú vị hoặc hữu ích tại đây.</p>
      </div>
      
      <a href=${information.myPortfolio} class="button">Truy cập Portfolio</a>
      
      <div class="contact-info">
        <p><strong>Thông tin liên hệ:</strong></p>
        <p>📧 Email: <a href=${information.email}>${information.email}</a></p>
        <p>📘 Facebook: <a href=${information.facebook}>${information.facebook}</a></p>
        <p>📞 Điện thoại: ${information.phone}</p>
      </div>
      
      <p>Trân trọng,</p>
      <p><strong>${information.author}</strong></p>
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <p>© 2023 ${information.author}. Tất cả quyền được bảo lưu.</p>
    </div>
  </div>
</body>
</html>
`;

export default welcome;
