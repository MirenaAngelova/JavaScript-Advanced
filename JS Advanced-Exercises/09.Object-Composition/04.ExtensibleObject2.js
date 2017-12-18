function extensibleObject() {
    let obj = {
        extend: function(template) {
            for (let parentProp of Object.keys(template)) {
                if (typeof template[parentProp] === 'function') {
                    Object.getPrototypeOf(obj)[parentProp] = template[parentProp];
                } else {
                    obj[parentProp] = template[parentProp];
                }
            }
        }
    };
    return obj;
}

let template = {
    extensionMethod: function() { console.log('gosho') },
    extensionProperty: 'someString'
}
let obj = extensibleObject();
obj.extend(template);
console.log(obj.__proto__);