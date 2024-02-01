import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
};

export default function FaqsPage() {
  return (
    <main>
      <h1>Frequently Asked Questions</h1>

      <section>
        <h2>Buying on Handcrafted Haven</h2>
        <dl>
          <dt>How do I purchase an item on Handcrafted Haven?</dt>
          <dd>Browse our collection of handcrafted items, select the one you like, and click the Add to Cart button. Then, proceed to checkout to complete your purchase.</dd>

          <dt>Can I contact the artisan directly?</dt>
          <dd>Yes, each artisan profile has a contact form where you can send them a message.</dd>
        </dl>
      </section>

      <section>
        <h2>Selling on Handcrafted Haven</h2>
        <dl>
          <dt>How can I sell my handcrafted items on Handcrafted Haven?</dt>
          <dd>To sell on Handcrafted Haven, create a seller account, set up your profile, and list your items along with descriptions and pricing.</dd>

          <dt>What fees does Handcrafted Haven charge for selling?</dt>
          <dd>Handcrafted Haven charges a small listing fee and a transaction fee when an item sells. For detailed fee information, please refer to our Seller Handbook.</dd>
        </dl>
      </section>

      <section>
        <h2>Order and Shipping</h2>
        <dl>
          <dt>How long does it take to ship an item?</dt>
          <dd>Shipping times vary by artisan. Please check the product page for specific shipping information or contact the artisan directly.</dd>

          <dt>What do I do if my order has not arrived?</dt>
          <dd>If your order has not arrived within the expected timeframe, contact the artisan for assistance. If you need further help, our customer service team is here to assist you.</dd>
        </dl>
      </section>

      <section>
        <h2>Returns and Refunds</h2>
        <dl>
          <dt>What is Handcrafted Havens return policy?</dt>
          <dd>Our return policy allows for returns within a certain period after receipt, provided the item is in its original condition. Some items may not be eligible for returns due to their nature.</dd>

          <dt>How do I request a refund?</dt>
          <dd>To request a refund, contact the artisan to arrange a return. Once the item is received and inspected, the artisan will issue a refund.</dd>
        </dl>
      </section>
  
     
    </main>
    
  );
}
