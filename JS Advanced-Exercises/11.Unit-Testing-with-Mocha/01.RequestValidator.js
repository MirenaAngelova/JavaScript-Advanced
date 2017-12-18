function requestValidator(obj) {
    let methodRegex = /^(GET|POST|DELETE|CONNECT)$/;
    if (obj.method == undefined || !methodRegex.test(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    let uriRegex = /^(\*|[A-Za-z0-9.]+)$/;
    if (obj.uri == undefined || !uriRegex.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    let versionRegex = /(HTTP\/0\.9)|(HTTP\/1\.0)|(HTTP\/1\.1)|(HTTP\/2\.0)/;
    if (obj.version == undefined || !versionRegex.test(obj.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }

    if (obj.message == undefined || obj.message.includes('>') ||
        obj.message.includes('<') || obj.message.includes('\\') ||
        obj.message.includes('&') || obj.message.includes('\'') ||
        obj.message.includes('\"')) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return obj;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));