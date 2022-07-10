//  Try to change a variable let to const
 let count = 0;
 const btns = document.querySelectorAll(".btn"); const counter = document.querySelector('#value');
 btns.forEach(function (btn) {   btn.addEventListener('click', function (e) {     const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
        count++;
    } else if (styles.contains('reset')) {
        count = 0;      
    }

   counter.innerText = count;
  });
 });

