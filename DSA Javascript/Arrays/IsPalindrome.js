let str = ''
for(let i = 0; i < s.length; i++) {
    if(s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 || 
      s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57 || 
      s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122){
        str += s[i].toLowerCase()
    }
}
console.log(str)
return str == str.split('').reverse().join('')