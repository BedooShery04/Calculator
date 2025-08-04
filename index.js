let display = document.querySelector('input')
let buttons = document.querySelectorAll('button')

buttons.forEach(
    item => {
        item.onclick = () => {
            const currentValue = display.value;
            const lastChar = currentValue.slice(-1);
            const operators = ['+', '-', '×', '÷', '.', '%'];

            if(item.id ==='ac')
                display.value = ''
            else if(item.id === 'backspace')
                display.value = currentValue.slice(0, -1);
            else if(item.id === '=')
                if(display.value.length === 0)
                    display.value = ''
                else {
                    function sin(x) {
                        return Math.sin(x * Math.PI / 180).toFixed(1);
                    }
                    function cos(x) {
                        return Math.cos(x * Math.PI / 180).toFixed(1);
                    }
                    function tan(x) {
                        return Math.tan(x * Math.PI / 180);
                    }
                    let expre = currentValue
                        .replace(/÷/g, '/')
                        .replace(/×/g, '*')
                        .replace(/sin/g, 'sin')
                        .replace(/cos/g, 'cos')
                        .replace(/tan/g, 'tan');

                        display.value = eval(expre)
                    }
            else if(item.innerText)
                if(display.value === 'Empty' || display.value === 'Error')
                    display.value = ''
                else {
                    const newChar = item.innerText;
                    
                    if (operators.includes(newChar)) {
                        if (currentValue.length === 0 && newChar !== '-') return;
                        if (operators.includes(lastChar)) return;
                        if (lastChar === '(' && newChar !== '-') return;
                    }
                    
                    if (newChar === '.') {
                        const parts = currentValue.split(/[\+\-\×\÷]/);
                        const currentNumber = parts[parts.length - 1];
                        if (currentNumber.includes('.')) return;
                    }

                    display.value += item.innerText
                }
        } 
    }
)