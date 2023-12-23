const listImages = document.querySelectorAll('.div-content img')


listImages.forEach(image => {
    image.addEventListener('click', function() {
        const articleDad = this.closest('.div-content')
        const gridBoxP = articleDad.querySelector('.grid-box-p')
        const hiddenPresent = gridBoxP.classList.contains('hidden')

        if (hiddenPresent) {
            gridBoxP.classList.remove('hidden')
            this.src = '../assets/images/icon-minus.svg'
        } else {
            gridBoxP.classList.add('hidden')
            this.src = '../assets/images/icon-plus.svg'
        }
    })
})
