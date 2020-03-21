import createElement from './utils/createElement'
import { fetchImage,fetchImages } from "./utils/fetchImage";
const $app = document.getElementById('app')

let images;
let elementImages

fetchImages().then((response)=>{
    response.json().then((data)=>{
        images = data
        elementImages = images.map((image,index) => {
            return container.appendChild(createElement('img', { src:image.download_url, class:`image_${index}` }, ['']));
        });
        changeRandomImage();
    }).catch((error)=>{
        throw new Error(error)
    });
})


const container = createElement('div', { id: 'container' }, [''])

$app.appendChild(container)
let changeRandomImage = ()=>{
    let randomIndex = Math.floor((Math.random() * 10));
    let replaceImage = elementImages[randomIndex];
    fetchImage(replaceImage.width,replaceImage.height).then((image)=>{
        replaceImage.src = image.url;
    });
    setTimeout(changeRandomImage,5000);
}