#! /usr/bin/env node




const bio = {
    name: "Pedro Bueno",
    grad: "Mechanical Engineer at UFSCar",
    devPrefer: "Back end developer",
    lang: "HTML, CSS and Javascript",
    frameworks: "NodeJS, VueJS and Bootstrap",
    github: "https://github.com/pedrobuenoxs",
    linkedin: "https://www.linkedin.com/in/pedrohbxs/",
    email: "pedrobuenoxs@gmail.com"
    
}

 const reset = "\x1b[0m"
 const bright = "\x1b[1m"
 const dim = "\x1b[2m"
 const underscore = "\x1b[4m"
 const blink = "\x1b[5m"
 const reverse = "\x1b[7m"
 const hidden = "\x1b[8m"

 const black = "\x1b[30m"
 const red = "\x1b[31m"
 const green = "\x1b[32m"
 const yellow = "\x1b[33m"
 const blue = "\x1b[34m"
 const magenta = "\x1b[35m"
 const cyan = "\x1b[36m"
 const white = "\x1b[37m"
  const BGblack = "\x1b[40m"
 const BGred = "\x1b[41m"
 const BGgreen = "\x1b[42m"
 const BGyellow = "\x1b[43m"
 const BGblue = "\x1b[44m"
 const BGmagenta = "\x1b[45m"
 const BGcyan = "\x1b[46m"
 const BGwhite = "\x1b[47m"


console.log(`
${bright}${underscore,BGred}Welcome to my npx signature! Let me introduce myself.${reset}

My name is ${green}${bright}${bio.name}${reset} and i'm a ${bio.grad}
Now i'm studying to be a ${bright}${green}${bio.devPrefer}.${reset}
My ${bright}${green}programming languages and frameworks${reset} are:
    ${blue}${bright}-${bio.lang}
    -${bio.frameworks}${reset}

${bright}${green}Languages i speak:${reset}
${blue}${bright}    -English (Advanced)
    -Germany (Intermediate)
    -Portuguese (Native)${reset}

You can find me at:
    ${green}${bright}-LinkedIn: ${blue}${bio.linkedin}
    ${green}${bright}-Github: ${blue}${bio.github}
    ${green}${bright}-Email: ${blue}${bio.email}

`)

