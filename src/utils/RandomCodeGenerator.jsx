
const RandomCodeGenerator = () => {
    const generatedCodes = new Set();
    let prefix = 'aaa';
    const alphabetArray = alphabet.toUpperCase().split('');
    const digitArray = digits.split('');
    const incrementalCode = '';


    while(true) {
        let remainingChars = 7;
        let availableChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const randomChars = [];
        let ditigCount = 0;

        while(remainingChars > 0) {
            const randomIndex = Math.floor(Math.random() * availableChars.length );
            const char = availableChars[randomIndex];

            if(!isNaN(char)) {
                ditigCount++;
                if(ditigCount > 3) continue;

                randomChars.splice(Math.floor(Math.random() * randomChars.length), 0, char);
            }
            else if (ditigCount === 0 && remainingChars <= 1) {
                continue
            }else {
                randomChars.push(char);
            }
            
            availableChars = availableChars.replace(char, "");
            remainingChars--;
        }
        const code = prefix + randomChars.join("");
        if(!generatedCodes.has(code)) {
            generatedCodes.add(code);
            return code.toUpperCase();
        }

        if(availableChars.length === 0 ) {
            prefix = incrementPrefix(prefix);
        }
    }
}

const incrementPrefix = (prefix) => {
    
}