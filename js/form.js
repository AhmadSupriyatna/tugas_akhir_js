function buat_login(){
    var elem = document.getElementById("X");
    elem.parentElement.removeChild(elem);
    var p = document.createElement("p")
    p.className = "tulisan_login";
    p.innerHTML = "Silahkan Mendaftar";
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p);
    
    var label_nama = document.createElement("label");
    label_nama.innerHTML = "Nama User";
    element.appendChild(label_nama);
    var input_nama = document.createElement("input");
    input_nama.type = "text";
    input_nama.placeholder = "Nama User..";
    input_nama.className = "form_login";
    element.appendChild(input_nama);

    var label_nohp = document.createElement("label");
    label_nohp.innerHTML = "No Handphone";
    element.appendChild(label_nohp);
    var input_nohp = document.createElement("input");
    input_nohp.type = "tel";
    input_nohp.placeholder = "Nomor Handphone";
    input_nohp.className = "form_login";
    element.appendChild(input_nohp);

    var label_user = document.createElement("label");
    label_user.innerHTML = "Username";
    element.appendChild(label_user);
    var input_user = document.createElement("input");
    input_user.type = "text";
    input_user.placeholder = "Username atau email";
    input_user.className = "form_login";
    element.appendChild(input_user);

    var label_pass = document.createElement("label");
    label_pass.innerHTML = "Password";
    element.appendChild(label_pass);
    var input_pass = document.createElement("input");
    input_pass.type = "password";
    input_pass.placeholder = "Password";
    input_pass.className = "form_login";
    element.appendChild(input_pass);

    var input_tombol = document.createElement("button");
    input_tombol.type = "submit";
    input_tombol.className = "tombol_login";
    input_tombol.innerHTML = "DAFTAR SEKARANG"
    element.appendChild(input_tombol);
}