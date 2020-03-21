import { fetchImage,fetchImages } from "./fetchImage";



describe('fetch image',()=>{
    test('width must be number', () => {
        expect(()=>{
            fetchImage('a',100)
        }).toThrow('width must be number')
    });
    test('height must be number', () => {
        expect(()=>{
            fetchImage(100,'a')
        }).toThrow('height must be number')
    });

    test('image must be an object', () => {
        expect(typeof fetchImage(100,100)).toBe('object');
    });
    
    test('the data must be an array', () => {
        fetchImages().then(response => {
            response.json().then((data)=>{
                expect(data.isArray()).toBe(true)
            })
        })
    })
})    
