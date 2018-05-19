let noteInput, noteName, textEntered, target;

noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

function writeLabel(e) {
    if (!e) {
        e = window.event;
    }
    target = e.target || e.srcElement;
    textEntered = target.value;
    noteName.textContent = textEntered;
}

function recorderControls (e) {
    if (!e) {
        e = window.event;
    }
    target = window.target || e.srcElement;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    // good way to handle many btns, reduces alot of event handlers
    switch (target.getAttribute('data-state')) {
        case 'record':
            record(target);
            break;
        case 'stop':
            stop(target);
            break;
        // more btns could go here.
    }
}

function record(target) {
    target.setAttribute('data-state', 'stop');
    target.textContent = 'stop';
}

function stop (target) {
    target.setAttribute('data-state', 'record');
    target.textContent = 'record';
}

// This is where the record/pause controls and functions go
if (document.addEventListener) {
    document.addEventListener('click', function(e) {
        recorderControls(e);
    }, false);
    // if input event fires on noteInput, call writeLabel()
    noteInput.addEventListener('input', writeLabel, false);
} else {
    document.attachEventListener('onclick', function (e) {
        recorderControls(e);
    });
    // if keyup event fires on noteInput, call writeLabel()
    noteIput.attachEvent('onkeyup', writeLabel);
}