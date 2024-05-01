<script>
        const cart = {};

        function addToCart(item) {
            const quantity = parseInt(document.getElementById(item).value);
            if (quantity > 0) {
                if (cart[item]) {
                    cart[item] += quantity;
                } else {
                    cart[item] = quantity;
                }
                alert(`Added ${quantity} ${item.replace('_', ' ')} to cart.`);
            } else {
                alert("Please enter a valid quantity.");
            }
        }

        function calculateTotal() {
            const prices = {
                "bread": 2.50,
                "cake": 10.00,
                "chocolate_cake": 15.00,
                "vanilla_cupcake": 3.00,
                "wheat_loaf": 4.00
            };

            let total = 0;
            const current_date = new Date().toLocaleString();

            let summary = "<h2>Order Summary:</h2>";
            for (const item in cart) {
                const quantity = cart[item];
                summary += `${quantity} ${item.replace('_', ' ')}s - $${prices[item].toFixed(2)} each<br>`;
                total += quantity * prices[item];
            }
            summary += `<strong>Total: $${total.toFixed(2)}</strong><br>`;
            summary += `Date: ${current_date}`;

            document.getElementById("orderSummary").innerHTML = summary;
        }
    </script>