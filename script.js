// for page transitions
window.onload = () => {
    const transition_elem = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');
    console.log(anchors)
    setTimeout(() => {
        transition_elem.classList.remove('is-active');
    }, 300);

    for (let i =0; i < anchors.length; i++) {
        const anchor = anchors[i];
        console.log(anchor)
        anchor.addEventListener('click', e => {
            console.log(e)
            e.preventDefault();
            let target = e.target.href;
            transition_elem.classList.add('is-active');
            setTimeout(() => {
                window.location.href=target;
            }, 300);
        })
    }
}