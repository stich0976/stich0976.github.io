const moda = document.querySelector('.modal'),
      btn = document.querySelector('.btn'),
      dataClose = document.querySelector('[data-close]');

      btn.onclick = function() {
          moda.style.display = 'block';
          dataClose.style.display = 'none';
      }
      window.onclick = function(e) {
          if(e.target == moda) {
              moda.style.display = 'none';
          }
      }

const check = document.getElementById('check'),
      inp = document.getElementById('inp');

      check.onclick = function() {
          if(inp.style.display != 'none'){
            inp.style.display = 'none';
          } else (inp.style.display = 'block')
          
      }
      