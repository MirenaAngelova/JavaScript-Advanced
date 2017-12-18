function extensibleObject() {
    let obj = {};
    obj = Object.create(obj);
    obj.extend = function(template) {
        for (let key in template) {
            if (template.hasOwnProperty(key)) {
                let element = template[key];
                if (typeof element === 'function') {
                    obj.__proto__[key] = element;
                } else {
                    obj[key] = element;
                }
            }
        }
    }
    return obj;
}

let template = {
    extensionMethod: function() { console.log('gosho') },
    extensionProperty: 'someString'
}
let obj = extensibleObject();
obj.extend(template);
console.log(obj.__proto__);