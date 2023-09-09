setTimeout(() => {
    let cost1 = document.getElementById('a');
    let money1 = document.getElementById('b');
    let a = Number(cost1.value);
    let b = Number(money1.value);
      if(a==b){
        const text = [
            'Покупка завершена\n',
        ];
        let line = 0;
        let count = 0;
        let result = '';
        function typeLine() {
          let interval = setTimeout(
            () => {
              result += text[line][count]
              document.querySelector('pre').innerHTML =result +'|';
            count++;
            if (count >= text[line].length) {
              count = 0;
              line++;
              if (line == text.length) {
                clearTimeout(interval);
                document.querySelector('pre').innerHTML =result;
                return true;
              }
            }
            typeLine();
          }, getRandomInt(getRandomInt(250*1.5)))
        }
        typeLine();
      
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    }
    else{
        if(a > b){

            let x =a-b;
            const text = [
                'Для покупки не хватает: '+ x +' руб.\n'
            ];
            let line = 0;
            let count = 0;
            let result = '';
            function typeLine() {
              let interval = setTimeout(
                () => {
                  result += text[line][count]
                  document.querySelector('pre').innerHTML =result +'|';
          
          
                count++;
                if (count >= text[line].length) {
                  count = 0;
                  line++;
                  if (line == text.length) {
                    clearTimeout(interval);
                    document.querySelector('pre').innerHTML =result;
                    return true;
                  }
                }
                typeLine();
              }, getRandomInt(getRandomInt(250*1.5)))
            }
            typeLine();
          
          function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        }
        else{
            let x=b-a;
            const text = [
                'Покупка совершнена. Вот твоя сдача: ' + x + ' руб.\n'
            ];
            let line = 0;
            let count = 0;
            let result = '';
            function typeLine() {
              let interval = setTimeout(
                () => {
                  result += text[line][count]
                  document.querySelector('pre').innerHTML =result +'|';
          
          
                count++;
                if (count >= text[line].length) {
                  count = 0;
                  line++;
                  if (line == text.length) {
                    clearTimeout(interval);
                    document.querySelector('pre').innerHTML =result;
                    return true;
                  }
                }
                typeLine();
              }, getRandomInt(getRandomInt(250*1.5)))
            }
            typeLine();
          
          function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        }
    }
}, 1000);


