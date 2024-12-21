// 购物车数组
let cart = [];
 
// 添加到购物车函数
function addToCart(productName, price) {
    const cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    updateCart();
}
 
// 更新购物车显示
function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let totalPrice = 0;
 
    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `${item.name} - ${item.quantity} x $${item.price}`;
        cartList.appendChild(li);
 
        totalPrice += item.price * item.quantity;
    });
 
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
 
// 结账函数（这里仅作为示例，实际应跳转到结账页面或进行进一步处理）
function checkout() {
    alert('您选择了以下商品进行结账: \n' + cart.map(item => `${item.name} - ${item.quantity} x $${item.price}`).join('\n'));
    // 重置购物车
    cart = [];
    updateCart();
}
 
// 添加注释（示例）
/*
 * addToCart 函数：
 * 参数：productName（产品名称），price（产品价格）
 * 功能：将产品添加到购物车中，如果已存在则增加数量
 */
/*
 * updateCart 函数：
 * 功能：更新购物车显示内容，包括商品列表和总价
 */
/*
 * checkout 函数：
 * 功能：模拟结账过程，弹出选择的商品信息，并重置购物车
 */
// 你可以根据需要添加更多注释


