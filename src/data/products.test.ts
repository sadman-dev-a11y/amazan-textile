import {describe,it,expect} from 'vitest';
import {selectProducts,inquiryText,type Product} from './products';
const items:Product[]=[{id:'1',slug:'one',nameBn:'নীল পোশাক',code:'AT-1',category:'three-piece',images:['a'],isNew:true},{id:'2',slug:'two',nameBn:'লাল পোশাক',category:'two-piece',images:['b']}];
describe('catalog search and inquiry',()=>{
 it('searches Bangla and case-insensitive codes',()=>{expect(selectProducts(items,'নীল')).toHaveLength(1);expect(selectProducts(items,'at-1')[0].id).toBe('1');});
 it('combines category and search and new-arrival filtering',()=>{expect(selectProducts(items,'লাল','three-piece')).toHaveLength(0);expect(selectProducts(items,'','new-arrivals')).toEqual([items[0]]);expect(selectProducts(items,'','two-piece')[0].id).toBe('2');});
 it('handles empty catalog and unknown search',()=>{expect(selectProducts([])).toEqual([]);expect(selectProducts(items,'missing')).toEqual([]);});
 it('creates an accurate product inquiry',()=>{const draft=inquiryText('নাম',2,'দাম জানতে চাই',items[0]);expect(draft).toContain('নীল পোশাক (AT-1)');expect(draft).toContain('পরিমাণ: ২');expect(draft).toContain('দাম জানতে চাই');});
 it('rejects missing names and invalid quantities',()=>{for(const qty of [0,-1,1.5,NaN,1000])expect(()=>inquiryText('নাম',qty,'')).toThrow();expect(()=>inquiryText(' ',1,'')).toThrow();});
});
