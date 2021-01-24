// for page transitions
window.onload = () => {
    const transition_elem = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');
    setTimeout(() => {
        transition_elem.classList.remove('is-active');
    }, 300);

    for (let i =0; i < anchors.length; i++) {
        const anchor = anchors[i];
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

window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
};

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

function toggleNetbeans(os) {
    switch(os) {
        case 'netbeans-windows':
            document.getElementById('netbeans-mac').classList.remove('show');
            document.getElementById(os).classList.add('show');
            document.getElementById('option-netbeans-windows').style.color = 'var(--white)';
            document.getElementById('option-netbeans-windows').style.backgroundColor = 'var(--red)';
            document.getElementById('option-netbeans-mac').style.color = 'var(--red)';
            document.getElementById('option-netbeans-mac').style.backgroundColor = 'var(--white)';
            break;
        case 'netbeans-mac':
            document.getElementById(os).classList.add('show');
            document.getElementById('netbeans-windows').classList.remove('show');
            document.getElementById('option-netbeans-mac').style.color = 'var(--white)';
            document.getElementById('option-netbeans-mac').style.backgroundColor = 'var(--red)';
            document.getElementById('option-netbeans-windows').style.color = 'var(--red)';
            document.getElementById('option-netbeans-windows').style.backgroundColor = 'var(--white)';
            break;
        default:
            break;
    }
}

function toggleCL(os) {
    switch(os) {
        case 'cline-windows':
            document.getElementById('cline-mac').classList.remove('show');
            document.getElementById(os).classList.add('show');
            document.getElementById('option-cline-windows').style.color = 'var(--white)';
            document.getElementById('option-cline-windows').style.backgroundColor = 'var(--red)';
            document.getElementById('option-cline-mac').style.color = 'var(--red)';
            document.getElementById('option-cline-mac').style.backgroundColor = 'var(--white)';
            break;
        case 'cline-mac':
            document.getElementById(os).classList.add('show');
            document.getElementById('cline-windows').classList.remove('show');
            document.getElementById('option-cline-mac').style.color = 'var(--white)';
            document.getElementById('option-cline-mac').style.backgroundColor = 'var(--red)';
            document.getElementById('option-cline-windows').style.color = 'var(--red)';
            document.getElementById('option-cline-windows').style.backgroundColor = 'var(--white)';
            break;
        default:
            break;
    }
}