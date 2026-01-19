**_10/29/2025 – Changing Database_ by charles**

Change summary:
Added Seller role and connected it to the existing User model.

Changes:

Added new model: Seller

Connected to User via userId

Includes seller-specific details like bio, shopName, and isVerified

Renamed categories → category for naming consistency

Reasoning:
In an e-commerce system, every seller is also a user (they can log in, have profiles, etc.).
However, not every user is a seller — some are just buyers.
So, the Seller table extends user functionality with seller-specific data.

Future consideration:

Decide whether sellers can have multiple shops.

If yes, create a separate Shop model (with a one-to-many relation to Seller).

If no, keep the shop fields (shopName, etc.) directly in Seller.

**_end_**
