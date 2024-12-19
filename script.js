function getLocation() {
    if (navigator.geolocation) {
        // طلب إذن المستخدم للحصول على الموقع
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerText = "الموقع الجغرافي غير مدعوم في هذا المتصفح.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // عرض الموقع في الصفحة
    document.getElementById("location").innerText = 
        "Latitude: " + latitude + "\nLongitude: " + longitude;

    // يمكنك أيضًا عرض الموقع على خريطة باستخدام خرائط جوجل
    const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
    document.getElementById("location").innerHTML += `<br><a href="${mapLink}" target="_blank">عرض الموقع على الخريطة</a>`;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerText = "تم رفض الإذن للوصول إلى الموقع.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerText = "الموقع غير متاح.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerText = "انتهى الوقت للحصول على الموقع.";
            break;
        default:
            document.getElementById("location").innerText = "حدث خطأ غير معروف.";
            break;
    }
}