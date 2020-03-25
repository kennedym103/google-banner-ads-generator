const Style4 = `*{margin:0;padding:0;border:0;background-size:cover;background-repeat:no-repeat;background-position:50% 50%}#banner{border:1px solid red;-webkit-box-sizing:border-box;box-sizing:border-box}#banner #bg-exit1{position:absolute;left:0;top:0;width:100%;height:100%;z-index:100000 !important}#banner #bg-exit2{z-index:200000 !important}*{font-family:inherit;font-weight:400}#banner{position:relative;overflow:hidden;width:300px;height:250px;background:#1b649b}#banner .banner-logo{position:absolute;z-index:900;right:10px;top:10px;left:auto;bottom:auto;width:calc(50% - 20px);height:calc(40% - 20px);background-size:contain;background-position:50% 50%}#banner .banner-images{top:0;bottom:0;position:absolute;left:0;right:50%;width:auto;z-index:200;background:#666;overflow:hidden}#banner .banner-image{position:absolute;z-index:1;left:0;top:0;width:100%;height:100%}#banner .banner-shape{position:absolute;z-index:800;left:50%;top:0;width:50%;height:100%;background:#fff;-webkit-transform:none;-ms-transform:none;transform:none}#banner .banner-button{display:none;position:absolute;z-index:1200;right:20px;left:auto;bottom:20px;top:auto;padding:0;min-width:0;line-height:25px;width:calc(50% - 40px - 4px);background:none;color:#fff;text-align:center;text-decoration:none;font-size:13px;white-space:nowrap;border:2px solid #fff}#banner .banner-messages{position:absolute;z-index:9999;left:50%;right:0;bottom:60px;top:80px;width:auto;height:auto;text-align:center;padding:0}#banner .banner-messages .banner-messages-shape{display:none}#banner .banner-messages .banner-message{display:none;position:absolute;left:20px;right:20px;top:50%;width:auto;-webkit-transform:none;-ms-transform:none;transform:none;font-size:15px;line-height:20px;font-weight:300;letter-spacing:0;color:#fff;white-space:pre-line}#banner[data-size="160x600"],#banner[data-size="300x600"]{width:300px;height:600px}#banner[data-size="160x600"] .banner-shape,#banner[data-size="300x600"] .banner-shape{top:0;bottom:37.5%;left:0;right:0;height:auto;width:100%}#banner[data-size="160x600"] .banner-logo,#banner[data-size="300x600"] .banner-logo{top:20px;left:40px;right:40px;height:calc(22% - 40px);background-position:50% 50%;width:auto}#banner[data-size="160x600"] .banner-button,#banner[data-size="300x600"] .banner-button{bottom:calc(37.5% + 40px);left:40px;right:40px;font-size:18px;line-height:40px;width:auto}#banner[data-size="160x600"] .banner-images,#banner[data-size="300x600"] .banner-images{top:62.5%;left:0;right:0;bottom:0}#banner[data-size="160x600"] .banner-images:after,#banner[data-size="300x600"] .banner-images:after{top:0;bottom:auto}#banner[data-size="160x600"] .banner-messages,#banner[data-size="300x600"] .banner-messages{width:auto;height:auto;bottom:calc(37.5% + 120px);top:140px;right:10px;left:10px;padding:0}#banner[data-size="160x600"] .banner-messages .banner-message,#banner[data-size="300x600"] .banner-messages .banner-message{font-size:28px;line-height:1.5em;white-space:pre-line;word-break:break-all}#banner[data-size="160x600"] .banner-messages .banner-messages-shape,#banner[data-size="300x600"] .banner-messages .banner-messages-shape{display:none}#banner[data-size="160x600"]{width:160px;height:600px}#banner[data-size="160x600"] .banner-shape{top:240px;bottom:0}#banner[data-size="160x600"] .banner-logo{top:260px;left:20px;right:20px;height:50px;background-position:50% 50%;width:auto}#banner[data-size="160x600"] .banner-button{left:20px;right:20px;font-size:14px;bottom:40px;line-height:30px;font-weight:300}#banner[data-size="160x600"] .banner-images{height:240px;top:0;bottom:auto}#banner[data-size="160x600"] .banner-messages{bottom:105px;top:330px}#banner[data-size="160x600"] .banner-messages .banner-message{font-size:19px;line-height:1.5em;white-space:normal}#banner[data-size="728x90"],#banner[data-size="468x60"],#banner[data-size="320x50"]{width:728px;height:90px}#banner[data-size="728x90"] .banner-shape,#banner[data-size="468x60"] .banner-shape,#banner[data-size="320x50"] .banner-shape{left:340px;top:0;bottom:0;right:auto;width:auto}#banner[data-size="728x90"] .banner-logo,#banner[data-size="468x60"] .banner-logo,#banner[data-size="320x50"] .banner-logo{right:20px;left:540px;bottom:10px;top:10px;width:auto;height:auto;background-position:50% 50%}#banner[data-size="728x90"] .banner-images,#banner[data-size="468x60"] .banner-images,#banner[data-size="320x50"] .banner-images{position:absolute;left:0;top:0;bottom:0;right:auto;width:340px;overflow:hidden}#banner[data-size="728x90"] .banner-images .banner-image,#banner[data-size="468x60"] .banner-images .banner-image,#banner[data-size="320x50"] .banner-images .banner-image{width:100%;height:100%;left:0;right:0;top:0;bottom:0}#banner[data-size="728x90"] .banner-messages,#banner[data-size="468x60"] .banner-messages,#banner[data-size="320x50"] .banner-messages{right:205px;top:0;bottom:36px;left:360px;width:auto;height:auto;padding:0}#banner[data-size="728x90"] .banner-messages .banner-message,#banner[data-size="468x60"] .banner-messages .banner-message,#banner[data-size="320x50"] .banner-messages .banner-message{font-size:17px;line-height:20px;text-align:left;left:0;right:0}#banner[data-size="728x90"] .banner-button,#banner[data-size="468x60"] .banner-button,#banner[data-size="320x50"] .banner-button{right:auto;width:auto;left:360px;line-height:16px;padding:0 30px;font-size:12px;top:auto;bottom:8px}#banner[data-size="468x60"]{width:468px;height:60px}#banner[data-size="468x60"] .banner-images{width:220px}#banner[data-size="468x60"] .banner-logo{left:360px}#banner[data-size="468x60"] .banner-shape{left:220px}#banner[data-size="468x60"] .banner-button{line-height:16px;font-size:10px;bottom:5px;left:230px;border-width:1px}#banner[data-size="468x60"] .banner-messages{left:230px;right:115px;top:0;bottom:28px}#banner[data-size="468x60"] .banner-messages .banner-message{font-size:10px;line-height:13px}#banner[data-size="320x50"]{width:320px;height:50px}#banner[data-size="320x50"] .banner-images{width:160px}#banner[data-size="320x50"] .banner-shape{left:160px}#banner[data-size="320x50"] .banner-logo{left:240px;right:10px}#banner[data-size="320x50"] .banner-button{line-height:16px;font-size:10px;bottom:15px;left:20px;right:182px;border-width:1px;background:#fff;color:#1b649b}#banner[data-size="320x50"] .banner-messages{left:170px;right:85px;top:0;bottom:0}#banner[data-size="320x50"] .banner-messages .banner-message{font-size:10px;line-height:14px}
`;
export default Style4;
