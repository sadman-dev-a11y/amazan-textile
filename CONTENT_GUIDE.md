# Adding real catalog products

Stock photography is editorial only. Replace it with client-approved photography when available. Never treat a stock garment as available inventory.

Add actual photos under `public/products/`. Edit `src/data/products.ts`:

```ts
export const products: Product[] = [{
 id: 'client-confirmed-id', slug: 'client-confirmed-slug',
 nameBn: 'ক্লায়েন্টের দেওয়া নাম', category: 'three-piece',
 images: ['products/actual-product.webp'],
 // Optional: code, descriptionBn, fabric, size, color, availability,
 // isNew, isFeatured. Only fill confirmed facts.
}];
```

Slugs and IDs must be unique. Use relative paths without a starting slash. Category must be `three-piece`, `two-piece`, or `readymade-three-piece`. Every image must exist. Use multiple images to enable gallery thumbnails. Do not add fabricated prices or availability. Check search, category, gallery and inquiry after editing.

Contact and address copy is centralized in `src/data/site.ts`. WhatsApp is intentionally absent because no enabled number was confirmed. The inquiry composer only creates a draft; SMS or clipboard actions do not claim it was sent.

## Temporary photography
Downloaded from Unsplash, optimized locally. Visible stock labels distinguish imagery from client inventory.
- Ani Rain: https://unsplash.com/photos/a-rack-of-clothing-hanging-on-a-wall-XChKiHcUTLo
- nikhil uttam: https://unsplash.com/photos/a-close-up-of-a-person-wearing-a-dress-R8iIVyhgNHY
- Bernd Dittrich: https://unsplash.com/photos/colorful-dresses-hanging-on-a-rack-at-a-market-2MqMSuLxIt0
- License: https://unsplash.com/license
