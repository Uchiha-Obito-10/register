var n_s = [];

function submit() {
    var dis_n = [];
    for (var i = 1; i <= 4; i++)
    {
        var name_of_student = document.getElementById("name_of_the_student_"+i).value;
        console.log(name_of_student);
        n_s.push(name_of_student);
    } 
    console.log(n_s);
    var l_n_s = n_s.length;
    console.log(l_n_s);
    for (var j = 0; j < l_n_s; j++) 
    {
     dis_n.push("<h4> Name - "+n_s[j]+"</h4>");
     
    }
    console.log(dis_n);
    document.getElementById("display_name_with_commas").innerHTML = dis_n;
    var remove_commas = dis_n.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display="none";

}