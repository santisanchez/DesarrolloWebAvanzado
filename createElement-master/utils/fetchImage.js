export function fetchImage(width,height){
    if (typeof (width) !== 'number') throw new Error('width must be number')
    if (typeof (height) !== 'number') throw new Error('height must be number')
    let imagePromise = fetch(`https://picsum.photos/${width}/${height}`);
    if(typeof imagePromise !== 'object') throw new Error('imagePromise must be an Object')
    return imagePromise;
}

export function fetchImages(){
    return fetch('https://picsum.photos/v2/list?page=1&limit=10');
}