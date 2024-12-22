
### Product Gift-Wrapping

To achieve the gift-wrapping functionality, we will create a custom solution that allows the client to fully control the gift-wrapping options. The client will be able to determine which products will have the gift-wrap functionality by adding a "Gift-wrap" tag to the product. Additionally, a setting schema option will be provided to enable or disable the gift card feature. The client will also have the option to select a gift-wrap product from the customizer, where they can choose either a free or priced gift-wrap product. Furthermore, we will provide options to set the maximum number of characters for the message and other input fields, allowing the client to fully customize the gift-wrapping experience.

---

### Theme Preview and GitHub Repository

- **Theme Preview:** : https://quickstart-71fec84b.myshopify.com/
- **Password:** : dev_rupesh

---


### Deliverables:

#### 1. A Detailed Document on the Approaches to Achieve the Functionality:
The approach, as provided above, includes a detailed breakdown of each task and element required to implement the gift-wrapping functionality.

#### 2. The Client Can Configure Which Product Has the Gift-Wrap Option and Which Doesn’t:
This can be achieved by:
- Using product metafields
- Creating a specific collection for gift-wrap products
- Adding a product tag like "gift-wrap"

In the current solution, the gift-wrap option is managed through the use of a "gift-wrap" tag, which the client can add to products that offer the gift-wrap functionality.

#### 3. The Client Can Configure the Character Limit for Each Field:
An option to configure the character limit for each gift-wrap input field has been provided in the theme settings, allowing the client to set the desired limits.

#### 4. The Gift-Wrapping Service Can Be Free-of-Charge or at a Price:
An option to select a gift-wrap product has been provided in the theme settings. The client can choose any product, either free or priced, as the gift-wrap product.

#### 5. Customers Are Able to Update the Gift-Wrapping Options in the Cart:
Customers can update or remove the gift-wrapping options directly from the cart. The changes will be reflected in real-time, allowing for seamless adjustments.

#### 6. The Warehouse Team Gets the Gift-Wrapping Information from the Order via Shopify Admin:
The gift-wrapping information will be passed as line item properties in the checkout, and it will be visible in the order details within the Shopify Admin panel, ensuring the warehouse team can easily access the necessary details.

#### 7. Using the Best Practices as Detailed Here: [Building a CORE Component.]:
I have updated some of the existing Dawn theme functions to create this feature, ensuring that I adhered to the best practices for building scalable and maintainable components as outlined.

#### 8. Must Be Created Using Tailwind CSS:
I have added the "tw" prefix to the Tailwind classes to prevent any potential conflicts with existing Dawn theme classes and ensure that the styles are applied correctly without being overwritten.

#### 9. High-Resolution Images/SVGs Are Used:
I have used high-resolution images and SVGs to ensure clarity and sharpness across all devices, enhancing the visual appeal and user experience.

#### 10. It Is Built and Tested at 100% View Across Desktop, Tablet, and Mobile:
The feature has been built and thoroughly tested to ensure it functions seamlessly across desktop, tablet, and mobile devices, providing a consistent experience for all users.

#### 11. It Is Tested on the Latest 3 Versions of Safari, Edge, Chrome, and Firefox:
The feature has been tested across the latest three versions of Safari, Edge, Chrome, and Firefox to ensure compatibility and consistent performance on all major browsers.

#### 12. Optimized for Speed and Accessibility:
The feature has been optimized for fast loading times and ensures accessibility standards are met, providing a smooth and inclusive user experience across all devices.
