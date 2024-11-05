//Ez egy js kód, egy jobb világ számára. Remélem egyszer olvassa valaki
// -Jobb világ számára meg a faszt. Írtál három ifet és programozónak hívod magad


function Oltas()
{
    var o1 = document.getElementById('oltas1');
    var o2 = document.getElementById('oltas2');
    var o3 = document.getElementById('oltas3');
    var oltashidden = document.getElementById('oltashidden');
    var oltaslista ="";
    oltashidden.value="";

    if (o1.checked) oltaslista+="Aids;";

    if (o2.checked) oltaslista+="Skorbut;";

    if (o3.checked) oltaslista+="Szex";

    if (oltaslista=="") oltaslista+="Nincs"
  oltashidden.value=oltaslista;

}
