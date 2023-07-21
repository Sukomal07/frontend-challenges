const accordianItems = document.querySelectorAll('.accordian-item')

accordianItems.forEach((item) =>{
    const accordianHeaders = item.querySelector('.accordian-header')
    const accordianPanel = item.querySelector('.accordian-panel')
    const arrow = item.querySelector('.arrow')

    accordianHeaders.addEventListener('click' , function(){
        const isOpen = accordianPanel.classList.contains('open')

        accordianItems.forEach((item) =>{
            item.querySelector('.accordian-panel').classList.remove('open')
            item.querySelector('.arrow').classList.remove('open')
        })
        if(!isOpen){
            accordianPanel.classList.add('open')
            arrow.classList.add('open')
        }else{
            accordianPanel.classList.remove('open')
            arrow.classList.remove('open')
        }
    })
})