// رقم واتساب المحل
const shopWhatsAppNumber = "212762944411"; // استبدل الرقم برقم واتساب الخاص بك

document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".order-button");

    orderButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const product = e.target.closest(".product");
            const productName = product.dataset.name;
            const productPrice = product.dataset.price;

            // طلب العنوان
            const userAddress = prompt("من فضلك أدخل عنوانك:");

            if (userAddress) {
                const message = `مرحباً، أريد طلب المنتج التالي: \n\n- المنتج: ${productName}\n- السعر: ${productPrice} درهم\n- العنوان: ${userAddress}`;
                const whatsappUrl = `https://wa.me/${shopWhatsAppNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
            }
        });
    });
});
