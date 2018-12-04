// Задача

// добавить классу Nodes возможность добавления/удаления нескольких css-классов за раз:

// setClasses('class1 class2 class3') // к элементу добавляются 3 css-класса по имени 'class1', 'class2' и 'class3'
// removeClasses('class2 class3') // у элемента удаляются 2 css-класса: 'class2' и 'class3'
// removeAllClasses() // удаляет все css-классы элемента

function Nodes(el) {
    this.el = el;
}

Nodes.prototype.setClasses(classes) {
    let arr = classes.split(' ');
    arr.forEach(element => {
        this.el.classList.add(element)
    });
};

Nodes.prototype.removeClasses(classes) {
    let arr = classes.split(' ');
    arr.forEach(element => {
        this.el.classList.remove(element)
    });
};

Nodes.prototype.removeAllClasses() {
    let arr = this.el.classList.value.split(' ');
    arr.forEach(element => {
        this.el.classList.remove(element)
    });
};

let test = new Nodes(document.querySelector('div'));
setClasses('class1 class2 class3') // к элементу добавляются 3 css-класса по имени 'class1', 'class2' и 'class3'
removeClasses('class2 class3') // у элемента удаляются 2 css-класса: 'class2' и 'class3'
removeAllClasses() // удаляет все css-классы элемента