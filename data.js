const data = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: '1.jpg',
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro. Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: '2.jpg',
    },
    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: '3.jpg',
    }
]
let cont = document.querySelector('.cont')
for (let item of data) {
    let box = document.createElement('div')
    let boxTop = document.createElement('div')
    let boxBottom = document.createElement('div')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    let span = document.createElement('span')
    let img = document.createElement('img')

    box.classList.add('box')
    boxTop.classList.add('boxTop')
    boxBottom.classList.add('boxBottom')
    h4.innerHTML = item.preTitle
    p.innerHTML = item.title
    span.innerHTML = item.description
    img.src = `./img/${item.img}`

    boxTop.append(h4, p, span)
    boxBottom.append(img)
    box.append(boxTop, boxBottom)
    cont.append(box)
}
