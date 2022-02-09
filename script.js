function check(){
	var c=0;
	var q1=document.exam.q1.value;
	var q2=document.exam.q2.value;
	var q3=document.exam.q3.value;

	if (q1=="Yes") {c++}
	if (q2=="Yes") {c++}
	if (q3=="Yes") {c++}

	document.write(c)

}