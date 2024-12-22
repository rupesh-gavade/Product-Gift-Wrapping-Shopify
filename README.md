The client would like to add a gift-wrapping functionality on their product pages where customers can select to wrap the product as a gift and can configure the message.


To achieve the gift-wrapping functionality, we will create a custom solution that allows the client to fully control the gift-wrapping options. The client will be able to determine which products will have the gift wrap functionality by adding a "Gift-wrap" tag to the product. Additionally, a setting schema option will be provided to enable or disable the gift card feature. The client will also have the option to select a gift-wrap product from the customizer, where they can choose either a free or priced gift wrap product. Furthermore, we will provide options to set the maximum number of characters for the message and other input fields, allowing the client to fully customize the gift-wrapping experience.

Theme Preview and GitHub Repository
Theme Preview: https://quickstart-71fec84b.myshopify.com/
Password : dev_rupesh


**Deliverables:**
A detailed document on the approaches to achieve the functionality:
The approach, as provided above, includes a detailed breakdown of each task and element required to implement the gift-wrapping functionality.


The client can configure which product has the gift-wrap option and which doesn’t: 
This can be achieved by using product metafields, creating a specific collection for gift-wrap products, or adding a product tag like "gift-wrap." In the current solution, the gift-wrap option is managed through the use of a "gift-wrap" tag, which the client can add to products that offer the gift-wrap functionality.


The client can configure the character limit for each field:
An option to configure the character limit for each gift-wrap input field has been provided in the theme settings, allowing the client to set the desired limits.


The gift-wrapping service can be free-of-charge or at a price:
An option to select a gift-wrapper product has been provided in the theme settings. The client can choose any product, either free or priced, as the gift wrap product.


Customers are able to update the gift-wrapping options in the cart:
Customers can update or remove the gift-wrapping options directly from the cart. The changes will be reflected in real-time, allowing for seamless adjustments.


The warehouse team gets the gift-wrapping information from the order via Shopify Admin: The gift-wrapping information will be passed as line item properties in the checkout, and it will be visible in the order details within the Shopify Admin panel, ensuring the warehouse team can easily access the necessary details.


Using the best practices as detailed here: [ Building a CORE Component.]:
I have updated some of the existing Dawn theme functions to create this feature, ensuring that I adhered to the best practices for building scalable and maintainable components as outlined.


Must be created using Tailwind CSS:I have added the "tw" prefix to the Tailwind classes to prevent any potential conflicts with existing Dawn theme classes and ensure that the styles are applied correctly without being overwritten.


High resolution images/SVGs are used:
I have used high-resolution images and SVGs to ensure clarity and sharpness across all devices, enhancing the visual appeal and user experience.


It is built and tested at 100% view across desktop, tablet, and mobile:
The feature has been built and thoroughly tested to ensure it functions seamlessly across desktop, tablet, and mobile devices, providing a consistent experience for all users.


It is tested on the latest 3 versions of Safari, Edge, Chrome, and Firefox:
The feature has been tested across the latest three versions of Safari, Edge, Chrome, and Firefox to ensure compatibility and consistent performance on all major browsers.


Optimised for speed and accessibility:The feature has been optimized for fast loading times and ensures accessibility standards are met, providing a smooth and inclusive user experience across all devices.
