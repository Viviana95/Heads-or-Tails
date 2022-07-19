img_array=['1.png', '2.png']

function random_img(){
    random_index= Math.floor(Math.random()* img_array.length);

    selectImg = img_array[random_index]
    document.getElementById('image').src = `./images/${selectImg}`
}