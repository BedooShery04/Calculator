let display = document.querySelector('input')
let buttons = document.querySelectorAll('button')

buttons.forEach(
    item => {
        item.onclick = () => {
            if(item.id ==='ac')
                display.value = ''
            else if(item.id === 'backspace')
                display.value = display.value.slice(0, -1);
            else if(item.id === '=')
                if(display.value.length === 0)
                    display.value = ''
                else
                    try {
                        function sin(x) {
                            return Math.sin(x * Math.PI / 180);
                        }
                        function cos(x) {
                            return Math.cos(x * Math.PI / 180);
                        }
                        function tan(x) {
                            return Math.tan(x * Math.PI / 180);
                        }
                        let expre = display.value
                            .replace(/÷/g, '/')
                            .replace(/×/g, '*')
                            .replace(/sin/g, 'sin')
                            .replace(/cos/g, 'cos')
                            .replace(/tan/g, 'tan');

                            display.value = eval(expre)
                    } catch (error) {
                        display.value = 'Error'
                    }
            else if(item.innerText)
                if(display.value === 'Empty' || display.value === 'Error')
                    display.value = ''
                else
                    display.value += item.innerText
        } 
    }
)