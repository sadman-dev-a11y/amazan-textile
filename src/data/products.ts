import { categories } from "./site";
export type Product={id:string;slug:string;nameBn:string;code?:string;category:'three-piece'|'two-piece'|'readymade-three-piece';images:string[];descriptionBn?:string;fabric?:string;size?:string;color?:string;availability?:string;isNew?:boolean;isFeatured?:boolean};
// Publish only client-confirmed inventory. Stock editorial photos are not products.
export const products:Product[]=[];
export function selectProducts(items:Product[],query='',category='',sort='name'){
 const normalized=query.trim().toLocaleLowerCase('bn-BD');
 return items.filter(p=>(!category||category==='new-arrivals'?category!=='new-arrivals'||p.isNew:p.category===category)&&[p.nameBn,p.code,p.category,categories.find(c=>c.slug===p.category)?.name,p.descriptionBn,p.fabric,p.color].filter(Boolean).join(' ').toLocaleLowerCase('bn-BD').includes(normalized)).sort((a,b)=>sort==='new'?Number(b.isNew)-Number(a.isNew):a.nameBn.localeCompare(b.nameBn,'bn'));
}
export function inquiryText(name:string,quantity:number,message:string,product?:Product){
 if(!name.trim()||!Number.isInteger(quantity)||quantity<1||quantity>999)throw new Error('নাম ও সঠিক পরিমাণ দিন।');
 return `আমাজান টেক্সটাইলের কাছে জিজ্ঞাসা\nনাম: ${name.trim()}\nপণ্য: ${product?.nameBn||'কালেকশন সম্পর্কে জানতে চাই'}${product?.code?` (${product.code})`:''}\nপরিমাণ: ${quantity.toLocaleString('bn-BD')}\nবার্তা: ${message.trim()||'বিস্তারিত জানাবেন।'}`;
}
