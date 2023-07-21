const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach((item) =>{
    const accordionHeaders = item.querySelector('.accordion-header')
    const accordionPanel = item.querySelector('.accordion-panel')
    const arrow = item.querySelector('.arrow')

    accordionHeaders.addEventListener('click' , function(){
        const isOpen = accordionPanel.classList.contains('open')

        accordionItems.forEach((item) =>{
            item.querySelector('.accordion-panel').classList.remove('open')
            item.querySelector('.arrow').classList.remove('open')
        })
        if(!isOpen){
            accordionPanel.classList.add('open')
            arrow.classList.add('open')
        }else{
            accordionPanel.classList.remove('open')
            arrow.classList.remove('open')
        }
    })
})