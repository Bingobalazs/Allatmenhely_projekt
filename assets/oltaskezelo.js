//Ez egy js kód, egy jobb világ számára. Remélem egyszer olvassa valaki

var oltasok = {
    oltas1: 0,
    oltas2: 0,
    oltas3: 0,
  }

function Oltas(o)
{

    
    var oltas = document.getElementById('oltas').value;
    console.log(oltas)
    var box = document.getElementById('box');
    box.innerHTML = "";

    if (oltas == "o1")
    {
        console.log(1)
        if (oltasok.oltas1 == 0)
        {
            oltasok.oltas1 = 1;
        }
        else
        {
            oltasok.oltas1 = 0;
        }
    }
    else if (oltas == "o2")
    {
        console.log(2)

        if (oltasok.oltas2 == 0)
        {
            oltasok.oltas2 = 1;
        }
        else
        {
            oltasok.oltas2 = 0;
        }
    }
    else if (oltas == "o3")
    {
        console.log(3)

        if (oltasok.oltas3 == 0)
        {
            oltasok.oltas3 = 1;
        }
        else
        {
            oltasok.oltas3 = 0;
        }
    }

    if (oltasok.oltas1 = 1) {box.innerHTML += "oltas1"}
    else if (oltasok.oltas2 = 1) {box.innerHTML += "oltas2"}
    else if (oltasok.oltas3 = 1) {box.innerHTML += "oltas3"}
}
