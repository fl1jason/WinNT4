document.addEventListener('DOMContentLoaded', (event) => {

    
    let isWindowMoving = false;
    let x = 0;
    let y = 0;



    const onWindowMinimize = () => {
        
    }

    const onWindowMaximize = () => {
        
    }

    const onWindowClose = () => {
        
    }

    const onWindowStartMove = (e) => {
        x = e.offsetX;
        y = e.offsetY;
        isWindowMoving = true;
        console.log('starting to move', x, y);
    }

    const onWindowMoving = (e) => {
        if (isWindowMoving) {
            let left = e.clientX - x;
            let top = e.clientY - y;
            
            isWindowMoving = true;
            

            const theWindow = document.getElementById('window');
            //console.log(theWindow);
            theWindow.style.left = left + 'px';
            theWindow.style.top = top + 'px';
        }
    }
    const onWindowStopMove = (e) => {
        x = e.offsetX;
        y = e.offsetY;
        isWindowMoving = false;
        console.log('Stop moving', x, y);
    }

    const onSelectWindow = () => {
        console.log('selecting window');
        const windowTitle = document.getElementById('window-title');
        windowTitle.classList.add('active-window');
    }

    const onContentKeyDown = (e) => {
        /*
        const editor = document.getElementById('editor');
        let text = editor.textContent;

        // if the key is backspace, remove the last character
        if (e.keyCode === 8) {
            text = text.substring(0, text.length - 1);
        }
        else
        {
            text+= e.key;
        }
        
        editor.textContent = text;

        const footer = document.getElementById('window-footer');
        footer.textContent = `${text.length.toString()} characters`;
        */
    }

    const onStartButtonMouseDown = (e) => {
        e.target.classList.add('pressed');
        startMenu.style.display = 'block';

        const startUpSound = document.getElementById('intro');
        startUpSound.play();
    }

    const onStartButtonMouseUp = (e) => {
        e.target.classList.remove('pressed');
    }

    const onButtonMouseDown = (e) => {
        e.target.classList.add('pressed');
    }

    const onButtonMouseUp = (e) => {
        e.target.classList.remove('pressed');
    }

    const onDocumentClick = (e) => {
        if (e.target.id !== 'start-button') {
            startMenu.style.display = 'none';
        }
    }

    const startButton = document.getElementById('start-button');
    startButton.addEventListener('mousedown', onStartButtonMouseDown);
    startButton.addEventListener('mouseup', onStartButtonMouseUp);

    const startMenu = document.getElementById('start-menu');

    const windowMinimize = document.getElementById('winMin');
    windowMinimize.addEventListener('click', onWindowMinimize);

    const windowMaximize = document.getElementById('winMax');
    windowMaximize.addEventListener('click', onWindowMaximize);

    const windowClose = document.getElementById('winClose');
    windowClose.addEventListener('click', onWindowClose);

    const windowTitle = document.getElementById('window-title');
    windowTitle.addEventListener('mousedown', onWindowStartMove);
    windowTitle.addEventListener('mousemove', onWindowMoving);
    windowTitle.addEventListener('click', onSelectWindow);
    document.addEventListener('mouseup', onWindowStopMove);
    document.addEventListener('keydown', onContentKeyDown);
    document.addEventListener('click', onDocumentClick);

    const myComputer = document.getElementById('my-computer-taskbar');
    myComputer.addEventListener('mousedown', onButtonMouseDown);
    myComputer.addEventListener('mouseup', onButtonMouseUp);
});
