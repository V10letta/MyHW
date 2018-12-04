function Nodes(elem) {
    this.elem = elem;
}

Nodes.prototype.append = function (html) {
    return this.elem.insertAdjacentHTML('beforeend', html);
};
Nodes.prototype.prepend = function (html) {
    return this.elem.insertAdjacentHTML('afterbegin', html);
};
Nodes.prototype.before = function (html) {
    return this.elem.insertAdjacentHTML('beforebegin', html);
};
Nodes.prototype.after = function (html) {
    return this.elem.insertAdjacentHTML('afterend', html);
};

Nodes.prototype.html = function (value) {
    // return value ? (this.elem.innerHTML = value) : this.elem.innerHTML;

    // value && (this.elem.innerHTML = value);

    if (value) {
        this.elem.innerHTML = value;
    } 
    
    return this.elem.innerHTML;
     

    
};

Nodes.prototype.getElement = function () {
    return this.elem;
};


// HW 13

Nodes.prototype.event = function (eventName, callback) {
    if (!callback){
        let newEvent = new Element(eventName);
        return this.eleme.dispatchEvent(newEvent);
    }
    return this.name.addEventListener(eventName, callback);
}


let test = new Nodes(document.querySelector('div'));

let html = '<span>adwad</span>';
test.append(html);
test.prepend(html);
console.log(test.html());
console.log(test.getElement());
test.html(html);